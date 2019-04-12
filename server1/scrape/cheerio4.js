// ohhhh snap! this guy works!!!
const fs = require('fs');
var lineReader = require('line-reader');
var csv = require('fast-csv');
var cheerio = require('cheerio');
var request = require('request');
// 0:68

lineReader.eachLine('./data.csv', function(line, last) {
    const url = line.slice(0, 69)
    const urla = line.slice(0, 69)
    const name = line.slice(70)
    request(urla, function(err, resp, url) {
        if (!err){
        const $ = cheerio.load(url);
        const td = $('table tr td table tr td table tr:nth-child(4) td:nth-child(1)');
        const address = (td.text().slice(0, 49))
        const pair = (name + '\n' + address + '\n' + urla + '\n')
    fs.appendFile('address.csv', pair, (err) => {
        if (err) throw err;
        console.log('saved');
    })
        }
      },

    );

    if (last){
        return false
    }
});
