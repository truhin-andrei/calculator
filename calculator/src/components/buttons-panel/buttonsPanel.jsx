import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './buttonsPanel.css';

class ButtonsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Title',
    };
  }

  render() {
    const { title } = this.state;
    const {
      buttonRenderData: { label, btnData, nameBtn },
      handleBtn,
      classNameActive,
    } = this.props;
    console.log(btnData, classNameActive);
    return (
      <div className="btn-panel">
        <span className="btn-header">
          {label}
          {title}
        </span>
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
  }
}

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
