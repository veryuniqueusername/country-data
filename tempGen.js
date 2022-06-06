const json = require('./json/borders.json');
const names = require('./json/names.json');

const list = {};
for (const key in names) {
	list[key] = json[key].length;
}

console.log(JSON.stringify(list, null, 0));
