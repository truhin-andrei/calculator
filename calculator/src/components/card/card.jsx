import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

function Card({ tabName, carData, LoanPayment }) {
  const { msrp, vehicleNname, dealerName, dealerPhone, dealerRating } = carData;
  console.log(2, carData);

  return (
    <div className="card">
      <div className="card-header">{`${tabName.toUpperCase()} FEATURES`}</div>
      <div className="card-body">
        <h5 className="card-title">DEAL INFORMATION</h5>
        <p className="card-text">{`Vehicle name: ${vehicleNname}`}</p>
        <p className="card-text">{`MSRP: $${msrp}`}</p>
        <p className="card-text">{`Monthly payment: $${LoanPayment}`}</p>
        <p className="card-text">{`Dealer name: ${dealerName}`}</p>
        <p className="card-text">{`Dealer phone: ${dealerPhone}`}</p>
        <p className="card-text">{`Dealer rating: ${dealerRating}`}</p>
        {/* <a href="#" className="btn btn-primary">
          Переход куда-нибудь
        </a> */}
      </div>
    </div>
  );
}
Card.propTypes = {
  tabName: PropTypes.string.isRequired,
  carData: PropTypes.objectOf(PropTypes.string).isRequired,
  LoanPayment: PropTypes.number.isRequired,
};
export default Card;

//   <div className=" card">MSRP</div>
//   <div className=" card">Vehicle name</div>
//   <div className=" card">Monthly payment</div>
//   <div className=" card">Taxes (array of numbers, generates during calculations)</div>
//   <div className=" card">Dealer name</div>
//  <div className=" card">Dealer phone number</div>
//   <div className=" card">Dealer rating</div>
