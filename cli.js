/*
 * Quick development tool script to manually run checks for a host on the command line
 */

var mage = require('mage-finger');

// Debug default target
var target = process.argv.length > 2 ? process.argv[2] : 'http://local6.dev';

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



