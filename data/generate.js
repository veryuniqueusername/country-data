const json = require('./info_temp.json');
const names = require('./names.json');

function getCode(name) {
	if (name.toLowerCase() in names) {
		return name.toLowerCase();
	}
	const code = Object.keys(names).find((key) => {
		return names[key].find((lcz) => {
			if (lcz.toLowerCase() === name.toLowerCase()) {
				return true;
			}
		});
	});
	return code !== undefined ? code : undefined;
}

const list = json.reduce((acc, cur) => {
	const code = getCode(cur.Country);
	acc[code] = cur.Capital;
	return acc;
}, {});

const nlist = {};
for (const key in names) {
	nlist[key] = list[key];
}

console.log(JSON.stringify(nlist, null, 2));
