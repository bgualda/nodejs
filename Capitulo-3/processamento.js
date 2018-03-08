const http = require('http');
const fs = require('fs');
const leituraAsync = require('./leitura_async');
const leituraSync = require('./leitura_sync');
const arquivo = './node.exe';
const stream = fs.createWriteStream(arquivo);
const download = 'http://nodejs.org/dist/v8.10.0/node-v8.10.0-win-x64.zip';
http.get(download, (res) => {
	console.log('Fazendo download do Node.js');
	res.on('data', (data) => stream.write(data));
	res.on('end', () => {
		stream.end();
		console.log('Download Finalizado');
		leituraAsync(arquivo);
		leituraSync(arquivo);
	});
});