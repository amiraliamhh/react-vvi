import * as React from 'react';

export default class OptionalDetails extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="col-sm-12 Type-and-date-container text-left w-75">
                <h5 className="text-primary">Optional Details </h5>
                <div className="form-group">
                    <label className="d-inline-block">Exchange:</label>
                    <input 
                    autoComplete="off"
                    onChange={this.props.onChangeAction}
                    type="text"
                    name="exchange" 
                    className="form-control d-inline-block w-75 float-right" 
                    list="exList"
                    placeholder="Kraken" />
                    <datalist id="exList">
                        {this.exchangeList(this.props.exchangeList)}
                    </datalist>
                </div>
                <div className="form-group">
                    <label className="d-inline-block">Trade Group:</label>
                    <input 
                    type="text" 
                    className="form-control d-inline-block w-75 float-right" 
                    placeholder="Mining"
                    name="tradeGroup" />
                </div>
                <div className="form-group">
                    <label className="d-inline-block">Comment:</label>
                    <input 
                    type="text" 
                    className="form-control d-inline-block w-75 float-right" 
                    placeholder="1 BTC from wallet"
                    name="comment"  />
                </div>
                <div className="form-group">
                    <label className="d-inline-block">Deduct from holdings:</label>
                    <input 
                    type="checkbox" 
                    className="form-control d-inline-block w-25" 
                    name="deduct"
                    id="deductCheckBox" />
                </div>
            </div>
        );
    }

    private exchangeList(el: any[]) {
        if (Array.isArray(el)) {
            return el.map((exchange: string, index: number) => {
                return (
                    <option value={exchange} key={index}>{exchange}</option>
                );
            });
        } else {
            return '';
        }
    }
}