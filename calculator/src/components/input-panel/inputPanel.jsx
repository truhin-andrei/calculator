import React from 'react';
import PropTypes from 'prop-types';
import './inputPanel.css';

const InputPanel = ({ inputRenderData: { label, inputType, name }, handleInput, inputValue }) => {
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

  return (
    <div className="input-panel">
      <label htmlFor={name}>{label}</label>
      <div className="input-group mb-3 input">
        {inputType === 'money' ? moneyInputTag : null}
        <input
          id={name}
          name={name}
          type="text"
          className="form-control"
          aria-label="Amount (to the nearest dollar)"
          value={inputValue}
          onChange={event => handleInput(+event.target.value, name)}
        />
        {inputType === 'percent' ? percentInputTag : null}
      </div>
    </div>
  );
};

InputPanel.propTypes = {
  inputRenderData: PropTypes.objectOf(PropTypes.string).isRequired,
  handleInput: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
};

export default InputPanel;
