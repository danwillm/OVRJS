const ovr = require('bindings')('openvr');
const headers = require('./headers');

let out = {
  ...ovr,
  ...headers
}

export default out;
