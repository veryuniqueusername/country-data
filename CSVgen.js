const area = require('./json/area.json');
const areaRank = require('./json/areaRank.json');
const borders = require('./json/borders.json');
const capital = require('./json/capital.json');
const coastal = require('./json/coastal.json');
const continent = require('./json/continent.json');
const flagColors = require('./json/flagColors.json');
const government = require('./json/government.json');
const headOfState = require('./json/headOfState.json');
const names = require('./json/names.json');
const population = require('./json/population.json');
const populationRank = require('./json/populationRank.json');
const religion = require('./json/religion.json');

const list = [];

for (const key in names) {
	list.push({
		names: names[key].join(';'),
		code: key,
		area: area[key],
		areaRank: areaRank[key],
		borders: borders[key].join(';'),
		capital: capital[key],
		coastal: coastal[key],
		continent: continent[key],
		flagColors: flagColors[key].join(';'),
		government: government[key],
		headOfState: headOfState[key].replace(/,/g, ';'),
		population: population[key],
		populationRank: populationRank[key],
		religion: religion[key],
	});
}

console.log(JSON.stringify(list));
