import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    const { loading } = this.state;
    return (
      <h2 className="app">
        Gjjksdkf
        {loading}
      </h2>
    );
  }
}

export default App;
