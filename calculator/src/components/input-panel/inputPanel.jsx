import React, { Component } from 'react';
import './inputPanel.css';

class InputPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Input_name',
    };
  }

  render() {
    const { label } = this.state;
    return (
      <div>
        <label htmlFor={label}>{label}</label>
        <input id={label} type="text" />
      </div>
    );
  }
}

export default InputPanel;
