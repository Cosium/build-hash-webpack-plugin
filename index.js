const path = require('path');

class BuildHashPlugin {

    constructor(options) {
        this.options = {
            filename: 'build-hash.json'
        };

        if (!options) {
            return;
        }

        if (options.filename) {
            this.options.filename = options.filename;
        }
    }

    apply(compiler) {
        const buildJsonFile = path.resolve(compiler.options.output.path || '.', this.options.filename);

        compiler.hooks.afterEmit.tapAsync('BuildHashWebpackPlugin', (compilation, callback) => {
            const stats = compilation.getStats().toJson({
                hash: true,
                publicPath: false,
                assets: false,
                chunks: false,
                modules: false,
                source: false,
                errorDetails: false,
                timings: false
            });

            compiler.outputFileSystem.writeFile(buildJsonFile, JSON.stringify({hash: stats.hash}), callback);
        });
    }
}

module.exports = BuildHashPlugin;