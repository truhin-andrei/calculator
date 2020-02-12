import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/spinner';
import './card.css';
import { getTax } from '../../services/calculator/calculator';

function Card({ tabName, carData, loanPayment, leasePayment, loading, zipCode }) {
  const { msrp, vehicleNname, dealerName, dealerPhone, dealerRating } = carData;

  const payment = tabName === 'loan' ? loanPayment : leasePayment;

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="card">
      <div className="card-header">{`${tabName.toUpperCase()} FEATURES`}</div>
      <div className="card-body">
        <h5 className="card-title">DEAL INFORMATION</h5>
        <p className="card-text">{`Vehicle name: ${vehicleNname}`}</p>
        <p className="card-text">{`MSRP: $${msrp}`}</p>
        <p className="card-text">{`Taxes: $${getTax(zipCode)}`}</p>
        <p className="card-text">{`Monthly payment: $${payment}`}</p>
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
  loanPayment: PropTypes.number.isRequired,
  leasePayment: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  zipCode: PropTypes.number.isRequired,
};
export default Card;
