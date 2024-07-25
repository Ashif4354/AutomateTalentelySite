import React from 'react';
import './SelectTestTable.css';
import SelectTestTableContainer from './SelectTestTableContainer';

const SelectTestTable = ({ data }) => {
    
    return(
        <div className="SelectTestTable">
            {
                Object.keys(data).map((item, index) => {
                    return(
                        <SelectTestTableContainer items={data[item]} key={index} name={item}/>
                    )
                })
            }
        </div>
    )
}

export default SelectTestTable;