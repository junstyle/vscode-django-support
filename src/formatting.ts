import { format, Options, ParserOptions, resolveConfig } from 'prettier';
import { Diagnostic, DiagnosticCollection, Range, TextDocument } from 'vscode';
import * as htmlPlugin from 'prettier/parser-html';
import * as djangoPlugin from 'prettier-plugin-django';

export function formatting(document: TextDocument, diagnosticCollection?: DiagnosticCollection): string {
	const options = {
		"tabWidth": 2,
		"printWidth": 5000,
		"semi": false,
		"singleQuote": true,
		"trailingComma": "none",

		"twigPrintWidth": 5000,
		"twigMultiTags": [
			"with,endwith"
		],
		"twigAlwaysBreakObjects": false,
		"twigSingleQuote": true,
		// "overrides": [
		// 	{
		// 		"files": [
		// 			"*.django",
		// 			document.uri.fsPath
		// 		],
		// 		"options": {
		// 		}
		// 	}
		// ],
		"parser": "melody",
		// "plugins": [
		// 	"D:/npm/global/node_modules/prettier-plugin-django"
		// ]
		"plugins": [],
		"htmlWhitespaceSensitivity": "ignore",
	};
	Object.assign(options, resolveConfig.sync(document.uri.fsPath) ?? []);
	options.twigSingleQuote = true;
	options.plugins = [djangoPlugin];
	options.parser = "melody";
	options.htmlWhitespaceSensitivity = 'ignore';

	const doc = { text: document.getText() };
	try {
		doc.text = format(doc.text, options as Options);
		if (!doc.text) {
			throw new Error('django-html: formatting failed');
		}

		formatStyleAndScript(doc, options as Options)
		diagnosticCollection?.clear()
	} catch (error) {
		if (diagnosticCollection && error.loc) {
			diagnosticCollection.clear();
			const loc = error.loc
			if (!loc.end) {
				loc.end = { line: loc.start.line, column: loc.start.column + 1 };
			}
			let line = loc.start.line - 1, col = loc.start.column - 1;
			let line2 = loc.end.line - 1, col2 = loc.end.column - 1;
			let range = new Range(line, col, line2, col2);
			setTimeout(() => diagnosticCollection.set(document.uri, [new Diagnostic(range, error.message.split(' \t ')[0].split('\n')[0], 0)]), 250);
		}
	}
	return doc.text;
}

function formatStyleAndScript(doc: { text: string }, options: Options) {
	let indent = '  '
	if (options.useTabs) {
		indent = '\t'
	} else {
		if (options.tabWidth) {
			indent = ' '.repeat(options.tabWidth)
		}
	}
	let eol = doc.text.includes('\r\n') ? '\r\n' : '\n';

	let result = htmlPlugin.parsers.html.parse(doc.text, null, {} as ParserOptions)
	let incrChars = 0;
	let incrLines = 0;
	const doFormat = (root, depth) => {
		if (!root.children) return
		for (let i = 0; i < root.children.length; i++) {
			const node = root.children[i];
			if (node.type == 'element' && (node.name == 'script' || node.name == 'style')) {
				options.parser = node.name == 'script' ? 'babel' : 'css'
				let child = node.children[0]
				let ctext = '\n'.repeat(child.sourceSpan.start.line + incrLines) + ' '.repeat(child.sourceSpan.start.col) + child.value; //keep the line and column for error tips
				ctext = eol + format(ctext, options).trim().split(eol).map(line => indent.repeat(depth + 1) + line).join(eol) + eol + indent.repeat(depth);
				const start = child.sourceSpan.start.offset;
				doc.text = doc.text.slice(0, start + incrChars) + ctext + doc.text.slice(start + child.value.length + incrChars);
				incrChars += ctext.length - child.value.length;
				incrLines += ctext.split('\n').length - child.value.split('\n').length;
			} else {
				doFormat(node, depth + 1)
			}
		}
	}
	doFormat(result, 0);
}