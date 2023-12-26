import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import {logindata } from '../context/ContextProvider.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../login/css/main.css";
import "../login/css/util.css";
import "../login/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../login/fonts/iconic/css/material-design-iconic-font.min.css";
import "../login/vendor/animate/animate.css";
import "../login/vendor/css-hamburgers/hamburgers.min.css";
import "../login/vendor/animsition/css/animsition.min.css";
import "../login/vendor/select2/select2.min.css";
import "../login/vendor/daterangepicker/daterangepicker.css";
import "jquery/dist/jquery.min.js";
import "../login/js/main.js";
import "animsition/dist/js/animsition.min.js";



const Login = () => {
    const histroy = useHistory();
    const [uname, setuname] = useState("");
    const [password, setpassword] = useState("");
    const [loginerror,setloginerror]=useState(false);
    const {login,setlogindata}=useContext(logindata);
    const Logindata = (e) => {
        e.preventDefault();
        console.log(uname);
        console.log(password);

        if (uname === "Admin" && password === "@1234") {
            setloginerror(true);
            histroy.push("/home");
            
        }
        else {
            setlogindata("invaild");
            console.log("Invaild");
        }

    }

    return (
        <>
        {
            login ?
            <>
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Invaild</strong> Username and Password Must Be Same
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            </>:""   
        }
            
            <div class="limiter">
                <div class="container-login100" style={{ backgroundImage: `url(${require('../images/bg-01.jpg')})` }}>
                    <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <form class="login100-form validate-form">
                            <span class="login100-form-title p-b-49">
                                Login
                            </span>

                            <div class="wrap-input100 validate-input m-b-23" data-validate="Username is reauired">
                                <span class="label-input100">Username</span>
                                <input class="input100" type="text" name="uname" value={uname} placeholder="Type your username" onChange={(e) => setuname(e.target.value)} />
                                <span class="focus-input100" data-symbol="&#xf206;"></span>
                            </div>

                            <div class="wrap-input100 validate-input" data-validate="Password is required">
                                <span class="label-input100">Password</span>
                                <input class="input100" type="password" name="password" value={password} placeholder="Type your password" onChange={(e) => setpassword(e.target.value)} />
                                <span class="focus-input100" data-symbol="&#xf190;"></span>
                            </div>

                            {/* <div class="text-right p-t-8 p-b-31">
                                <a href="#">
                                    Forgot password?
                                </a>
    </div>*/}

                            <div class="container-login100-form-btn mt-5">
                                <div class="wrap-login100-form-btn">
                                    <div class="login100-form-bgbtn"></div>
                                    <button class="login100-form-btn" onClick={Logindata}>
                                        Login
                                    </button>
                                </div>
                            </div>

                            {/* <div class="txt1 text-center p-t-54 p-b-20">
                                <span>
                                    Or Sign in Using
                                </span>
                            </div>

                            <div class="flex-c-m">
                                <a href="#" class="login100-social-item bg1">
                                    <i class="fa fa-facebook"></i>
                                </a>

                                <a href="#" class="login100-social-item bg2">
                                    <i class="fa fa-twitter"></i>
                                </a>

                                <a href="#" class="login100-social-item bg3">
                                    <i class="fa fa-google"></i>
                                </a>
                            </div>
    */}

                        </form>
                    </div>
                </div>
            </div>
            <div id="dropDownSelect1"></div>
        </>
    )
}

export default Login