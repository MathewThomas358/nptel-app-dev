var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {

    'article1' : {
    	title: 'Article 1',
    	heading: 'Article 1',
    	content: `<p>This is a test. This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.</p>
    
    		<div>
    			<p>This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.</p>
    		</div>`
    },
    'article2' : {
        title: 'Article 2',
    	heading: 'Article 2',
    	content: `<p>This is a test. This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.</p>
    
    		<div>
    			<p>This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.</p>
    		</div>`
    },
    'article3' : {
        title: 'Article 3',
    	heading: 'Article 3',
    	content: `<p>This is a test. This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.</p>
    
    		<div>
    			<p>This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.</p>
    		</div>`
    },
    
};
function createTemp (data) {
	var title = data.title;
	var heading = data.heading;
	var content = data.content;
	var htmlTemp = `
		<html>
		<head>
			<title>${title}</title>
			<link rel="stylesheet" type="text/css" href="/style.css">
		</head>
		<body>
			<div class="container">
				<h1>${heading}</h1>
				<hr>
			<div>
			<a href="/">Home</a>
			</div>
				${content}
			</div>
		</body>
		</html>
		`;
	return htmlTemp;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createTemp(articles[articleName]));
  
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
