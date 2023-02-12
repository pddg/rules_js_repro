# Using remix with bazel and pnpm workspace

## Build

```
bazel build //remixapp:pages
```

## Run dev server

```
ibazel run //remixapp:pages_dev
```

or


```
bazel run -- @pnpm//:pnpm --dir $PWD/remixapp run dev
```

## Note

- `deasync` requires `node-gyp` during running lifecycle hook. Add it by `pnpm.packageExtensions` in package.json at root.
  - Refs: https://github.com/aspect-build/rules_js/issues/715#issuecomment-1363312964
