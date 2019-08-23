var pathUtil = require('../utils/path.util');

module.exports = {
    configLocation: pathUtil.resolve('config/appconfig/jawr/') + 'jawr.properties',
    webappLocation: pathUtil.resolve('src/main/webapp'),
    targetLocation: pathUtil.resolve('src/test/js/build'),
    localeConfigLocation: pathUtil.resolve('config/appconfig')
};