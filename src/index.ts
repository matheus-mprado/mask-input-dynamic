export function mask(value: string, options: { pattern?: string, style?: 'fone' | 'cpf'; }) {


    const valueSanitized = value.toString().replace(/\W/g, '')

    let formatted = '';

    if (options.pattern) {
        return replacePattern(options.pattern, valueSanitized)
    }

    switch (options.style) {
        case 'fone':
            return replacePattern('(##) # ####-####', valueSanitized);
        case 'cpf':
            return replacePattern('###.###.###-##', valueSanitized);
    }
}

function replacePattern(pattern: string, value: string) {
    let i = 0;
    let lastReplacedIndex = -1;

    const valueFormatted = pattern.replace(/#/g,
        (_, j) => {
            if (i >= value.length) {
                return '#'
            }
            lastReplacedIndex = j;
            return value[i++] || ''
        }
    )
    return valueFormatted.substring(0, lastReplacedIndex + 1);
}
