const ansi = require('ansi');
const moment = require('moment');

const cursor = ansi(process.stdout);

cursor.hex('#0000ff').bg.grey().write(moment().format('DD.MM.YYYY HH:mm:ss')).reset().bg.reset().write('\n');
