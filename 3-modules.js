// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const { alpha, bravo, charlie } = require('./4-names');

const sayHello = require('./5-utils');

const someData = require('./6-alternative-flavor');



sayHello(alpha)
// sayHi(bravo)
// sayHi(charlie)
require('./7-mind-grenade')  //will execute the function call in that module