import json from '@rollup/plugin-json';

export default {
    input: 'src/main.js',
    output: [{
        file: 'dist/bundle.cjs.js',
        format: 'cjs'
    }, {
        file: 'dist/bundle.esm.js',
        format: 'esm'
    }],
    plugins: [json()]
};