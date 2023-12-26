import React from "react";
import {useHistory} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const Navbar = () => {
    const histroy=useHistory();
    const Logout=()=>{
        console.log("Logut Succesfully");
        histroy.push("/");
        
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink to="/home" className="navbar-brand">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                    <button type="button" onClick={Logout} class="btn btn-danger">Logout</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;