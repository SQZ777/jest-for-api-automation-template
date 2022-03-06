const _ = require('lodash');

config = {
  test: 123,
};

config = _.merge({}, require('./envs/prod.js'), config);

module.exports = config;
