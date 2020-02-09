import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tab.css';
import TextPanel from '../text-panel/textPanel';
import ButtonsPanel from '../buttons-panel/buttonsPanel';
import InputPanel from '../input-panel/inputPanel';

class Tab extends Component {
  static tabToggle(tabName) {
    if (tabName === 'loan') {
      return (
        <>
          <ButtonsPanel
            buttonRenderData={{
              label: 'Term(months)',
              btnData: [
                ['36', 'three'],
                ['48', 'four'],
                ['60', 'five'],
                ['72', 'six'],
                ['84', 'seven'],
              ],
              name: 'months',
            }}
          />
          <InputPanel
            inputRenderData={{ label: 'Trade-In Value', inputType: 'money', name: 'tradeIn' }}
          />
          <InputPanel
            inputRenderData={{ label: 'Down Payment', inputType: 'money', name: 'downPayment' }}
          />
          <ButtonsPanel
            buttonRenderData={{
              label: 'Approximate Credit Score',
              btnData: [
                ['639 or less', 'poor'],
                ['640-699', 'fair'],
                ['700-749', 'good'],
                ['750-850', 'excellent'],
              ],
              name: 'creditScore',
            }}
          />
          <InputPanel
            inputRenderData={{ label: 'Estimated APR', inputType: 'percent', name: 'APR' }}
          />
        </>
      );
    }
    return <>TabLease</>;
  }

  constructor(props) {
    super(props);
    this.state = {
      tabName: props.tabName,
    };
    //  this.tabToggle = this.tabToggle.bind(this);
  }

  render() {
    const { tabName } = this.state;
    return (
      <div className="col-md-7 tab">
        <ButtonsPanel
          buttonRenderData={{
            label: '',
            btnData: [
              ['Loan', 'loan'],
              ['Lease', 'lease'],
            ],
            name: 'tabToggle',
          }}
        />
        <TextPanel />
        {Tab.tabToggle(tabName)}
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
