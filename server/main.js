const fs = require('fs')

module.exports = filePath => {
	let data = fs.readFileSync(filePath).toString() /* open the file as string */
	return JSON.stringify(JSON.parse(data), false, 3);
}