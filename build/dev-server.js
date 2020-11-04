'use strict'

require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

let _resolve
const readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

const server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}

// Database
const loader = express();
const mysql = require('mysql');
const morgan = require('morgan');

// Settings
loader.set('port', process.env.PORT || 3000);
// Middlewares
loader.use(morgan('dev'));
loader.use(express.json());

// Routes
loader.get('/', (req, res) => {
    res.send('Home is running!');
});

loader.get('/bio', (req, res) => {
    res.send('Bio is running!');
});

loader.get('/education', (req, res) => {
    res.send('Education is running!');
});

loader.get('/experience', (req, res) => {
    const sql = 'SELECT * FROM experience';
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        if (result.length > 0) {
            console.log(result);
            res.json(result);
        } else {
            console.log('Vacio');
        }
      });
    
    res.send('Experience is running!');
});

loader.get('/speaking', (req, res) => {
    res.send('Speaking is running!');
});

// Database connection
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'firstcvpage'
});

connection.connect( function(err) {
    if (err) throw err;
    console.log("Database connected");
});

// Server is listening
loader.listen(loader.get('port'), () => {
  console.log(`Server is listening on port ${loader.get('port')}`);
});