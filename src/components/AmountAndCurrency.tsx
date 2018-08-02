import * as React from 'react';
import { IAmountAndCurrencyForm } from '../interfaces/main';
import AmountAndCurrencyForm from './AmountAndCurrencyForm';
import './TypeAndDate.css';

export default class AmountAndCurrency extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
    }

    public render() {
        return (
            <div className="w-100 Amount-and-currency-container text-left" >
                {this.generateForms(this.props.titles)}                
            </div>
        );
    }

    private generateForms(titles: IAmountAndCurrencyForm[]) {
        return titles.map((title: IAmountAndCurrencyForm, index: number) => {
            return (
                <AmountAndCurrencyForm 
                title={title.title} 
                value={title.value}
                req={title.required} 
                currencyList={this.props.currencyList}
                key={index}  />
            );
        });
    }
}