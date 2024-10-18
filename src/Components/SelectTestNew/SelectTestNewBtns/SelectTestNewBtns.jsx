import React from 'react';
import SelectTestNewBtn from './SelectTestNewBtn';
import './SelectTestNewBtns.css';

const SelectTestNewBtns = ({ handleTestChange }) => {
    return (
        <div className="SelectTestNewBtns">
            <br/>
            <div className='layer1'>
                <SelectTestNewBtn name="Aptitude Courses" handleTestChange={handleTestChange}/>
                <SelectTestNewBtn name="C Programming" handleTestChange={handleTestChange}/>
                <SelectTestNewBtn name="C++ Programming" handleTestChange={handleTestChange}/>
                {/* <SelectTestNewBtn name="Python Programming" handleTestChange={handleTestChange}/>                 */}
                {/* <SelectTestNewBtn name="JAVA Programming" handleTestChange={handleTestChange}/> */}
            </div>
            {/* <div className='layer2'>
                <SelectTestNewBtn name="CTAT EIS" handleTestChange={handleTestChange}/>                
                <SelectTestNewBtn name="Product Company" handleTestChange={handleTestChange}/>
                <SelectTestNewBtn name="Service Company" handleTestChange={handleTestChange}/>
                <SelectTestNewBtn name="Assessment Test" handleTestChange={handleTestChange}/>
            </div> */}
        </div>
    );
};

export default SelectTestNewBtns;
