import React from "react";
import Typed from "react-typed"

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Akil's web development and websites</h1>
                <Typed
                    className="typed-text"
                    strings={["Web Designs", "Web Development", "Software Engineering"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                 />
                 <a href="#" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    )
}

export default Header
