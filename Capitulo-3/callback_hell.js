const fs = require('fs');
const path = require('path');

fs.readdir(__dirname, (erro, contents) => {
	if (erro) {throw error; }
	// contents.array.forEach( function(element, index) {
	// 	// statements
	// });
	contents.forEach((content) => {
		const dir = path.join(__dirname, content);
		fs.stat(dir, (erro, stat) => {
			if (erro) { throw erro; }
			if (stat.isFile()) {
				console.log('%s %d bytes', content, stat.size);
			}
		});
	});
});