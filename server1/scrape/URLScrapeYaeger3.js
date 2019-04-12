//This is the file that I want to use. 
//This js script works
//Here we take our urls and output them to a csv file

const fs = require('fs');
var lineReader = require('line-reader');

lineReader.eachLine('./SerialNumbersWithNames.csv', function(line, last) {
    // console.log(line);
    let templine = 'http://www.utahcounty.gov/LandRecords/Property.asp?av_serial=' + line + '\n';

    fs.appendFile('./data.csv', templine, (err) => {
        if (err) throw err;
        console.log(templine + ' saved');
    });
    if (last){
        return false
    }
});