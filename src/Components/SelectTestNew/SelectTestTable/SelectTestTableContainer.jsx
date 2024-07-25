import React from 'react';
import './SelectTestTableContainer.css';
import SelectTestTableContainerEachOne from './SelectTestTableContainerEachOne';

const SelectTestTableContainer = ({ items, name }) => {

    const head = String(name).toUpperCase();

    return (
        <div className='SelectTestTableContainer'>
            <div className='SelectTestTableContainerMap'>
                <h2 className='SelectTestTableContainerMapHead'>{head}</h2>
                <div className='SelectTestTableContainerEachOne'>
                    {items.map((item, index) => {
                        return <div>
                            {
                                index < 3? <SelectTestTableContainerEachOne data={item}/>: null
                            }
                        </div> 
                    })}
                </div>
                
                <div className='SelectTestTableContainerEachOne'>
                    {items.map((item, index) => {
                        return <div>
                            {
                                index < 6 && index >= 3? <SelectTestTableContainerEachOne data={item}/>: null
                            }
                        </div> 
                    })}
                </div>
                
                <div className='SelectTestTableContainerEachOne'>
                    {items.map((item, index) => {
                        return <div>
                            {
                                index < 9 && index >= 6? <SelectTestTableContainerEachOne data={item}/>: null
                            }
                        </div> 
                    })}
                </div>
                
                <div className='SelectTestTableContainerEachOne'>
                    {items.map((item, index) => {
                        return <div>
                            {
                                index < 12 && index >= 9? <SelectTestTableContainerEachOne data={item}/>: null
                            }
                        </div> 
                    })}
                </div>
                
                <div className='SelectTestTableContainerEachOne'>
                    {items.map((item, index) => {
                        return <div>
                            {
                                index < 15 && index >= 12? <SelectTestTableContainerEachOne data={item}/>: null
                            }
                        </div> 
                    })}
                </div>
            </div>
        </div>
    );
}

export default SelectTestTableContainer;
