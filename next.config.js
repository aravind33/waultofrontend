const withCSS = require('@zeit/next-css')
const webpack = require('webpack')

module.exports = withCSS({
    publicRuntimeConfig: {
        APP_NAME: 'WAULTO',
        API_DEVELOPMENT: 'http://localhost:5000/api',
        API_PRODUCTION: 'https://seoblog.com/api',
        PRODUCTION: false,
        DOMAIN_DEVELOPMENT: 'http://192.168.1.3:3000',
        DOMAIN_PRODUCTION: 'https://seoblog.com',
        FB_APP_ID: '1627412520743045',
        DISQUS_SHORTNAME:'waulto-1'
    }
    
});
