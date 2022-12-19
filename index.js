const ovr = require('bindings')('openvr');
const headers = require('./headers');

module.exports = {
    ...ovr,
    ...headers
};