
var mage = require('mage-finger');

/*
 * GET home page.
 */

exports.index = function(req, res){
    res.render('index', { pageTitle: 'Mage::finger()' })
};


/*
 * Process target
 */

exports.run = function(req, res, next){
    var target = req.param('target', false);
    if (! target) {
      next(new Error('No target specified'));
    }
    if (! target.match(/^https?:\/\//)) {
        target = 'http://' + target;
    }
    if (! target.substr(-1) == '/') {
        target += '/';
    }

    var counter = 0;
    var collector = new mage.collector(target, {
        'scoreLimit': 2,
        //'resultLimit': 6,
        'testcomplete': function(finger, versions) {
            console.log('Completed test "' + finger + '"');
            counter++;
        },
        'allcomplete': function(results) {
            console.log('Finished ' + counter + ' test(s)');
            console.log("\n");

            res.render('run', { pageTitle: 'Processing ' + target, target: target, results: results });
        }
    });
    collector.finger();
};