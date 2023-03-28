# Demo Vue

# Local Run

## Development

Before

```
pnpm install
```

pnpm run {packageName}, eg:

```
pnpm run dev vue
```

## Build

pnpm run dev {packageName}, eg:

```
pnpm run build vue
```

## Script

```
// generate dts file
pnpm run build-dts
```

```
// customization dts file
pnpm run build-rollup-dts
```


```
// generate ./packages/{pkgName}/dist/*.d.ts
pnpm run test-dts
```

## Note

The development environment is packaged with `esbuild`.

The official environment is packaged with `rollup`.
