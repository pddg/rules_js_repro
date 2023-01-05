'use strict';

async function main() {
    let args = process.argv.slice(2);
    if (args.length < 2) {
        console.error("Usage: node main.js INPUT OUTPUT");
        process.exit(1);
    }

    let path = require("path");

    const pathToJs = path.resolve(args[0]);
    const pathToOut = path.resolve(args[1]);
    const jsBasename = path.basename(pathToJs); 

    let result = await require('esbuild').build({
        entryPoints: [pathToJs],
        metafile: true,
        outfile: pathToOut,
    });

    let fs = require("fs");

    console.log('path to %s in Node.js (realpath): %s', jsBasename, fs.realpathSync(pathToJs));
    console.log('path to %s in esbuild (raw): %s', jsBasename, Object.keys(result.metafile.inputs)[0]);
    console.log('path to %s in esbuild (realpath): %s', jsBasename, fs.realpathSync(Object.keys(result.metafile.inputs)[0]));
}
main()

