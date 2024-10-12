import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="border-bottom">
            <nav className="navbar navbar-expand bg-white "style={{marginLeft:"200px",marginBottom:"10px"}}>
                <Link className="navbar-brand pl-4" to="/">
                    <img src="media\images\logo.svg" alt="main_logo" style={{ width: "25%" }} />
                </Link>
    

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <form className="form-inline">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link " style={{fontWeight: "500"}} to="/signup">
                                    SignUp <span class="sr-only">current</span>
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link " style={{fontWeight: "500"}} to="/login">
                                    Login <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item active " style={{fontWeight: "500"}}>
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item active" style={{fontWeight: "500"}}>
                                <Link className="nav-link" to="/product">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item active"style={{fontWeight: "500"}}>
                                <Link className="nav-link" to="/pricing">
                                    Pricing
                                </Link>
                            </li>
                            <li className="nav-item active"style={{fontWeight: "500"}} >
                                <Link className="nav-link" to="/support">
                                    Support
                                </Link>
                            </li>
                           
                            
                           
                        </ul>

                    </form>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
