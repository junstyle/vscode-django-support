# Django template file support for vscode

## About

this extention inherit from <https://github.com/vscode-django/vscode-django>, thanks.

## Features

1. syntax highlight;
2. html, css, javascript syntax highlight;
3. format and pretty code;
4. auto completion for html tags, attributes, css, javascript;
5. some error/problem tips when formatting;
6. formatted by **prettier**, can automatic search prettier config file in the dirs, such as .prettierrc, .prettier.json...;

## Default file associated to django template support

```text
.django
.dj
```

## Add your file associations to django template support

```json
  "files.associations": {
    "**/views/**/*.html": "django-html",
    "*.tpl": "django-html"
  },
```

## How to format django template files

1. shortcut: `shift+alt+f`
2. context menu: `Format Document`
3. set formatting on saving files:

```json
  "[django-html]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "junstyle.vscode-django-support"
  },
```

## If you love this extension, you could

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >](https://www.buymeacoffee.com/junstyle)
