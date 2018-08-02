import * as React from 'react';
import './Modal.css'

export default class Modal extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="col-sm-12 Modal d-none" id="modall" >
                <p><span className="text-primary">Transaction Type:</span> {this.props.formData.txType || ''} </p>
                <p><span className="text-primary">Transaction Date:</span> {this.props.formData.txDate || ''} </p>
                {this.generateFields(this.props.forms)}
                <p><span className="text-primary">Exchange:</span> {this.props.formData.exchange || ''} </p>
                <p><span className="text-primary">Trade Group:</span> {this.props.formData.tradeGroup || ''} </p>
                <p><span className="text-primary">Comment:</span> {this.props.formData.comment || ''} </p>
            </div>
        );
    }

    private generateFields(opts: any[]) {
        return opts.map((item: any, index: number) => {
            return (
                <div key={index} >
                    <h5 className="text-success" >{item.title}</h5>
                    <p><span className="text-primary">Amount:</span> {this.props.formData[this.inputName(item.value, 'amount')]}</p>
                    <p><span className="text-primary">Currency:</span> {this.props.formData[this.inputName(item.value, 'currency')]}</p>
                </div>
            );
        })
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
}