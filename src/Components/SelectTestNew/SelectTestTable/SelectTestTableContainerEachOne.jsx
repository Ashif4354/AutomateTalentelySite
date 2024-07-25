import React from 'react';
import './SelectTestTableContainerEachOne.css';

const SelectTestTableContainerEachOne = ({ data }) => {

    return(
        <div className="SelectTestTableContainerEachOneP">
            <input type="checkbox" style={{margin: '0px 6px'}} id={data[4]}/>
            <p>{data[4]}</p>
        </div>
    )
}

export default SelectTestTableContainerEachOne;
