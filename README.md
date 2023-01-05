# repro for rules_js and esbuild

With `patch_node_fs = True`:

```
❯ bazel build //app:app
INFO: Analyzed target //app:app (0 packages loaded, 0 targets configured).
INFO: Found 1 target...
INFO: From JsRunBinary app/out.js:
path to app.js in Node.js (realpath): /private/var/tmp/_bazel_pddg/319ec592a1cf9c9e7aab0272fcef4948/sandbox/darwin-sandbox/163/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/app/app.js
path to app.js in esbuild (raw): ../../../../../../../../../execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/app/app.js
path to app.js in esbuild (realpath): /private/var/tmp/_bazel_pddg/319ec592a1cf9c9e7aab0272fcef4948/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/app/app.js
Target //app:app up-to-date:
  bazel-bin/app/out.js
INFO: Elapsed time: 0.226s, Critical Path: 0.13s
INFO: 4 processes: 1 internal, 1 darwin-sandbox, 2 local.
INFO: Build completed successfully, 4 total actions
```

With `patch_node_fs = False`:

```
❯ bazel build //app:app_without_patch
INFO: Analyzed target //app:app_without_patch (0 packages loaded, 5 targets configured).
INFO: Found 1 target...
INFO: From JsRunBinary app/out_without_patch.js:
path to app.js in Node.js (realpath): /private/var/tmp/_bazel_pddg/319ec592a1cf9c9e7aab0272fcef4948/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/app/app.js
path to app.js in esbuild (raw): ../../../../../../../../../execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/app/app.js
path to app.js in esbuild (realpath): /private/var/tmp/_bazel_pddg/319ec592a1cf9c9e7aab0272fcef4948/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/app/app.js
Target //app:app_without_patch up-to-date:
  bazel-bin/app/out_without_patch.js
INFO: Elapsed time: 0.206s, Critical Path: 0.11s
INFO: 2 processes: 1 internal, 1 darwin-sandbox.
INFO: Build completed successfully, 2 total actions
```
