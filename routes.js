const UrlPrettifier = require('next-url-prettifier').default

const routes = []

const urlPrettifier = new UrlPrettifier(routes)
exports.default = routes
exports.Router = urlPrettifier