import React from 'react';
import PropTypes from 'prop-types';
import './selectPanel.css';

const SelectPanel = ({
  selectRenderData: { label, selectData, nameEl },
  handleBtn,
  classNameActive,
}) => {
  return (
    <div className="select-panel">
      <span>{label}</span>
      <select
        className="custom-select"
        defaultValue={classNameActive}
        onChange={event => handleBtn(event.target.value, nameEl)}
      >
        {selectData.map(name => (
          <option id={name} key={name} value={name} className="button">
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

SelectPanel.propTypes = {
  selectRenderData: PropTypes.shape({
    label: PropTypes.string,
    selectData: PropTypes.arrayOf(PropTypes.string),
    nameEl: PropTypes.string,
  }).isRequired,
  handleBtn: PropTypes.func.isRequired,
  classNameActive: PropTypes.string.isRequired,
};

export default SelectPanel;
