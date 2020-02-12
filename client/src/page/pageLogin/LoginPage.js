import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GitHubLogin from 'react-github-login';
import { Redirect } from 'react-router';
import ManagerPage from '.././pageManager/ManagerPage';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../public/style/login.css';

import {
  Link
} from "react-router-dom";

class LoginPage extends React.Component{
    constructor(props){
            super(props);

            this.state = {
                isLoggedIn:false,
                userID:"",
                name:"",
                email:'',
                picture:"",
                loading12:""     
            }

           
            
        }

    responseFacebook = (response) =>{
        console.log(response)
        this.setState({
            isLoggedIn:true,
            userID:response.userID,
            name:response.name,
            email:response.email,
            picture:response.picture.data.url
        })
    }
    onSuccess = (response) =>{
        this.setState({
            isLoggedIn:true,
        })
    }
    onFailure = (response) =>{
        console.error(response)
    }


   


    render(){
            
          
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = (
                <ManagerPage 
                    name={this.state.name}
                    picture={this.state.picture}
                />
                )
        } else{
            setInterval(() => {
                 this.setState({ loading12: "loading12" });
             }, 1000);
            var ab = <div className="loading-custom loading">
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                     </div>
            fbContent =(
                    <div>
                        <div className="">
                            {this.state.loading12 === "loading12" ? "" : ab}
                        </div>
                        <div className={`container-fluid container-fluid-css ${this.state.loading12}`}>
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
                                                    <h2>enniszeu</h2>
                                                    <h4>welcome to have</h4>
                                                    <ul>
                                                        <li className="fb"><FacebookIcon />
                                                            <FacebookLogin
                                                                appId="629141364503084"
                                                                autoLoad={true}
                                                                fields="name,email,picture"
                                                                onClick={this.componentClicked}
                                                                callback={this.responseFacebook} />
                                                        </li>
                                                        <li className="tw"><Link to="login"> <TwitterIcon/></Link></li>
                                                        <li className="gg"><Link to="login"> <GTranslateIcon/></Link></li>
                                                        <li className="in"> <GitHubIcon/>
                                                            <GitHubLogin
                                                             clientId="94055a5f013487da24c6"
                                                              redirectUri="https://ennisszeu.firebaseapp.com/login" 
                                                             onSuccess={this.onSuccess}
                                                             onFailure={this.onFailure}
                                                             />
                                                       </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }


        return(
            <div>{fbContent}</div>
        )
    }
}

export default LoginPage;