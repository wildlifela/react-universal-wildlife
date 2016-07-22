#!/usr/bin/env node
require('../server.babel') // babel registration (runtime transpilation for node)

let config = require('../src/config')
let path = require('path')
let rootDir = path.resolve(__dirname, '..')
/**
 * Define isomorphic constants.
 */
global.__CLIENT__ = false
global.__SERVER__ = true
global.__DISABLE_SSR__ = false  // <----- DISABLES SERVER SIDE RENDERING FOR ERROR DEBUGGING
global.__DEVELOPMENT__ = config.development

global.fetch = require('isomorphic-fetch')

if (__DEVELOPMENT__) {
    if (!require('piping')({
            hook: true,
            ignore: /(\/\.|~$|\.json|\.scss$)/i
        })) {
        return
    }
}

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
let WebpackIsomorphicTools = require('webpack-isomorphic-tools')
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('../webpack/webpack.isomorphic.tools'))
    .development(__DEVELOPMENT__)
    .server(rootDir, function() {
        require('../src/server')
    })
