var gulp = require('gulp');
var _ = require('lodash');
var sequence = require('gulp-sequence');
var templateUtil = require('./utils/jawrTemplate.util');
var mkdirp = require('mkdirp');
var path = require('path');
var carrierProfileConfig = require('./config/carrierProfile.config');
var jawrUtil = require('./utils/jawrUtil/index');
var logger = require('logger');
var run = require('gulp-run');
var jawrOptions = require('./config/jawr.config');


gulp.task('template', function (done) {
    _.each(_.keys(carrierProfileConfig), function (profileKey) {
        var profile = carrierProfileConfig[profileKey];
        var profileLocation = profile.profile;
        var mappings = profile.mappings;

        _.each(mappings, function (mapping) {
            var templateLocation = mapping.template;
            var outputLocation = mapping.output;
            mkdirp.sync(path.dirname(outputLocation));
            templateUtil.compileTemplateFromFile(templateLocation, profileLocation, outputLocation);
        });
    });
    done();
});

gulp.task('genJAWR', function (done) {
    jawrUtil.framework(jawrOptions, logger);
    done();
});

gulp.task('jest', function() {
    return run('npm run test').exec();
});

gulp.task('coscoTest', sequence(
    ['template'],
    ['genJAWR'],
    ['jest']
));