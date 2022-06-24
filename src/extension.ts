import { commands, CompletionList, ExtensionContext, Hover, languages, TextEdit, Range, DiagnosticCollection } from 'vscode';
import { formatting } from './formatting';
import { clearVirtualDocumentContents, createVirtualDoc, registerTextDocumentEvents } from './virtualDocument';

const languageIds = ["django-html"];
let diagnosticCollection: DiagnosticCollection;

export function activate(context: ExtensionContext) {

	registerTextDocumentEvents(context, languageIds);

	diagnosticCollection = languages.createDiagnosticCollection('django');
	context.subscriptions.push(diagnosticCollection);

	context.subscriptions.push(languages.registerDocumentFormattingEditProvider('django-html', {
		provideDocumentFormattingEdits: async (document, options, token) => {
			const otext = document.getText();
			if (!otext) { return; }
			let newDoc = document;
			// try {
			// const vdocUri = createVirtualDoc(document);
			// 	const textEdits = await commands.executeCommand<TextEdit[]>("vscode.executeFormatDocumentProvider", vdocUri, options);
			// 	let ntext = '';
			// 	let start = 0;
			// 	for (let i = 0; i < textEdits.length; i++) {
			// 		const te = textEdits[i];
			// 		ntext += otext.slice(start, document.offsetAt(te.range.start)) + te.newText;
			// 		start = document.offsetAt(te.range.end);
			// 	}
			// 	ntext += otext.slice(start);
			// 	newDoc = { uri: document.uri, getText() { return ntext; } };
			// } catch (err) {
			// 	console.log(err);
			// 	newDoc = document;
			// }

			const text = formatting(newDoc, diagnosticCollection);
			if (text && text != otext) {
				const range = new Range(document.positionAt(0), document.positionAt(otext.length));
				return [new TextEdit(range, text)];
			} else {
				return [];
			}
		},
	}));

	context.subscriptions.push(languages.registerCompletionItemProvider(languageIds, {
		provideCompletionItems: async (document, position, token, context) => {
			const vdocUri = createVirtualDoc(document);
			return await commands.executeCommand<CompletionList>(
				'vscode.executeCompletionItemProvider',
				vdocUri,
				position,
				context.triggerCharacter
			);
		},
	}, '.', '(', ':', '<'));
	context.subscriptions.push(languages.registerHoverProvider(languageIds, {
		provideHover: async (document, position, token) => {
			const vdocUri = createVirtualDoc(document);
			const hs = await commands.executeCommand<Hover[]>(
				'vscode.executeHoverProvider',
				vdocUri,
				position
			);
			return hs?.[0];
		}
	}));
}

export function deactivate(): Thenable<void> | undefined {
	clearVirtualDocumentContents();
	return undefined;
}
