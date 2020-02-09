import React, { Component } from 'react';
import './app.css';
import Tab from '../tab/tab';
import Card from '../card/card';

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
    };
    this.handleBtn = this.handleBtn.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleBtn(newValue, nameBtn) {
    // console.log(1, newValue, nameBtn);
    if (nameBtn === 'term') {
      this.setState({ term: newValue });
    } else if (nameBtn === 'creditScore') {
      this.setState({ creditScore: newValue });
    } else {
      this.setState({ tabName: newValue });
    }
  }

  handleInput(newValue, nameInput) {
    // console.log(2, newValue, nameInput);
    if (nameInput === 'tradeIn' && !Number.isNaN(newValue)) {
      this.setState({ tradeIn: newValue });
    } else if (nameInput === 'downPayment' && !Number.isNaN(newValue)) {
      this.setState({ downPayment: newValue });
    } else if (newValue <= 100 && newValue >= 0) {
      this.setState({ APR: newValue });
    }
  }

  render() {
    const { loading, tabName, term, creditScore, tradeIn, downPayment, APR } = this.state;
    if (!loading) {
      return 'loading';
    }
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
        />
        <Card />
      </div>
    );
  }
}

export default App;
