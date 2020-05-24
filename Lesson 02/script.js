//const ansi = require('ansi');
//const moment = require('moment');
const minimist = require('minimist');
const readLine = require('readline');
const fs = require('fs');

const argv = minimist(process.argv.slice(2));

if (argv["out"] == undefined || argv["out"] == "") {
    console.log("Не указан параметр 'out'");
    return;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (line) => {
    onLine(line);
});

let right = getRandomInt(2) + 1;

rl.question("Какое число загадано (1/2)? (нужно: " + right + ") :", (answer) => {
    onLine(answer);
});

function onLine(line) {
    if (line === 'exit' || line === 'q') {
        rl.close();
        return;
    }

    if (line == right)
    {
        console.log('Угадали!');
        fs.appendFile(argv["out"], "Угадали! Нужно было: " + right + '\r\n', (err, data) => {
            if (err) {
                console.log("Ошибка записи в файл.");
            }
        });
    }
    else
    {
        console.log('Не угадали!');
        fs.appendFile(argv["out"], "Не угадали! Нужно было: " + right + ", а ввели: " + line + '\r\n', (err, data) => {
            if (err) {
                console.log("Ошибка записи в файл.");
            }
        });
    }    
        
    right = getRandomInt(2) + 1;
    
    console.log('');
    console.log("Какое число загадано (1/2)? (нужно: " + right + ") :");
}