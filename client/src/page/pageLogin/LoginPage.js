import React from 'react';
import '../public/style/login.css';

import {
  Link
} from "react-router-dom";

class LoginPage extends React.Component{
    constructor(props){
            super(props);

            this.state = {
                user:"",
                pass:""       
            }

           
            
        }



 
   


    render(){
        return(
            <div className="container-fluid container-fluid-css">
                <div className="row ">
                    <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                        <div className="row header">
                            <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
                                <div className="login-left">
                                    <p>Sign into your account</p>
                                    <div className="loginResend">
                                        <Link to="" className="border-left-css" >Login</Link>
                                        <Link to="" >Resing</Link>
                                    </div>
                                    <div className="input-login">
                                        <input placeholder="Usernam" 
                                               type="text"
                                               onChange={this.onChangeUser}
                                                />
                                        <br/>
                                        <input placeholder="Password" 
                                               type="password"
                                               onChange={this.onChangePass}
                                                />
                                    </div>
                                    <div className="button-login">
                                        <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                        <span>forget password</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-6 col-xl-6">
                                <div className="login-right">
                                    <div className="box-right">
                                        <h2>loggy</h2>
                                        <h4>welcome to have</h4>
                                        <ul>
                                            <li className="fb"><i className="fab fa-facebook-f"></i></li>
                                            <li className="tw"><i className="fab fa-twitter"></i></li>
                                            <li className="gg"><i className="fab fa-google"></i></li>
                                            <li className="in"><i className="fab fa-instagram"></i></li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;