const UrlPrettifier = require('next-url-prettifier').default

const routes = [
    {
        page: 'signin',
        prettyUrl: '/signin',
    },
    {
        page: 'article',
        // prettyUrl: '/characteristic',
        prettyUrlPatterns: [
            {
                pattern: '/',
            },
            {
                pattern: '/article'
            }
        ],
    },
    {
        page: 'article/add',
        prettyUrl: '/article/add',
    },
    {
        page: 'article/edit',
        prettyUrl: '/article/edit/:id',
    },
    {
        page: 'events',
        prettyUrl: '/events',
    },
    {
        page: 'events/add',
        prettyUrl: '/events/add',
    },
    {
        page: 'events/edit',
        prettyUrl: '/events/edit/:id',
    },
    {
        page: 'knowledges',
        prettyUrl: '/knowledges',
    },
    {
        page: 'knowledges/add',
        prettyUrl: '/knowledges/add',
    },
    {
        page: 'knowledges/edit',
        prettyUrl: '/knowledges/edit/:id',
    },
    {
        page: 'worksheets',
        prettyUrl: '/worksheets',
    },
    {
        page: 'worksheets/add',
        prettyUrl: '/worksheets/add',
    },
    {
        page: 'worksheets/edit',
        prettyUrl: '/worksheets/edit/:id',
    },
    {
        page: 'gallery',
        prettyUrl: '/gallery',
    },
]

const urlPrettifier = new UrlPrettifier(routes)
exports.default = routes
exports.Router = urlPrettifier