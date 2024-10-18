import React from 'react';
import './SelectTestNewBtn.css';

const SelectTestNewBtn = ({ name, handleTestChange }) => {

    

    return (
        <div className="SelectTestNewBtn">
            <button className="btn-primary" onClick={() => handleTestChange(name)}>{name}</button>
        </div>
    );
}

export default SelectTestNewBtn;
