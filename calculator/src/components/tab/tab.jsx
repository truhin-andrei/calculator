import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tab.css';
import TextPanel from '../text-panel/textPanel';
import ButtonsPanel from '../buttons-panel/buttonsPanel';
import InputPanel from '../input-panel/inputPanel';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabName: props.tabName,
    };
    this.tabToggle = this.tabToggle.bind(this);
  }

  tabToggle(tabName) {
    if (tabName === 'loan') {
      return (
        <>
          <ButtonsPanel data={this.props} />
          <InputPanel />
          <InputPanel />
          <ButtonsPanel />
          <InputPanel />
        </>
      );
    }
    return <>TabLease</>;
  }

  render() {
    const { tabName } = this.state;
    return (
      <div className="col-md-7 tab-loan">
        <ButtonsPanel />
        <TextPanel />
        {this.tabToggle(tabName)}
      </div>
    );
  }
}

Tab.propTypes = {
  tabName: PropTypes.string,
};
Tab.defaultProps = {
  tabName: 'loan',
};

export default Tab;
