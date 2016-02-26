require('babel-register')

var ReactDOMServer = require('react-dom/server'),
    React = require('react'),
    fs = require('fs'),
    Component = require('./../src/js/app'),
    html

if (Component.default) {
    Component = Component.default
}

html = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Component)
)

var indexFile = __dirname + '/../index.html'
var data = fs.readFile(indexFile, 'utf8', function(err, data){
    var result = data.replace(/\[REPLACE\]/, html)
    fs.writeFile(indexFile, result, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
})
