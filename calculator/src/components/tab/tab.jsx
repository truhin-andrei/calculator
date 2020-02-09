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
      tabName1: props.tabName,
    };
    this.tabToggle = this.tabToggle.bind(this);
  }

  tabToggle(tabName) {
    const { handleBtn, term, creditScore } = this.props;
    if (tabName === 'loan') {
      return (
        <>
          <ButtonsPanel
            buttonRenderData={{
              label: 'Term(months)',
              btnData: ['12', '24', '36', '48', '72', '84'],
              nameBtn: 'term',
            }}
            handleBtn={handleBtn}
            classNameActive={term}
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
              btnData: ['600', '650', '700', '750', '800', '850', '900'],
              nameBtn: 'creditScore',
            }}
            handleBtn={handleBtn}
            classNameActive={creditScore}
          />
          <InputPanel
            inputRenderData={{ label: 'Estimated APR', inputType: 'percent', name: 'APR' }}
          />
        </>
      );
    }
    return <>TabLease</>;
  }

  render() {
    const { tabName1 } = this.state;
    const { tabName, handleBtn } = this.props;

    return (
      <div className="col-md-7 tab">
        <ButtonsPanel
          buttonRenderData={{
            label: '',
            btnData: ['loan', 'lease'],
            nameBtn: 'tabName',
          }}
          handleBtn={handleBtn}
          classNameActive={tabName || tabName1}
        />
        <TextPanel />
        {this.tabToggle(tabName)}
      </div>
    );
  }
}

Tab.propTypes = {
  tabName: PropTypes.string,
  handleBtn: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
  creditScore: PropTypes.string.isRequired,
};
Tab.defaultProps = {
  tabName: 'loan',
};

export default Tab;
