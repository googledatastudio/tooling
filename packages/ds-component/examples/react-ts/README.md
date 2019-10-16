# React & Typescript

This is a simple example of using the library with React & Typescript.

## Usage

1.  link `@google/dscc`. This command should be run from the root directory of
    `ds-component`.

```bash
yarn link
```

1.  Link `@google/dscc` into `examples/react-ts`

```bash
cd examples/react-ts
yarn link '@google/dscc'
yarn install
yarn start
```

## Deploying A New Version

```bash
cd examples/react-ts
yarn publish-viz
```
