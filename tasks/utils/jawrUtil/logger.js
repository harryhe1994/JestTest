/** Created by CUIJA on 2017-09-28.*/

var _ = require('lodash');
var logConfig = require('../../config/log.config');
var loggerInstance = null;

function initLogger(logger) {
  loggerInstance = logger;
}

function createLog(loggerName) {
  if (_.isEmpty(loggerInstance) || _.isNull(loggerInstance)) {
    return console;
  }
  let path = logConfig.path + loggerName;
  return loggerInstance.createLogger(path);
}

module.exports.initLogger = initLogger;
module.exports.createLog = createLog;
