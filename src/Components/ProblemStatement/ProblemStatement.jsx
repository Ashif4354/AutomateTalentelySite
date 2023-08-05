import React from "react";
import Header from "./Header/Header";
import Body from "./Body/Body";

const ProblemStatement = () => {
    return(
        <div>
            <Header header="Problem Statement"/>
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

export default ProblemStatement;