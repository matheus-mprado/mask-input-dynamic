interface optionsProps {
  pattern?: string;
  style?: "fone" | "cpf" | "cep" | "date" | "cnpj" | "time";
}

export function mask(value: string, options: optionsProps) {
  let valueSanitized = value.toString().replace(/\W/g, "");

  if (options.pattern) {
    return replacePattern(options.pattern, valueSanitized);
  }

  switch (options.style) {
    case "fone":
      return replacePattern("(##) # ####-####", valueSanitized);
    case "cpf":
      return replacePattern("###.###.###-##", valueSanitized);
    case "cep":
      return replacePattern("#####-###", valueSanitized);
    case "date":
      valueSanitized = valueSanitized.replace(/[^0-9/]/g, "");
      return replacePattern("##/##/####", valueSanitized);
    case "cnpj":
      return replacePattern("##.###.###/####-##", valueSanitized);
    case "time":
      valueSanitized = valueSanitized.replace(/[^0-9:]/g, "");
      return replacePattern("##:##:##", valueSanitized);
  }
}

function replacePattern(pattern: string, value: string) {
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
