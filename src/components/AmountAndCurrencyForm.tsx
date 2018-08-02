import * as React from 'react';
import './AmountAndCurrencyForm.css';

export default class AmountAndCurrencyForm extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="form-group Form-container col-sm-3 d-inline-block" >
                <h5 className="text-primary" >{this.props.title}</h5>
                <div>
                    <label className="d-inline-block">Amount:</label>
                    <input 
                    className="d-inline-block float-right w-50" 
                    type="number"
                    required={this.props.req} 
                    name={this.inputName(this.props.value, 'amount')} />
                </div>
                <div>
                    <label className="d-inline-block">Currency:</label>
                    <input 
                    className="d-inline-block float-right w-50" 
                    type="text"
                    list="currencies"
                    required={this.props.req}
                    name={this.inputName(this.props.value, 'currency')} 
                    />
                    <datalist id="currencies">
                        {this.currencyList(this.props.currencyList)}
                    </datalist>
                </div>
            </div>
        )
    }

    private inputName(name: string, input: 'amount'|'currency'): string {
        if (input === 'amount') {
            return `amount${name}`;
        } else if (input === 'currency') {
            return `currency${name}`;
        } else {
            return '';
        }
    }

    private currencyList(cl: any[]) {
        if (Array.isArray(cl)) {
            return cl.map((currency: string, index: number) => {
                return (
                    <option value={currency} key={index}>{currency}</option>
                );
            });
        } else {
            return '';
        }
    }
}