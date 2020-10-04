import React from "react";
import "./style.scss";
import Logo from "../../assets/images/Logo";
import Nav from "../Nav";

const Header = () => {
    return (
        <header className="mb-5 mt-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-3">
                        <Logo />
                    </div>
                    <div className="col-9">
                        <Nav />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;