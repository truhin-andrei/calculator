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
    };
  }

  render() {
    const { loading, tabName } = this.state;
    if (!loading) {
      return 'loading';
    }
    return (
      <div className="app">
        <Tab tabName={tabName} />
        <Card />
      </div>
    );
  }
}

export default App;
