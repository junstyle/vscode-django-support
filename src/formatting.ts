import { format, Options, resolveConfig } from 'prettier';
import { Diagnostic, DiagnosticCollection, Range, Uri } from 'vscode';
import { getLanguageService, LanguageService, TokenType } from 'vscode-html-languageservice';
import { ITextDocument } from './virtualDocument';

export interface Options2 extends Options {
	twigPrintWidth: number;
	twigMultiTags: string[];
	twigAlwaysBreakObjects: boolean;
	twigSingleQuote: boolean;
	overrides?: any;
}

const htmlLanguageService = getLanguageService();

export function formatting(document: ITextDocument, diagnosticCollection?: DiagnosticCollection): string {
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
	};
	Object.assign(options, resolveConfig.sync(uri.fsPath) ?? []);
	options.twigSingleQuote = true;
	options.parser = "melody";

	let text: string;
	try {
		text = commendCSSAndScriptRegion(htmlLanguageService, document.getText());
		text = format(text, options as Options);
		text = text.replace(/\{# prettier-ignore \[special\] #\}\s*/g, "");
		diagnosticCollection?.clear();
		return text;
	} catch (error) {
		if (diagnosticCollection && typeof error == 'object') {
			diagnosticCollection.clear();
			const range = new Range(error.line - 1, error.column, error.line, 0);
			setTimeout(() => diagnosticCollection.set(uri, [new Diagnostic(range, error.msg, 0)]), 300);
		}
		text = text.replace(/\{# prettier-ignore \[special\] #\}/g, "");
		error.documentText = text;
		throw error;
	}
}

function commendCSSAndScriptRegion(languageService: LanguageService, documentText: string): string {
	const scanner = languageService.createScanner(documentText);

	let offset = 0;
	let token = scanner.scan();
	while (token !== TokenType.EOS) {
		switch (token) {
			case TokenType.StartTag: {
				const tag = scanner.getTokenText().toLowerCase();
				if (tag == "script" || tag == "style") {
					const start = scanner.getTokenOffset() - 1;
					const insertText = "{# prettier-ignore [special] #}";
					documentText = documentText.slice(0, start + offset) + insertText + documentText.slice(start + offset);
					offset += insertText.length;
				}
				break;
			}
		}
		token = scanner.scan();
	}

	return documentText;
}
