// npm - global command, it comes with nodejs
// npm --version

// local dependency - the package can be only can be used in this particular project
// npm i <packageName>

// Global dependency - the package can be use it in any project
// npm install -g <packageName>

// Uninstall dependencies
// npm uninstall <packageName>

// package.json - mainfest file (stores important info about project/package). There are tree ways to create it:
// - manual approach (create package.json in the root, create properties, etc)
// - npm init (step by step, press enter to skip)
// - npm init -y (everything by default)

// How to use of a dependency
const lodash = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = lodash.flattenDeep(items);

console.log(newItems);