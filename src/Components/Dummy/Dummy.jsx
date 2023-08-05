import React from "react";
import "./Dummy.css";
import laughingatDummy from "./laughingatDummy.gif";

const Dummy = () => {
    return(
        <div className="Dummy">
            <p className="DummyP">Haha</p>
            <br />
            <p className="DummyP">You thought we'd give you the key so easily</p>
            <p className="DummyP">Find it yourself.</p>
            <br />
            <img className="laughingatDummy" src={laughingatDummy}/>
        </div>
    )
}

export default Dummy;