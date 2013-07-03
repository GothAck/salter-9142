#!env node
var fs = require('fs')
  , path = require('path')
  , async = require('async');

var args = process.argv.slice(2);

if (!args.length) {
  console.error('No files specified');
  process.exit(1)
}
var output = fs.createWriteStream('output.csv', { flags: 'a', encoding: 'utf8' });
async.eachSeries(
    args
  , function (filename, next) {
      fs.readFile(filename, function (err, data) {
        if (data.length % 24) {
          console.error(filename, 'is not the correct length, should be a multiple of 24 bytes!');
          process.exit(2);
        }
        console.log(data.length)
        var buffer = [];
        var i = 0;
        while (i < data.length) {
          output.write(JSON.stringify({
              profile : data.readUInt8    (i +  0)
            , height  : data.readUInt8    (i +  1)
            , age     : data.readUInt8    (i +  2)
            , fitness : data.readUInt8    (i +  3)
            , weight  : data.readUInt16LE (i +  4) / 10
            , bmi     : data.readUInt16LE (i +  6) / 10 
            , fat     : data.readUInt16LE (i +  8) / 10
            , water   : data.readUInt16LE (i + 10) / 10
            , muscle  : data.readUInt16LE (i + 12) / 10
            , visceral: data.readUInt8    (i + 14)
            , padding : data.readUInt8    (i + 15)
            , bmr     : data.readUInt16LE (i + 16)
            , year    : data.readUInt8    (i + 18)
            , month   : data.readUInt8    (i + 19)
            , day     : data.readUInt8    (i + 20)
            , hour    : data.readUInt8    (i + 21)
            , minute  : data.readUInt8    (i + 22)
            , second  : data.readUInt8    (i + 23)
          }));
          output.write('\n');
          i += 24;
        }
      });
    }
  , function (err) {
    output.end();
  }
);
