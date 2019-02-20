const UrlPrettifier = require('next-url-prettifier').default

const routes = [
    {
        page: 'signin',
        prettyUrl: '/signin',
    },
    {
        page: 'articles',
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
        page: 'articles/add',
        prettyUrl: '/articles/add',
    },
    {
        page: 'articles/edit',
        prettyUrl: '/articles/edit/:id',
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