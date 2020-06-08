var StaticServer = require('static-server');

var server = new StaticServer({
	rootPath: './dist/',
	port: 8000
});

server.start(function(){
	console.log('Server Is Started At Port ', server.port)
});