import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inputPanel.css';

class InputPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label1: 'Input_name',
    };
  }

  render() {
    const {
      inputRenderData: { label, inputType, name },
    } = this.props;
    const moneyInputTag = (
      <div className="input-group-prepend">
        <span className="input-group-text">$</span>
      </div>
    );

    const percentInputTag = (
      <div className="input-group-append">
        <span className="input-group-text">%</span>
      </div>
    );

    const { label1 } = this.state;
    return (
      <div className="input-panel">
        {label1}
        <label htmlFor={name}>{label}</label>
        <div className="input-group mb-3 input">
          {inputType === 'money' ? moneyInputTag : null}
          <input
            id={name}
            name={name}
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          {inputType === 'percent' ? percentInputTag : null}
        </div>
      </div>
    );
  }
}

InputPanel.propTypes = {
  inputRenderData: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default InputPanel;
