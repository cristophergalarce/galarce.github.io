import React from "react";

function Header() {
    return (
        <div className="Header">
            <header className="Header-Main">
                <div className="Wrapper-Logo">
                    <div className="Logo">
                        <a href="#top">Cristopher Galarce</a>
                    </div>
                    <div className="Pill-Sky">
                        <p>Now available</p>
                    </div>
                </div>
                <nav className="Menu-Header">
                    <ul>
                        <li><a href="#top">Solutions</a></li>
                        <li><a href="#top">How it works</a></li>
                        <li><a href="#top">Features</a></li>
                        <li><a href="#top">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;