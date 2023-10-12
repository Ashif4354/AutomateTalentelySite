import React from "react";
import "./Developers.css";
import Header from "../ProblemStatement/Header/Header";
import { Link } from "react-router-dom";
import Header1 from "../Header/Header";

const ContactUS = () => {
    return(
        <div>
            <Header1 heading="Developers" />
            <Header header="Developers"/>
            <br />
            <br />
            <div className='listsNotes'>
                <p className="discretePeople">We Are A Group Of Discrete People</p>
                <p className="discretePeople">You will not be able to find us.</p>
                <p className="discretePeople">However we are giving you a hint to find us.</p>
                <p className="discretePeople">Below are set of encrypted names, encrypted using play fair cipher.</p>
                <p className="discretePeople">We are not giving you the <Link to="/youDummy"><strong className="strongOne">KEY</strong></Link> to decrypt it.</p>
                <p className="discretePeople">Your job is to find the key and decrypt and find our names.</p>
            <br />
            <div>
                <p className="discretePeople">BULMLV</p>
                <p className="discretePeople">PTKTHNUBLPDY</p>
                <p className="discretePeople">OLPDFBLY</p>
                <p className="discretePeople">IBTIXDXD</p>
                <p className="discretePeople">PBXPDZ</p>
            </div>
            </div>
            {/* <p className="discretePeople">However we are giving you a hint to find us</p> */}
        </div>
    )
}

export default ContactUS;