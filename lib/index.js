"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mask = void 0;
function mask(value, options) {
    const valueSanitized = value.toString().replace(/\W/g, '');
    let formatted = '';
    if (options.pattern) {
        return replacePattern(options.pattern, valueSanitized);
    }
    switch (options.style) {
        case 'fone':
            return replacePattern('(##) # ####-####', valueSanitized);
        case 'cpf':
            return replacePattern('###.###.###-##', valueSanitized);
    }
}
exports.mask = mask;
function replacePattern(pattern, value) {
    let i = 0;
    let lastReplacedIndex = -1;
    const valueFormatted = pattern.replace(/#/g, (_, j) => {
        if (i >= value.length) {
            return '#';
        }
        lastReplacedIndex = j;
        return value[i++] || '';
    });
    return valueFormatted.substring(0, lastReplacedIndex + 1);
}
