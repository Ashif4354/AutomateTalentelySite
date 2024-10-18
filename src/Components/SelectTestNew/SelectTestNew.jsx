import React, { useState, useEffect } from 'react';
import './SelectTestNew.css';
//material-ui
import { Dialog, DialogActions, CircularProgress} from '@mui/material';
//components
import Header from '../Header/Header'
import SecondHeader from '../SecondHeader/SecondHeader';
import SelectTestNewBtns from './SelectTestNewBtns/SelectTestNewBtns';
import SelectTestTable from './SelectTestTable/SelectTestTable';
//scripts
import { SelectAll, SelectExistingTests, SelectNone } from './scripts/SelectTests';
import sendData from './scripts/SendData';
//json files
import AptitudeTests from './jsonFiles/AptitudeTests.json';
import CTests from './jsonFiles/CTests.json';
import getSelectedTests from './scripts/GetSelectedTests';

const SelectTestNew = () => {
    const [tests, setTests] = useState([]);
    const [currentTestJSON, setCurrentTestJSON] = useState(AptitudeTests);
    const [submit, setSubmit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitResponse, setSubmitResponse] = useState(null);

    const addSelectedTests = () => {
        
        // console.log('in addSelectedTests')
        let selectedTests = getSelectedTests(currentTestJSON, tests);
        setTests([...selectedTests]); 
    }

    const handleSave = () => {
        addSelectedTests();
        // setSubmit(true);
        setOpenDialog(true);
    }

    const handleTestChange = (test) => {
        addSelectedTests();
        if (test === "Aptitude Courses") {
            setCurrentTestJSON(AptitudeTests);
        } else if (test === "C Programming") {
            setCurrentTestJSON(CTests);
        }
    }

    const handleSelectAll = () => {
        SelectAll(currentTestJSON)
    }
    const handleSelectNone = () => {
        
        SelectNone(currentTestJSON)
    }

    const handleEdit = () => {
        setSubmit(false);
        setOpenDialog(false);
    }
    
    const handleOk = () => {
        setSubmitted(false);
    }

    useEffect(() => {
        SelectNone(currentTestJSON);
        SelectExistingTests(tests);
        // eslint-disable-next-line
    }, [currentTestJSON]);

    useEffect(() => {
        if (submit) {
            sendData(tests, setOpenDialog, setSubmit, setSubmitted, setSubmitResponse);
            // setSubmit(false);
            // console.log(tests);
        }
        // eslint-disable-next-line
    }, [submit]);

    return (
        <div className="SelectTestNew" style={{ background: 'white' }}>
            <Dialog open={openDialog} onClose={handleEdit} className='dialog'>
                <div className='lists_of_tests'>
                    <h2 className='lists_of_tests_head'>Submit</h2>    
                    <h4 className='dialogNote'>The tests selected by you are listed below</h4> 
                    {tests.length > 0 &&
                        <h4 className='dialogNote'>Total tests selected: {tests.length}</h4> 
                    }
                    { !submit ? 
                    <div className='tests_Container'>
                        {tests.length > 0? tests.map((item, index) => {
                            return (
                                <div className='test' key={index}>
                                    <p className='dialog_test'>{item[4]}</p>
                                </div>
                            )
                        }): <p className='dialog_test'>No tests selected</p>}
                    </div> : <div><CircularProgress /></div>
                    }
                </div>
                <h4 className='dialogHead'>Are you sure that you want to update your tests?</h4>
                <h4 className='dialogNote'>This will reset your ATS progress</h4>
                <DialogActions style={{marginLeft: 'auto', marginRight: 'auto', width: 'max-content', background: 'white'}}>
                    <button className='dialogBtn editBtn' onClick={() => handleEdit()}>Edit</button>
                    <button className='dialogBtn submitbtn' disabled={tests.length === 0} onClick={() => setSubmit(true)}>Submit</button>
                </DialogActions>
                <br />
            </Dialog>
            <Dialog open={submitted} className='dialog'>
                <div className='lists_of_tests'>
                    <h2 className='lists_of_tests_head'>{submitResponse ? 'Success': 'Error'}</h2>
                    <div className='tests_Container'>
                        {
                            submitResponse ? <h3>Tests Updated. Now you may close this window</h3>: <h3>It seems that ATS is not running in your pc</h3>
                        }
                    </div>
                </div>
                <br />
                <DialogActions style={{marginLeft: 'auto', marginRight: 'auto', width: 'max-content', background: 'white'}}>
                    {/* <button className='dialogBtn editBtn' onClick={() => handleEdit()}>Edit</button> */}
                    <button className='dialogBtn submitbtn' onClick={() => handleOk()}>Ok</button>
                </DialogActions>
                <br />
            </Dialog> 
            <Header heading="Select Test" />
            <SecondHeader title="Select Tests" />
            <SelectTestNewBtns handleTestChange={handleTestChange} />
            <br />
            <div className="btns">
                <button className="btn" onClick={handleSelectAll}>Select all</button>
                <button className="btn" onClick={handleSelectNone} >Select none</button><br /><br />
                <button className="btn save" onClick={handleSave} >Save</button><br /><br />
            </div>
            <br />
            <SelectTestTable data={currentTestJSON} />
            <div className="btns">
                <button className="btn save"  onClick={handleSave} >Save</button><br /><br />
            </div>
            <footer>
                <p>Built With &#128147; For Students</p>
                <p>Developed by DG and friends</p>
            </footer>
        </div>
    );
}

export default SelectTestNew;