interface optionsProps {
    pattern?: string;
    style?: 'fone' | 'cpf' | 'cep' | 'date' | 'cnpj' | 'time';
}
export declare function mask(value: string, options: optionsProps): string | undefined;
export {};
