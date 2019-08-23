
var frameworkLogger = require('./logger');

var jawrHandler = require('./jawr.handler');


function framework(jawrOptions, logger) {
  frameworkLogger.initLogger(logger);
  jawrHandler.handle(jawrOptions);
}

module.exports.framework = framework;
