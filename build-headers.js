const headers = require('./lib/openvr/headers/openvr_api.json')
const fs = require('fs')
const path = require('path')

const openvr = {
    enums: {},
    consts: {},
    constsFlat: {}
}

for (let { enumname, values } of headers.enums) {
    const enumOut = {}
    for (let { name, value } of values) {
        enumOut[name] = +value
    }

    openvr.enums[enumname.replace('vr::', '')] = enumOut
}

for (let { constname, constval, consttype } of headers.consts) {
    openvr.consts[constname] = { val: (consttype.startsWith('const char')) ? constval : +constval, type: consttype }
    openvr.constsFlat[constname] = (!consttype.startsWith('const char')) ? +constval : constval
}

const file = `/* eslint-disable */
module.exports = ${JSON.stringify({ ...openvr.enums, ...openvr.constsFlat }, null, '  ')}
`

fs.writeFileSync(path.join(__dirname, 'headers.js'), file, { encoding: 'utf-8' })
