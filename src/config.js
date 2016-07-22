require('babel-polyfill')


module.exports = {
    development: process.env.NODE_ENV !== 'production',
    host: process.env.HOST ||  (typeof window === 'object' ? window.location.hostname : 'localhost'),
    port: process.env.PORT || 3000,
    app: {
        meta: [
            {name: 'description', content: ''},
            {charset: 'utf-8'},
            {property: 'og:site_name', content: ''},
            {property: 'og:image', content: ''},
            {property: 'og:locale', content: ''},
            {property: 'og:title', content: ''},
            {property: 'og:description', content: ''},
            {property: 'og:card', content: ''},
            {property: 'og:site', content: ''},
            {property: 'og:creator', content: ''},
            {property: 'og:image:width', content: ''},
            {property: 'og:image:height', content: ''}
        ]
    }
}