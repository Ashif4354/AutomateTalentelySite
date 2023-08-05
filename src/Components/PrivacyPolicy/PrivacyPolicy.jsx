import React from "react";
import Header from "../ProblemStatement/Header/Header";
import Body from "./Body/Body";

const PrivacyPolicy = () => {
    return(
        <div>
            <Header header="Privacy Policy" />
            <br />
            <div className='talentlyNote'>
                <p>This privacy policy applies to the application downloaded from automatetalentely.netlify.app</p>
            </div>
            <br />
            <Body />
        </div> 
    )
}

export default PrivacyPolicy;