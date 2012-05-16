/*
 * Quick development tool script to manually run checks for a host on the command line
 */

var mage = require('mage-finger'),
    http = require('http');

// Debug default target
var target = process.argv.length > 2 ? process.argv[2] : 'http://local6.dev';

http.Agent = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_8; en-US) AppleWebKit/532.5 (KHTML, like Gecko) Chrome/4.0.249.0 Safari/532.5';
//console.log('Using user agent "' + http.Agent + '"');

var collector = new mage.collector(target, {
    'testcomplete': function(finger, versions) {
        console.log('Completed test "' + finger + '"');
    },
    'allcomplete': function(results) {
        console.log('Completed all tests');
        console.log(results);
        console.log("\n");
    }
});
collector.finger();



