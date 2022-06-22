# Django template file support for vscode

## About

this extention inherit from https://github.com/vscode-django/vscode-django, thanks.

## Features

1. syntax highlight;
2. html, css, javascript syntax highlight;
3. format and pretty code;
4. auto completion for html tags, attributes, css, javascript;
5. some error/problem tips when formatting;
6. formatted by <b>prettier</b>, can automatic search prettier config file in the dirs, such as .prettierrc, .prettier.json...;

## Add file associations to django template syntax

```json
  "files.associations": {
    "**/views/**/*.html": "django-html",
    "*.tpl": "django-html"
  },
```

## How to format django template files

1. shortcut: <kbd>shift+alt+f</kbd>
2. context menu: <b>Format Document</b>
3. set formatting on saving files:

```json
  "[django-html]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "junstyle.vscode-django-support"
  },
```
