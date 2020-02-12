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
  return (
    Math.floor(
      ((+msrp - +tradeIn - +downPayment) / +term) *
        transformCreditScoreValue(+creditScoreValue) *
        +apr *
        100
    ) / 100
  );
}

function getLeasePayment(msrp, tradeIn, downPayment, term, creditScoreValue, mileage) {
  // console.log(msrp, tradeIn, downPayment, term, creditScoreValue, mileage);
  return (
    Math.floor(
      (((msrp - tradeIn - downPayment) * mileage) / 10000 / term) *
        transformCreditScoreValue(creditScoreValue) *
        100
    ) / 100
  );
}

function getTax(zip) {
  const tax = String(zip)
    .split('')
    .map(num => num * 11);
  return tax;
}

export { getLoanPayment, getLeasePayment, getTax };
