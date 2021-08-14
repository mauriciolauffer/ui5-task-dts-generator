# ui5-task-dts-generator

Task for [ui5-builder](https://github.com/SAP/ui5-builder) which generates d.ts files (TypeScript type declaration file).

## Install

```bash
npm install ui5-task-dts-generator --save-dev
```

## Usage

1. Define the dependency in `$yourapp/package.json`:

```json
"devDependencies": {
    // ...
    "ui5-task-dts-generator": "*"
    // ...
},
"ui5": {
  "dependencies": [
    // ...
    "ui5-task-dts-generator",
    // ...
  ]
}
```

> As the devDependencies are not recognized by the UI5 tooling, they need to be listed in the `ui5 > dependencies` array. In addition, once using the `ui5 > dependencies` array you need to list all UI5 tooling relevant dependencies.

2. Configure it in `$yourapp/ui5.yaml`:

```yaml
builder:
  customTasks:
  - name: ui5-task-dts-generator
    afterTask: generateResourcesJson
```

## Author

Mauricio Lauffer

- LinkedIn: [https://linkedin.com/in/mauriciolauffer](https://linkedin.com/in/mauriciolauffer)

## License

[MIT](LICENSE)
