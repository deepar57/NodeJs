// Создать программу для получения информации о последних новостей с выбранного вами сайта в структурированном виде.
const request = require('request');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');

request({
    uri: 'https://www.fontanka.ru/',
    method: 'GET',
    encoding: null
}, (err, response, body) => {
    if (err) {
        console.log(err);
    }
    else if (response.statusCode != 200) {
        console.log(response.statusCode);
    }
    else {
        const strBody = iconv.decode(body, 'utf-8');
        const $ = cheerio.load(strBody);

        $('.EPdh').each(function (index) {
            console.log(`${index}: ${$(this).text()}`);
        }).toArray();
    }
});