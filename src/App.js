import axios from 'axios';
import './App.css';
import * as React from 'react';
import Header from './Components/Header/Header';
import SecondHeader from './Components/SecondHeader/SecondHeader';
import { version_json } from './Components/VersionUpdate/VersionUpdate';

// import ReCAPTCHA from "react-google-recaptcha";
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';


function App() {

  const sendNotification = async () => {

    const url = "";

    const data = {
      'embeds': [
        {
          'title': 'Someone Downloaded your Application',
          'color': 0xffffff
        }
      ]
    }

    const headers = {
      'Content-Type': 'application/json'
    }

    await axios.post(url, data, { headers });
  }

  const handleClick = () => {

    const link = document.createElement("a");

    link.href = "./ATS.exe";
    link.download = "ATS.exe";

    document.body.appendChild(link);

    link.click();

    sendNotification();
  }

  return (
    <div className='talently'>
      <Header heading="Home"/>
      {/* <Drawer
        anchor={"left"}
        open={drawer}
        onClose={() => handleDrawer()}
        onOpen={() => {
          console.log('HOla opened');
        }
        }
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <div className="menu">
            <Link to={"/"}><p className="menuTab">Home</p></Link>
            <Link to={"/problemstatement"}><p className="menuTab">Problem Statement</p></Link>
            <Link to={"/privacypolicy"}><p className="menuTab">Privacy Policy</p></Link>
            <Link to={"/contactus"}><p className="menuTab">Contact Us</p></Link>
          </div>
        </Box>
      </Drawer> */}
      <SecondHeader title="Pass your tests with confidence. We'll take the stress out of test-taking. With great power comes great responsibility"/>
      <div className='talentlyNote'>
        <p>Scroll Down to Find Download Button</p>
      </div>
      <div className='listsNotes'>
        <p><strong>Introduction: </strong></p>
        <ul>
          <li><p>Are you tired of manually attending Talentely tests, and struggling to manage your busy schedule?
            Look no further! Introducing ATS, the cutting-edge solution that streamlines your test-taking experience and ensures you the completion of your tests.
          </p></li>
          <li><p>Just download and install it and start the application
          </p></li>
          <li><p>Follow instruction, and dont forget to read the readme file
          </p></li>
          <li><p>A Browser window will open up and do your tests according to the requirements specified by you</p>
          </li>
        </ul>
        <p><strong>What is Talentely Completion Service?</strong></p>
        <ul>
          <li><p>
            It is a state-of-the-art online test attending application that revolutionizes the way students take up the online tests
          </p>
          </li>
          <li>
            <p>Designed with students, professionals, and lifelong learners in mind, our platform is your one-stop destination for effortless and efficient test performance.</p>
          </li>
          <li><p>It is an automated test attending service.</p>
          </li>
        </ul>
        <p><strong>Key Features</strong></p>
        <ul>
          <li><p>Choose how much percentage of questions to be answered correctly</p></li>
          <li><p>Choose how much percentage of time to attend each test</p></li>
          <li><p>Time spent on each question is random, but total time will be same</p></li>
          <li><p>Saves the progress of test attended by the application. so that completed tests is not attended again</p></li>
          <li><p>The user can also manually select which tests to be attended by the application.</p></li>
        </ul>
        <p><strong>Advantage</strong></p>
        <ul>
          <li><p>Can attend tests when you are sleeping.</p></li>
          <li><p>Can attend tests when you go to college or anywhere</p></li>
        </ul>
        <p><strong>Disadvantage</strong></p>
        <ul>

          <li><p>Does not attend programming tests.</p></li>
          <li><p>Answering accuracy and time attendance may vary by 5%</p></li>
          <li><p>Bugs may appear</p></li>
        </ul>
        <p><strong>How the application works:</strong></p>
        <ul>

          <li><p>1. Gets credential from user and saves it</p></li>
          <li><p>2. Opens browser</p></li>
          <li><p>3. Log in with your account</p></li>
          <li><p>4. Navigates to each test automatically</p></li>
          <li><p>5. Starts and completes the test</p></li>
          <li><p>6. Then navigate to next test and does the same</p></li>
          <li><p>and goes on.....</p></li>
        </ul>
        <p><strong>Why Choose our Service</strong></p>
        <ul>
          <li><p>We understand that your time is valuable, and success hinges on proper organization and preparation. So to manage that, our application is the one you need, and we are the one you are looking for. Use our application and be happy</p></li>
          <li><p>More over this is a free application.</p></li>
        </ul>

        <p><strong>Join our community today!</strong></p>
        <ul>
          <li><p>Experience the power and take charge of your academic and professional destiny. Don't let tests hold you back—conquer them with ease and finesse. Join the ranks of high achievers and thrive in the world of exams with us by your side.</p></li>
          <li><p>Embark on this exciting journey with us and let's redefine success, together!</p></li>
        </ul>
      </div>
      <div className='btnbtn'>
        <button className='btnDownload' onClick={() => handleClick()}>Download</button>
        <p id='version'>version: {version_json['version']}</p>
        <p className='note1'>Run the application as <strong>Administrator</strong> always</p>
        <p className='note1'><strong>Note</strong> : This Version works as of 11-Aug-2023 if you follow the instructions given in <strong>_README.txt</strong> file present in the installation directory after you install the app.</p>
        <p className='note1'><strong>Important : This app works best if your PC resolution is 1920 x 1080 and scale 100%</strong></p>
        {/* <ReCAPTCHA
          sitekey="6LfxBI8oAAAAAIwitigqqLChJwYJnbPa2vdPzJ8c"
          onChange={onChange}
        /> */}
      </div>
      <footer>
        <p>Built With &#128147; For Students</p>
        <p>Developed by DG and friends</p>
      </footer>

    </div>
  );
}

export default App;
