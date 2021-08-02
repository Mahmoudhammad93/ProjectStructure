var StaticServer = require('static-server');

var server = new StaticServer({
	rootPath: './dist/',
	port: 10000
});

server.start(function(){
	console.log('Server Is Started At Port =','http://localhost:'+server.port)
});