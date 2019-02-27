const express = require('express')
const next = require('next')
const compression = require('compression');
const { parse } = require('url')
const { join } = require('path')
const Router = require('./routes').Router

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(compression())
    server.use(
      '/static',
      express.static(join(__dirname, '/static'), {
        maxAge: '365d',
      }),
    )

    const rootStaticFiles = ['/favicon.ico'];

    Router.forEachPrettyPattern((page, pattern, defaultParams) => server.get(pattern, (req, res) =>
      app.render(req, res, `/${page}`, Object.assign({}, defaultParams, req.query, req.params))
    ))

    server.get('/:file', async (req, res) => {
      const parsedUrl = parse(req.url, true)
      if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
        const path = join(__dirname, 'static', parsedUrl.pathname);
        return app.serveStatic(req, res, path)
      }
    })

    server.get('*', (req, res) => handle(req, res))
    server.listen(port)
  })