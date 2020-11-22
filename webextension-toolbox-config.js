const { resolve } = require("path")
const GlobEntriesPlugin = require("webpack-watched-glob-entries-plugin")

module.exports = {
    webpack: (config, {dev, vendor}) => {
        // Add typescript loader. supports .ts and .tsx files as entry points
        config.resolve.extensions.push('.ts')
        config.entry = GlobEntriesPlugin.getEntries(resolve('app', '?(scripts)/*.ts'))
        config.module.rules.push({test: /\.ts$/, loader: 'ts-loader'})

        return config
    },
    copyIgnore: ['**/*.ts'],
}
