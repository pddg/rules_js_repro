# repro for rules_js and remix

Download dependencies:

```
bazel fetch @npm//...
```

Run `remix build` in bazel's sandbox:

```
bazel build //remixapp
```

It causes following errors:

```
INFO: Analyzed target //remixapp:remixapp (4 packages loaded, 4837 targets configured).
INFO: Found 1 target...
ERROR: /Users/pddg/ghq/github.com/pddg/rules_js_repro/remixapp/BUILD.bazel:19:16: Remix remixapp/public/build failed: (Exit 1): remixapp__js_binary.sh failed: error executing command (from target //remixapp:remixapp) bazel-out/darwin_arm64-opt-exec-2B5CBBC6/bin/remixapp/remixapp__js_binary.sh build

Use --sandbox_debug to see verbose messages from the sandbox and retain the sandbox build root for debugging
The following error is a bug in Remix; please open an issue! https://github.com/remix-run/remix/issues/new
Missing output for entry point
Error
    at Object.onCompileFailure (/private/var/tmp/_bazel_pddg/319ec592a1cf9c9e7aab0272fcef4948/sandbox/darwin-sandbox/1704/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@remix-run+dev@1.9.0_biqbaboplfbrettd7655fr4n2y/node_modules/@remix-run/dev/dist/cli/commands.js:174:13)
    at Object.compile (/private/var/tmp/_bazel_pddg/319ec592a1cf9c9e7aab0272fcef4948/sandbox/darwin-sandbox/1704/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@remix-run+dev@1.9.0_biqbaboplfbrettd7655fr4n2y/node_modules/@remix-run/dev/dist/compiler/remixCompiler.js:33:134)
    at async Object.build (/private/var/tmp/_bazel_pddg/319ec592a1cf9c9e7aab0272fcef4948/sandbox/darwin-sandbox/1704/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@remix-run+dev@1.9.0_biqbaboplfbrettd7655fr4n2y/node_modules/@remix-run/dev/dist/compiler/build.js:33:3)
    at async Object.build (/private/var/tmp/_bazel_pddg/319ec592a1cf9c9e7aab0272fcef4948/sandbox/darwin-sandbox/1704/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@remix-run+dev@1.9.0_biqbaboplfbrettd7655fr4n2y/node_modules/@remix-run/dev/dist/cli/commands.js:169:3)
    at async Object.run (/private/var/tmp/_bazel_pddg/319ec592a1cf9c9e7aab0272fcef4948/sandbox/darwin-sandbox/1704/execroot/__main__/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@remix-run+dev@1.9.0_biqbaboplfbrettd7655fr4n2y/node_modules/@remix-run/dev/dist/cli/run.js:448:7)
Building Remix app in production mode...
Target //remixapp:remixapp failed to build
Use --verbose_failures to see the command lines of failed build steps.
INFO: Elapsed time: 10.282s, Critical Path: 5.43s
INFO: 2295 processes: 1502 internal, 793 local.
FAILED: Build did NOT complete successfully
```

