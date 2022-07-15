export function mask(value: string, pattern: string) {
    let i = 0;
    let lastReplacedIndex = -1;

    const valueSanitized = value.toString().replace(/\W/g, '')

    const result = pattern.replace(/#/g,
        (_, j) => {
            if (i >= valueSanitized.length) {
                return '#'
            }
            lastReplacedIndex = j;
            return valueSanitized[i++] || ''
        }
    )

    return result.substring(0, lastReplacedIndex + 1);
}
