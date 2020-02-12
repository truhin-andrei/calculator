import React, { Component } from 'react';
import './app.css';
import Tab from '../tab/tab';
import Card from '../card/card';
import carBase from '../../api/car-base/carBase';
import { getLoanPayment, getLeasePayment, getTax } from '../../services/calculator/calculator';
import getZip from '../../api/ip-info/ipInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tabName: 'loan',
      term: '24',
      creditScore: '750',
      tradeIn: 0,
      downPayment: 0,
      APR: 0,
      carData: {},
      mileages: '12000',
      zipCode: '',
    };
    this.handleBtn = this.handleBtn.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.updateData = this.updateData.bind(this);
    this.restorData = this.restorData.bind(this);
  }

  async componentDidMount() {
    this.updateData();
    this.restorData();
  }

  async updateData() {
    Promise.allSettled([carBase(), getZip()])
      .then(data => {
        this.setState({ carData: data[0].value[0] });
        this.setState({ zipCode: data[1].value });
        getTax(data[1].value);
      })
      .finally(
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1000)
      );
  }

  handleBtn(newValue, nameBtn) {
    if (nameBtn === 'term') {
      this.setState({ term: newValue });
      localStorage.setItem('term', newValue);
    } else if (nameBtn === 'creditScore') {
      this.setState({ creditScore: newValue });
      localStorage.setItem('creditScore', newValue);
    } else if (nameBtn === 'mileages') {
      this.setState({ mileages: newValue });
      localStorage.setItem('mileages', newValue);
    } else {
      this.setState({ tabName: newValue });
      localStorage.setItem('tabName', newValue);
    }
  }

  handleInput(newValue, nameInput) {
    if (nameInput === 'tradeIn' && !Number.isNaN(newValue)) {
      this.setState({ tradeIn: newValue });
      localStorage.setItem('tradeIn', newValue);
    } else if (nameInput === 'downPayment' && !Number.isNaN(newValue)) {
      this.setState({ downPayment: newValue });
      localStorage.setItem('downPayment', newValue);
    } else if (nameInput === 'zipCode' && !Number.isNaN(newValue)) {
      this.setState({ zipCode: newValue });
      localStorage.setItem('zipCode', newValue);
    } else if (newValue <= 100 && newValue >= 0) {
      this.setState({ APR: newValue });
      localStorage.setItem('APR', newValue);
    }
  }

  restorData() {
    if (localStorage.getItem('APR')) {
      this.setState({ APR: localStorage.getItem('APR') });
    }
    if (localStorage.getItem('zipCode')) {
      this.setState({ zipCode: localStorage.getItem('zipCode') });
    }
    if (localStorage.getItem('downPayment')) {
      this.setState({ downPayment: localStorage.getItem('downPayment') });
    }
    if (localStorage.getItem('tradeIn')) {
      this.setState({ tradeIn: localStorage.getItem('tradeIn') });
    }
    if (localStorage.getItem('tabName')) {
      this.setState({ tabName: localStorage.getItem('tabName') });
    }
    if (localStorage.getItem('mileages')) {
      this.setState({ mileages: localStorage.getItem('mileages') });
    }
    if (localStorage.getItem('creditScore')) {
      this.setState({ creditScore: localStorage.getItem('creditScore') });
    }
    if (localStorage.getItem('term')) {
      this.setState({ term: localStorage.getItem('term') });
    }
  }

  render() {
    const {
      loading,
      tabName,
      term,
      creditScore,
      tradeIn,
      downPayment,
      APR,
      carData,
      mileages,
      zipCode,
    } = this.state;

    return (
      <div className="app">
        <Tab
          tabName={tabName}
          handleBtn={this.handleBtn}
          term={term}
          creditScore={creditScore}
          handleInput={this.handleInput}
          tradeIn={+tradeIn}
          downPayment={+downPayment}
          APR={+APR}
          mileages={mileages}
          zipCode={+zipCode}
        />

        <Card
          tabName={tabName}
          carData={carData}
          loanPayment={getLoanPayment(carData.msrp, tradeIn, downPayment, term, creditScore, APR)}
          leasePayment={getLeasePayment(
            carData.msrp,
            tradeIn,
            downPayment,
            term,
            creditScore,
            mileages
          )}
          loading={loading}
          zipCode={+zipCode}
        />
      </div>
    );
  }
}

export default App;
