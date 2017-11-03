var express = require('express');
var proxy = require('http-proxy-middleware');

//https://gist.github.com/smmoosavi/66584aaa234efa28b527b5afde643596
var app = express();
var craPattern = /^(\/(static\/|.*\.hot-update\.js(on)?$|sockjs-node\/)).*$/;
app.use(craPattern, proxy({
    target:'http://react:3000',
    // target: 'http://localhost:3000', // create react app
    ws: true,
    changeOrigin: true,
    cookieDomainRewrite: {
      "*": ""
    }
}));
app.use(proxy({
    target:'http://django:8000',
    // target: 'http://localhost:8000', // django
    changeOrigin: true,
    cookieDomainRewrite: {
      "*": ""
    }
}));
app.listen(4000);
