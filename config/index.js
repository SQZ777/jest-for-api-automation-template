const _ = require('lodash');
const defaults = require('./defaults');

if (!_.has(process.env, 'CONFIG_ENV')) {
  throw Error('CONFIG_ENV should set in CLI');
}

const config = _.merge({}, require('./envs/prod.js'), defaults);

module.exports = config;
