import React from 'react';
import PropTypes from 'prop-types';
import './tab.css';
import TextPanel from '../text-panel/textPanel';
import ButtonsPanel from '../buttons-panel/buttonsPanel';
import InputPanel from '../input-panel/inputPanel';

const Tab = ({ tabName, handleBtn, term, creditScore, handleInput, tradeIn, downPayment, APR }) => {
  function tabToggle(tabN) {
    if (tabN === 'loan') {
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
            handleInput={handleInput}
            inputValue={tradeIn}
          />
          <InputPanel
            inputRenderData={{ label: 'Down Payment', inputType: 'money', name: 'downPayment' }}
            handleInput={handleInput}
            inputValue={downPayment}
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
            handleInput={handleInput}
            inputValue={APR}
          />
        </>
      );
    }
    return <>TabLease</>;
  }

  return (
    <div className="col-md-7 tab">
      <ButtonsPanel
        buttonRenderData={{
          label: '',
          btnData: ['loan', 'lease'],
          nameBtn: 'tabName',
        }}
        handleBtn={handleBtn}
        classNameActive={tabName}
      />
      <TextPanel />
      {tabToggle(tabName)}
    </div>
  );
};

Tab.propTypes = {
  tabName: PropTypes.string,
  handleBtn: PropTypes.func.isRequired,
  term: PropTypes.string.isRequired,
  creditScore: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  tradeIn: PropTypes.number.isRequired,
  downPayment: PropTypes.number.isRequired,
  APR: PropTypes.number.isRequired,
};
Tab.defaultProps = {
  tabName: 'loan',
};

export default Tab;
