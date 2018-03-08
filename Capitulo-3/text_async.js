const fs = require('fs');

for(let k = 1; k <= 5; k++){
	const file = `async-txt${k}.txt`;
	fs.writeFileSync(file, 'Hello  Node.js!', (err, out) => {
		console.log(out);
	});
}