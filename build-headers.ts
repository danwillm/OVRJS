const headers = require('./lib/openvr/headers/openvr_api.json')
const fs = require('fs')
const path = require('path')

const openvr = {
    enums: '',
    consts: '',
    structs: '',
    typedefs: ''
}

const invalid_fields = ['VkDevice_T', 'VkPhysicalDevice_T', 'VkInstance_T', 'VkQueue_T', 'ID3D12Resource', 'ID3D12CommandQueue'];

const test_c_number = (str: string) => /(u?(int)+(8|16|32|64)_t)|float|double/.test(str);

for (let {enumname, values} of headers.enums) {
    let out = `export enum ${enumname.replace('vr::', '')} {\n`;
    for (let {name, value} of values) {
        out += `\t${name} = ${value},\n`;
    }
    out += `}\n`;
    openvr.enums += out;
}

for (let {constname, constval, consttype} of headers.consts) {
    const ret = {val: (consttype.startsWith('const char')) ? constval : +constval, type: consttype}

    openvr.consts += `export const ${constname} = ${typeof ret.val === "number" ? `${constval}` : `"${constval}"`};\n`;
}

//structs

const generate_type_array_contents = (type: string, repeat: number) => {
    let setup = `${type}, `;
    let ret = setup.repeat(repeat);

    return `[${ret.slice(0, -2)}]`;
}

// generates a set 2d array from giving a type and an array of lengths
const generate_array = (inner_type: string, lengths: Array<number>): string => {
    if (lengths.length === 1) {
        return generate_type_array_contents(inner_type, lengths[0]);
    }

    const this_length = lengths.pop();
    if (typeof this_length === 'undefined') return "";
    return generate_array(generate_type_array_contents(inner_type, this_length), lengths);
}

const extract_lengths_from_c_array = (array_def: string) => {
    const ret = array_def.split('[').map(v => +v[0]);
    ret.shift();

    return ret;
}

for (let {struct, fields} of headers.structs) {
    switch (struct) {
        case 'vr::(anonymous)':
            continue;
    }

    let fields_result = `export type ${struct.replace('vr::', '')} = {\n`;
    for (let {fieldname, fieldtype} of fields) {

        let this_field_result = `${fieldname}: `;
        const parse = fieldtype.split(' ');

        let type_ts = '';
        if (/(^struct*|^enum*)/.test(parse[0])) {
            if (invalid_fields.includes(parse[1])) continue;
            type_ts = parse[1].replace('vr::', '');

        } else {
            if (test_c_number(parse[0])) {
                type_ts = 'number';
            } else {
                type_ts = 'any';
            }
        }

        if (/^\[\d+\]*/.test(parse[1])) {
            type_ts = generate_array(type_ts, extract_lengths_from_c_array(parse[1]));
        } else if (/^\[\d+\]*/.test(parse[2])) {
            type_ts = generate_array(type_ts, extract_lengths_from_c_array(parse[2]));
        }

        this_field_result += `${type_ts};\n`;
        fields_result += `\t${this_field_result}`;
    }

    fields_result += `}`;

    openvr.structs += `${fields_result}\n`;
}

//some typedefs are declared twice >:(
let defined_typedefs: string[] = [];

for (let {typedef, type} of headers.typedefs) {
    if (defined_typedefs.includes(typedef)) continue;
    defined_typedefs.push(typedef);

    let type_ts = '';

    //ignore
    if (/(^struct*|^union*)/.test(type)) continue;

    //number
    if (test_c_number(type)) {
        type_ts = 'number';
    } else if (/^enum*/.test(type)) {
        type_ts = type.replace('enum vr::', '');
    } else {
        type_ts = 'any';
    }

    openvr.typedefs += `export type ${typedef.replace('vr::', '')} = ${type_ts};\n`;
}


const file = `//enums
${openvr.enums}
//structs
${openvr.structs}
//typedefs
${openvr.typedefs}
//constants
${openvr.consts}`;

fs.writeFileSync(path.join(__dirname, 'websrc/headers.ts'), file, {encoding: 'utf-8'})
