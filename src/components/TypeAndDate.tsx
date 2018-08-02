import * as React from 'react';
import { IOptions } from '../interfaces/main';
import './TypeAndDate.css';

export default class TypeAndDate extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
          <div className="col-sm-12 Type-and-date-container text-left w-50">
            <h5 className="text-primary">Type and Date </h5>
            <div className="form-group" >
                <label className="d-inline-block">Transaction Type:</label>
                <select 
                className="custom-select d-inline-block w-50 float-right" 
                required={true}
                name="txType"
                onChange={this.props.onChangeAction}
                >
                  {this.optionsHTML(this.props.options)}
                </select>
            </div>
            <div className="form-group">
                <label className="d-inline-block">Transaction Date:</label>
                <input 
                required={true}
                type="date" 
                className="form-control d-inline-block w-50 float-right"
                name="txDate" />
            </div>
          </div>
        );
    }

    private optionsHTML(opts: IOptions[]) {
        return opts.map((opt: IOptions, index: number) => {
            return (
                <option value={index} key={index + 1}>{opt.text}</option>
            );
        })
    }
}