import React from "react";
import "./index.css";

const BottomNav = () => {
    return (
        <>


            <div className="bottom-nav__home">
                <a href="#" className="active">
                    <i className="fa fa-home"></i>
                    Início
                </a>
                <a href="#">
                    <div className="btn-add__home">
                        +
                    </div>
                </a>
                <a href="#">
                    <i className="fa fa-user"></i>
                    Perfil
                </a>
            </div>
        </>
    );
};

export default BottomNav;
