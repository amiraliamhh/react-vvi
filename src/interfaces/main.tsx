export interface IAmountAndCurrencyForm {
    required: boolean;
    title: string;
    value: string;
}

export interface IOptions {
    // amount and currencies forms
    aacForms: IAmountAndCurrencyForm[];
    text: string;
    value: string;
}