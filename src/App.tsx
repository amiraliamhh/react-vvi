import axios from 'axios';
import * as React from 'react';
import './App.css';
import AmountAndCurrency from './components/AmountAndCurrency';
import Modal from './components/Modal';
import OptionalDetails from './components/OptionalDetails';
import TypeAndDate from './components/TypeAndDate';
import { options } from './Options'

export default class App extends React.Component<any, any> {
  private coinsApiEndpoint = '/api/data/coinlist/';
  private exchangesApiEndpoint = 'https://min-api.cryptocompare.com/data/all/exchanges';
  private deductAlert = true;

  constructor(props: any) {
    super(props);

    this.state = {
      currencyList: [],
      exchanges: {},
      exchangesList: [],
      form: {
        txType: options[0].text 
        
      },
      selectedOptionIndex: 0
    };

    this.submitForm = this.submitForm.bind(this);
    this.changeExchangeAction = this.changeExchangeAction.bind(this);
    this.onChangeAction = this.onChangeAction.bind(this);
    this.formChanged = this.formChanged.bind(this);
    this.fetchCurrencyList = this.fetchCurrencyList.bind(this);
    this.fetchAllExchanges = this.fetchAllExchanges.bind(this);
  }

  public componentWillMount() {
    this.fetchCurrencyList();
    this.fetchAllExchanges();
  }

  public submitForm(e: any) {
    const form: any = document.getElementById('form');
    if (form.checkValidity()) {
      e.preventDefault();
      if (this.deductAlert) {
        const el: any = document.getElementById('deductCheckBox');
        if (!el.checked) {
          const alertBox: any = document.getElementById('deducterror');
          const submitBtn: any = document.getElementById('submitBtn');
          alertBox.classList.remove('d-none');
          submitBtn.classList.add('d-none');
        } else {
          const alertBox: any = document.getElementById('deducterror');
          const submitBtn: any = document.getElementById('submitBtn');
          alertBox.classList.add('d-none');
          submitBtn.classList.remove('d-none');

          const modal: any = document.getElementById('modall');
          modal.classList.remove('d-none'); 
        }
      } else {
        console.log(this.state.form);
      }
    }
  }

  public submitBtnInsideAlert() {
    this.deductAlert = false;
    this.submitForm(null);
  }

  public cancelBtnInsideAlert() {
    const alertBox: any = document.getElementById('deducterror');
    const submitBtn: any = document.getElementById('submitBtn');
    alertBox.classList.add('d-none');
    submitBtn.classList.remove('d-none');
  }

  public changeExchangeAction(e: any) {
    if (this.state.selectedOptionIndex === 0 && e.target.value) {
      this.setState({
        currencyList: Object.keys(this.state.exchanges[e.target.value])
      });
    }
  }

  public onChangeAction(e: any) {
    const newIndex: number = parseInt(e.target.value, 0);
    this.setState({selectedOptionIndex: newIndex});
  }

  public formChanged(e: any) {
    const obj = {};
    obj[e.target.name] = e.target.value;

    this.setState({form: Object.assign({}, this.state.form, obj)});
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <form className="App form-group col-sm-12" onChange={this.formChanged} id="form" >
            <TypeAndDate 
            options={options} 
            onChangeAction={this.onChangeAction} 
            />

            <AmountAndCurrency 
            titles={options[this.state.selectedOptionIndex].aacForms} 
            currencyList={this.state.currencyList} 
            />

            <OptionalDetails 
            exchangeList={this.state.exchangesList} 
            tradingGroup={this.state.selectedOptionIndex}
            onChangeAction={this.changeExchangeAction}
            />

            <div className="alert alert-danger d-none" id="deducterror" >
              You didn't check "Deduct from holdings" field. Are you sure you want to continue?
              <button className="btn-lg bg-primary" type="button" onClick={this.submitForm} >Yes, continue</button>
              <button className="btn-lg bg-primary" type="button" onClick={this.cancelBtnInsideAlert} >Cancel</button>  
            </div>

            <button className="btn-lg bg-primary" type="submit" id="submitBtn" onClick={this.submitForm} >Submit</button>
          </form>
        </div>

        <Modal 
        forms={options[this.state.selectedOptionIndex].aacForms} 
        formData={this.state.form}
        />
      </div>
    );
  }

  private fetchCurrencyList() {
    axios.get(this.coinsApiEndpoint)
    .then((response: any) => {
      this.setState(
        {
          currencyList: Object.keys(response.data.Data)
        }
      )
    })
    .catch(err => console.error(err));
  }

  private fetchAllExchanges() {
    axios.get(this.exchangesApiEndpoint)
    .then((response: any) => {
      this.setState(
        {
          exchanges: response.data,
          exchangesList: Object.keys(response.data)
        }
      )
    })
    .catch(err => console.error(err));
  }
}
