"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mask = void 0;
function mask(value, options) {
    let valueSanitized = value.toString().replace(/\W/g, "");
    if (options.pattern) {
        return replacePattern(options.pattern, valueSanitized);
    }
    switch (options.style) {
        case "fone":
            valueSanitized = valueSanitized.replace(/[^0-9()-]/g, "");
            return replacePattern("(##) # ####-####", valueSanitized);
        case "cpf":
            valueSanitized = valueSanitized.replace(/[^0-9.-]/g, "");
            return replacePattern("###.###.###-##", valueSanitized);
        case "cep":
            valueSanitized = valueSanitized.replace(/[^0-9-]/g, "");
            return replacePattern("#####-###", valueSanitized);
        case "date":
            valueSanitized = valueSanitized.replace(/[^0-9/]/g, "");
            return replacePattern("##/##/####", valueSanitized);
        case "cnpj":
            valueSanitized = valueSanitized.replace(/[^0-9.-/]/g, "");
            return replacePattern("##.###.###/####-##", valueSanitized);
        case "time":
            valueSanitized = valueSanitized.replace(/[^0-9:]/g, "");
            return replacePattern("##:##:##", valueSanitized);
    }
}
exports.mask = mask;
function replacePattern(pattern, value) {
    let i = 0;
    let lastReplacedIndex = -1;
    const valueFormatted = pattern.replace(/#/g, (_, j) => {
        if (i >= value.length) {
            return "#";
        }
        lastReplacedIndex = j;
        return value[i++] || "";
    });
    return valueFormatted.substring(0, lastReplacedIndex + 1);
}
