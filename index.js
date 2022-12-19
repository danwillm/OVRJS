const ovr = require('bindings')('openvr');
const headers = require('./src/headers');

module.exports = {
    ...ovr,
    ...headers
};