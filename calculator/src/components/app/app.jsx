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
  }

  async componentDidMount() {
    this.updateData();
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
    } else if (nameBtn === 'creditScore') {
      this.setState({ creditScore: newValue });
    } else if (nameBtn === 'mileages') {
      this.setState({ mileages: newValue });
    } else {
      this.setState({ tabName: newValue });
    }
  }

  handleInput(newValue, nameInput) {
    if (nameInput === 'tradeIn' && !Number.isNaN(newValue)) {
      this.setState({ tradeIn: newValue });
    } else if (nameInput === 'downPayment' && !Number.isNaN(newValue)) {
      this.setState({ downPayment: newValue });
    } else if (nameInput === 'zipCode' && !Number.isNaN(newValue)) {
      this.setState({ zipCode: newValue });
    } else if (newValue <= 100 && newValue >= 0) {
      this.setState({ APR: newValue });
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
          tradeIn={tradeIn}
          downPayment={downPayment}
          APR={APR}
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
