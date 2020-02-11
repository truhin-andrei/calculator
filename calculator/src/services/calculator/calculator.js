function transformCreditScoreValue(creditScoreValue) {
  if (creditScoreValue >= 750) {
    return 0.95;
  }
  if (creditScoreValue >= 700 && creditScoreValue < 750) {
    return 1;
  }
  if (creditScoreValue >= 640 && creditScoreValue < 700) {
    return 1.05;
  }
  return 1.2;
}

function getLoanPayment(msrp, tradeIn, downPayment, term, creditScoreValue, apr) {
  console.log(msrp, tradeIn, downPayment, term, creditScoreValue, apr);
  return (
    ((+msrp - +tradeIn - +downPayment) / +term) *
    transformCreditScoreValue(+creditScoreValue) *
    +apr
  );
}

function getLeasePayment(msrp, tradeIn, downPayment, term, creditScoreValue, mileage) {
  return (
    (((msrp - tradeIn - downPayment) * mileage) / 10000 / term) *
    transformCreditScoreValue(creditScoreValue)
  );
}

export { getLoanPayment, getLeasePayment };
