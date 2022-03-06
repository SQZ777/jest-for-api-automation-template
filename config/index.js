const _ = require('lodash');
const defaults = require('./defaults');

const config = _.merge({}, require('./envs/prod.js'), defaults);

module.exports = config;
