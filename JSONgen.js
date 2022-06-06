const area = require('./json/area.json');
const areaRank = require('./json/areaRank.json');
const borders = require('./json/borders.json');
const borderCount = require('./json/borderCount.json');
const capital = require('./json/capital.json');
const coastal = require('./json/coastal.json');
const continent = require('./json/continent.json');
const flagColors = require('./json/flagColors.json');
const flagColorCount = require('./json/flagColorCount.json');
const government = require('./json/government.json');
const headOfState = require('./json/headOfState.json');
const names = require('./json/names.json');
const population = require('./json/population.json');
const populationRank = require('./json/populationRank.json');
const religion = require('./json/religion.json');

const list = {};

for (const key in names) {
	list[key] = {
		names: names[key],
		area: area[key],
		areaRank: areaRank[key],
		borders: borders[key],
		borderCount: borderCount[key],
		capital: capital[key],
		coastal: coastal[key],
		continent: continent[key],
		flagColors: flagColors[key],
		flagColorCount: flagColorCount[key],
		government: government[key],
		headOfState: headOfState[key],
		population: population[key],
		populationRank: populationRank[key],
		religion: religion[key],
	};
}

console.log(JSON.stringify(list, null, 0));
