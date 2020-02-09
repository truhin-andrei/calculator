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
    };
    this.handleBtn = this.handleBtn.bind(this);
  }

  handleBtn(newValue, nameBtn) {
    console.log(1, newValue, nameBtn);
    if (nameBtn === 'term') {
      this.setState({ term: newValue });
    } else if (nameBtn === 'creditScore') {
      this.setState({ creditScore: newValue });
    } else {
      this.setState({ tabName: newValue });
    }
  }

  render() {
    const { loading, tabName, term, creditScore } = this.state;
    if (!loading) {
      return 'loading';
    }
    return (
      <div className="app">
        <Tab tabName={tabName} handleBtn={this.handleBtn} term={term} creditScore={creditScore} />
        <Card />
      </div>
    );
  }
}

export default App;
