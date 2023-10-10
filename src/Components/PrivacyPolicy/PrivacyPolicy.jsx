import React from "react";
import Header from "../ProblemStatement/Header/Header";
import Body from "./Body/Body";
import Header1 from "../Header/Header"

const PrivacyPolicy = () => {
    return(
        <div>
            <Header1 heading="Privacy Policy"/>
            <Header header="Privacy Policy" />
            <br />
            <div className='talentlyNote'>
                <p>This privacy policy applies to the application downloaded from automatetalentely.netlify.app</p>
            </div>
            <br />
            <Body />
            <br />
            <footer>
                <p>Built With &#128147; For Students</p>
                <p>Developed by DG and friends</p>
            </footer>
        </div> 
    )
}

export default PrivacyPolicy;