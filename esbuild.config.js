import esbuild from 'esbuild';
import {readFile} from 'node:fs/promises';

const TemplateMinifyPlugin = {
    name: "TemplateMinifyPlugin",
    setup: build => {
        build.onLoad({filter: /.ts/}, async args => {
            const content = await readFile(args.path, 'utf8');
            
            return {
                contents: content.replace(/\s\s+/g, ''),
                loader: 'ts'
            }
        });
    }
};

await esbuild.build({
    entryPoints: ['src/index.ts'],
    format: 'esm',
    logLevel: 'info',
    minify: true,
    outfile: 'dist/index.mjs',
    plugins: [TemplateMinifyPlugin],
});

await esbuild.build({
    entryPoints: ['src/index.ts'],
    format: 'iife',
    globalName: 'js4y.components',
    logLevel: 'info',
    minify: true,
    outfile: 'dist/index.js',
    plugins: [TemplateMinifyPlugin]
});
