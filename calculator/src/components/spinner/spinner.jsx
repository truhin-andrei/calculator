import React from 'react';

import './spinner.css';

function Spinner() {
  return (
    <div className="d-flex justify-content-center spinner ">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
export default Spinner;
