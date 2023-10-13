import React, { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import "./Feedback.css";
import Header from "../Header/Header";
import SecondHeader from "../ProblemStatement/Header/Header"
import submitForm from "./SubmitForm";

const FeedBack = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");
    const [radio, setRadio] = useState("");
    const [starValue, setStarValue] = useState("");
    const [open, setOpen] = useState(false);

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeContent = (e) => {
        setContent(e.target.value);
    }

    const handleRadio = (radio) => {
        setRadio(radio);
    }

    const handleSubmit = () => {
        if(submitForm(name, email, radio, content, starValue))
            setOpen(true);
    }

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });


    const handleSnackClose = () => {
        setOpen(false);
    }


    // name, email, feedback_type = (bug report, feature request, general feedback), content, rating, submit button
    return (
        <div className="feedback">
            <Header heading="Feedback" />
            <SecondHeader header="Feedback" />
            <div className="feedbackform">
                <h1 className="feedbackformheading">Share Your Thoughts with Us..</h1>
                <div className="feedbackforminpForm">
                    <TextField id="outlined-basic" label="Name" variant="outlined" className="feedbackforminp" onChange={handleChangeName} />
                    <br />
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" className="feedbackforminp" onChange={handleChangeEmail} />
                </div>
                <br />
                <div className="feedbackradio">
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">FeedBack Type</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="bug-report" onClick={() => handleRadio("bug-report")} control={<Radio />} label="Bug report" />
                            <FormControlLabel value="feature-request" onClick={() => handleRadio("feature-request")} control={<Radio />} label="Feature request" />
                            <FormControlLabel value="general-feedback" onClick={() => handleRadio("general-feedback")} control={<Radio />} label="General FeedBack" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <br />
                {
                    radio === "general-feedback" ? <div className="feedbackRating">
                        <Rating
                            name="simple-controlled"
                            // value={starValue}
                            size="large"
                            onChange={(event, newValue) => {
                                setStarValue(newValue);
                            }}
                        />
                    </div> : <div></div>
                }
                <br />
                <div className="feedbackInp">
                    <TextField id="outlined-multiline-static" rows={5} multiline label="Content" className="feedbackInpContent" onChange={handleChangeContent} />
                </div>
                {/* <textarea className="feedbackInpContent" placeholder="FeedBack" onChange={handleChangeContent} /> */}
                <br />
                <button className="feedbackSubmit" onClick={() => handleSubmit()}>Submit</button>
            </div>
            <Snackbar open={open} onClose={handleSnackClose} autoHideDuration={2000}>
                <Alert elevation={6} variant="filled" severity="success" onClose={handleSnackClose}>
                    Feedback submitted successfully!
                </Alert>
            </Snackbar>
            <footer>
                <p>Built With &#128147; For Students</p>
                <p>Developed by DG and friends</p>
            </footer>
        </div>
    );
}

export default FeedBack;