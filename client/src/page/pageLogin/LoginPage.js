import React from 'react';
import FacebookLogin from 'react-facebook-login';
import callApi from './../../utils/apicaller';
import GitHubLogin from 'react-github-login';
import { Redirect } from 'react-router';
import ManagerPage from '.././pageManager/ManagerPage';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import GitHubIcon from '@material-ui/icons/GitHub';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Loading from '../.././Loading/Loading';
import md5 from 'md5';

import {
  Link
} from "react-router-dom";

class LoginPage extends React.Component{
    constructor(props){
            super(props);

            this.state = {
                email:'',
                password:"",
                isTrueLogin: false
            }

            this.onChangeEmail = this.onChangeEmail.bind(this);           
            this.onChangePass = this.onChangePass.bind(this);           
            this.onSubmit = this.onSubmit.bind(this);           

        }


    onChangeEmail(e){
        const email = e.target.value;
        this.setState({
            email:email
        })
    }

    onChangePass(e){
        const password = e.target.value;
        this.setState({
            password:password
        })
    }


    onSubmit(e){
        e.preventDefault();
        var {email, password} = this.state;
        document.cookie = `${md5(email)}`
        document.cookie = `${md5(password)}`
        var cookie = document.cookie
        if(cookie === "0fe8cf3262d72131ec5d304cd3d8190b"){
            this.setState({isTrueLogin : true})
        }
        // this.setState({redirect : 200})
        // var username = getCookie("username");
  
    }







    render(){
        setInterval(() => {
             this.setState({ loading12: "loading12" });
         }, 1000);
        return(
            <div>
                <div className="">
                    {this.state.loading12 === "loading12" ? "" : <Loading />}
                </div>
                {this.state.isTrueLogin === true ? <Redirect to='/manager'  /> : ""}
                <div className={`container-fluid container-fluid-css ${this.state.loading12}`}  style={{background:"#fff", position:"fixed", height:"100vh"}}>
                    <div className="row header">
                        <div className="col-12 col-sm-12 col-lg-12 col-xl-12">
                            <div className="login-left">
                                <div className="main_banner_e">
                                    <div className="banner_e"></div>
                                </div>

                                <form onSubmit={this.onSubmit} className="formLogin">
                                    <div className="input-login">
                                        <div className="icone_user">
                                        <AccountCircleIcon />
                                        <input 
                                               type="email"
                                               name="email"
                                               placeholder="Username or email"
                                               onChange={this.onChangeEmail}
                                                />
                                        </div>
                                        
                                        <br/>
                                        <div className="icone_user">
                                        <LockOpenIcon />
                                        <input placeholder="Password" 
                                               type="password"
                                               name="password"
                                               onChange={this.onChangePass}
                                                />
                                        </div>
                                    </div>
                                    <div className="button-login">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                        <span>forget password</span>
                                    </div>
                                    <div className="ul_">
                                        <ul>
                                            <li className="fb"><FacebookIcon />
                                            </li>
                                            <li className="tw"><Link to="login"> <TwitterIcon/></Link></li>
                                            <li className="gg"><Link to="login"> <GTranslateIcon/></Link></li>
                                            <li className="in"> <GitHubIcon/>
                                           </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;