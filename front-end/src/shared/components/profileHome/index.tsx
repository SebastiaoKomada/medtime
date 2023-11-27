import React from "react";
import "./index.css";
import { PiUserSwitchFill } from "react-icons/pi";


const ProfileHome = () => {
    return (
        <div className="logo__profileHome">
            <div className="col-1__profileHome">
                <img src="profile.png" alt="logo" />
                <h2>Seba</h2>
            </div>
            <div className="col-2__profileHome">
                <PiUserSwitchFill color="red" size={40}/>
            </div>
        </div>
    );
};

export default ProfileHome;
