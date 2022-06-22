import { format, Options, ParserOptions, resolveConfig } from 'prettier';
import { Diagnostic, DiagnosticCollection, Range, Uri, TextDocument } from 'vscode';
import * as htmlPlugin from 'prettier/parser-html';
import * as djangoPlugin from 'prettier-plugin-django';

export function formatting(document: TextDocument, diagnosticCollection?: DiagnosticCollection): string {
	const uri = Uri.parse(document.uri.toString());
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
	Object.assign(options, resolveConfig.sync(uri.fsPath) ?? []);
	options.twigSingleQuote = true;
	options.htmlWhitespaceSensitivity = 'ignore';
	options.parser = 'html';

	let text = document.getText();

	try {
		//format html first
		text = addIgnores(text);
		text = format(text, options as Options);
		text = text.replace(/\<\!-- prettier-ignore --\>\n/g, '');

		//format django template
		options.plugins = [djangoPlugin];
		options.parser = "melody";
		const text2 = format(text, options as Options);
		if (text2) {
			text = text2.replace(/\{# prettier-ignore \[special\] #\}\s*/g, "");
			diagnosticCollection?.clear();
			return text;
		} else {
			throw new Error('django-html: formatting failed');
		}
	} catch (error) {
		if (diagnosticCollection && error.loc) {
			diagnosticCollection.clear();
			const loc = error.loc
			let line = loc.start.line - 1, col = loc.start.column - 1;
			let line2 = loc.end.line - 1, col2 = loc.end.column - 1;
			const lines = text.split('\n');
			//delete ingore lines and fix line, line2
			for (let i = 0; i < lines.length; i++) {
				if (lines[i].includes('<!-- prettier-ignore -->') || lines[i].includes('{# prettier-ignore [special] #}')) {
					if (i < line) {
						line--
					}
					if (i < line2) {
						line2--
					}
					lines.splice(i, 1);
					i--;
				}
			}
			text = lines.join('\n');
			const range = new Range(line, col, line2, col2);
			setTimeout(() => diagnosticCollection.set(uri, [new Diagnostic(range, error.message.split(' \t ')[0], 0)]), 250);
			return text;
		}
		text = text.replace(/\<\!-- prettier-ignore --\>\n/g, '');
		text = text.replace(/\{# prettier-ignore \[special\] #\}\s*/g, "");
		return text;
	}

	function addIgnores(text: string): string {
		const result = htmlPlugin.parsers.html.parse(text, null, {} as ParserOptions)
		let increase = 0;
		for (let i = 0; i < result.children.length; i++) {
			const node = result.children[i];
			if (node.type == 'element' && (node.name == 'script' || node.name == 'style')) {
				const insertText = "{# prettier-ignore [special] #}";
				const start = node.sourceSpan.start.offset;
				text = text.slice(0, start + increase) + insertText + text.slice(start + increase);
				increase += insertText.length;
			} else if (node.type == 'text' && node.value.trim().length > 0) {
				const insertText = "<!-- prettier-ignore -->";
				const start = node.sourceSpan.start.offset;
				text = text.slice(0, start + increase) + insertText + text.slice(start + increase);
				increase += insertText.length;
			}
		}
		return text;
	}
}
