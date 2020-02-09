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
    };
    this.handleTermBtn = this.handleTermBtn.bind(this);
  }

  handleTermBtn(term) {
    console.log(1, term);
    this.setState({ term });
  }

  render() {
    const { loading, tabName, term } = this.state;
    if (!loading) {
      return 'loading';
    }
    return (
      <div className="app">
        <Tab tabName={tabName} handleBtn={this.handleTermBtn} term={term} />
        <Card />
      </div>
    );
  }
}

export default App;
