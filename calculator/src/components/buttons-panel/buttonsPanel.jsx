import React, { Component } from 'react';
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
    return (
      <div>
        <span>{title}</span>
        <button id={title} type="button">
          {title}
        </button>
      </div>
    );
  }
}

export default ButtonsPanel;
