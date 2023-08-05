import React from "react";
import "./Body.css";

const Body = () => {
    return(
        <div className='listsNotes'>
            <p className="listsNotesHead">Features and Functionalities:</p>
            <div className="deepHeading">
                <p className="deepHeadingP">User Registration and Information Collection:</p>
                <ul className='ulFound'>
                    <li><p>The ATS application will allow users to register by collecting their usernames and passwords. </p></li>
                    <li><p>Additionally, the application will gather user-provided information such as the percentage of correct answers and percentage completion time for tests.
                    </p></li>
                </ul>
                <p className="deepHeadingP">Selective Test Participation:</p>
                <ul className='ulFound'>
                    <li><p>The application will empower users to manually choose which tests they wish to attend.</p></li>
                    <li><p>This feature offers flexibility and personalized test-taking experiences.</p></li>
                </ul>
                <p className="deepHeadingP">Progress Reset Option:</p>
                <ul className='ulFound'>
                    <li><p>ATS will include a manual option for users to reset their test progress, allowing them to start anew when needed.</p></li>
                </ul>
                <p className="deepHeadingP">Seamless Talentely Portal Integration:</p>
                <ul className='ulFound'>
                    <li><p>The application will have the capability to open a web browser and navigate to the Talentely portal's login page.</p></li>
                </ul>
                <p className="deepHeadingP">Automated Test Login:</p>
                <ul className='ulFound'>
                    <li><p>ATS will streamline the login process by automatically signing in to the Talentely portal using the user-provided credentials.</p></li>
                </ul>
                <p className="deepHeadingP">Efficient Test Navigation:</p>
                <ul className='ulFound'>
                    <li><p>Once logged in, ATS will navigate to each test, utilizing the information stored to automatically fetch test duration and question count.</p></li>
                </ul>
                <p className="deepHeadingP">Test Progress Monitoring:</p>
                <ul className='ulFound'>
                    <li><p>ATS can display the test status and progress, giving users feedback on their progress.</p></li>
                </ul>
                <p className="deepHeadingP">Smooth Test Transition:</p>
                <ul className='ulFound'>
                    <li><p>In case a new test os initiates=d while another is in progress, ATS will automatically submit the ongoing test and seamlessly transition to the new one.</p></li>
                </ul>
                <p className="deepHeadingP">Error Handling for Warnings:</p>
                <ul className='ulFound'>
                    <li><p>The application will be designed to handle warning messages during test attendance.</p></li>
                    <li><p>If a warning occurs, ATS will interact with the prompt (e.g., clicking "OK") to ensure uninterrupted testing.</p></li>
                </ul>
                <p className="deepHeadingP">Dynamic Answering Strategy:</p>
                <ul className='ulFound'>
                    <li><p>ATS will incorporate a dynamic answering strategy, allowing users to specify a percentage of correct answers.</p></li>
                    <li><p>The application will randomly select questions to answer incorrectly, based on the defined percentage.</p></li>
                </ul>
                <p className="deepHeadingP">Variable Time Allocation:</p>
                <ul className='ulFound'>
                    <li><p>While each question may take a different amount of time to answer, the total test time will remain constant, ensuring it look more humane.</p></li>
                </ul>
            </div>
            <p className="listsNotesHead">Objective:</p>
            <ul className="ulFound">
                <li><p>The primary objective of the ATS application is to streamline the process of taking assessment tests on the Talentely portal.</p></li>
                <li><p>By automating login, test navigation, progress tracking, and error handling, ATS aims to enhance user convenience, reduce manual intervention, and promote a more efficient and user-friendly testing experience.</p></li>
            </ul>
            <p className="listsNotesHead">Benefit:</p>
            <ul className="ulFound">
                <li><p>ATS will provide users with a tool that simplifies the process of engaging with Talentely's assessment tests.</p></li>
                <li><p>The application's features will collectively save users time, eliminate repetitive actions, and enable a more focused and controlled testing environment.</p></li>
                <li><p>ATS seeks to enhance user satisfaction and success in their assessment endeavors.</p></li>
            </ul>
      </div>
    ) 
}

export default Body;