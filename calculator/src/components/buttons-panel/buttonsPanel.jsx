import React from 'react';
import PropTypes from 'prop-types';
import './buttonsPanel.css';

const ButtonsPanel = ({
  buttonRenderData: { label, btnData, nameBtn },
  handleBtn,
  classNameActive,
}) => {
  return (
    <div className="btn-panel">
      <span className="btn-header">{label}</span>
      {btnData.map(name => (
        <button
          id={name}
          key={name}
          name={name}
          type="button"
          className={`btn ${name === classNameActive ? 'btn-primary' : 'btn-secondary'}`}
          onClick={event => handleBtn(event.target.id, nameBtn)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

ButtonsPanel.propTypes = {
  buttonRenderData: PropTypes.shape({
    label: PropTypes.string,
    btnData: PropTypes.arrayOf(PropTypes.string),
    nameBtn: PropTypes.string,
  }).isRequired,
  handleBtn: PropTypes.func.isRequired,
  classNameActive: PropTypes.string.isRequired,
};

export default ButtonsPanel;
