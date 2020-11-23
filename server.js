const express = require('express')
const next = require('next')
const compression = require('compression')
const dev = false
const app = next({ dev })
const handle = app.getRequestHandler()
const port = 3000
console.log('Wait a moment...')
app.prepare()
  .then(() => {
    const server = express()
    server.use(compression()) // gzip
    server.use(express.static('seo'))
    server.get('/detail/:id', (req, res) => {
      const actualPage = '/detail'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })
    server.get('*', (req, res) => handle(req, res))
    server.listen(port, (err) => {
      if (err) {throw err}
      console.log('> Ready on http://127.0.0.1:' + port)
    })

  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })
