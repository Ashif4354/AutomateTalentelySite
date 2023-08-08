import React from "react";
import "./Body.css";

const Body = () => {
    return(
            <div className='listsNotes'>
            <p className="listsNotesHead">Information We Collect</p>
            <ul className='ulFound deepUL'>
                <p className="deepULP">We collect information about you when you use our application. The information we collect may includes</p>
                <li><p>Username from your pc</p></li>
                <li><p>Email address you use in the application</p></li>
                <li><p>The percentage you set for correct answers</p></li>
                <li><p>The percentage you set for completion time</p></li>
                <li><p>The version of the application you are using</p></li>
                <li><p>The information regarding test started and finished by the application and your test completion status</p></li>
                <li><p>Your PC's local time</p></li>
                <li><p>Exceptions occured during runtime</p></li>
                <li><p>Your Windows Resolution</p></li>
                <br />
                <p className="deepULP">We also get notification when someone download our application, but we do not collect information about who is downloading it.</p>
                <p className="deepULP"><strong>Note : </strong>We do not collect your password. Your password stays with you in your local PC.</p>
            </ul>   
            <br />
            <p className="listsNotesHead">How We Use Your Information</p>
            <ul className='ulFound deepUL'>
                <p className="deepULP">We use your information for a variety of purposes to improve our website and services.</p>
                <p className="deepULP">Also to make sure the application works perfectly</p>
            </ul>   
            <br />
            <p className="listsNotesHead">Sharing Your Information</p>
            <ul className='ulFound deepUL'>
                <p className="deepULP">We will not share your information with third parties for any purpose.</p>
            </ul>   
            <br />
            <p className="listsNotesHead">Security</p>
            <ul className='ulFound deepUL'>
                <p className="deepULP">We take steps to protect your information from unauthorized access, use, or disclosure.</p>
                <p className="deepULP">However, no security system is perfect, and we cannot guarantee the absolute security of your information.</p>
            </ul>   
            <br />
            <p className="listsNotesHead">Changes to This Privacy Policy</p>
            <ul className='ulFound deepUL'>
                <p className="deepULP">We may update this privacy policy from time to time. </p>
                <p className="deepULP">If we make any significant changes, we may not notify you.</p>
            </ul>   
            <br />
            <p className="listsNotesHead">Contact Us</p>
            <ul className='ulFound deepUL'>
                <p className="deepULP">If you have any questions about this privacy policy, please don't feel free to contact us..</p>
            </ul>   
      </div>
    )
}

export default Body;