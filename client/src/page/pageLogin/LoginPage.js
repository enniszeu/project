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
                emailDb:'',
                password:"",
                passwordDb:"",
                picture:"",
                loading12:"",
                showOn:null, 
                security:null
                
            }

            this.onChangeEmail = this.onChangeEmail.bind(this);           
            this.onChangePass = this.onChangePass.bind(this);           
            this.onSubmit = this.onSubmit.bind(this);           

        }

        componentDidMount(){
            callApi('manager', 'GET', null).then(res =>{
                this.setState({
                    emailDb : res.data[0].email,
                    passwordDb:res.data[0].password,
                    
                })

                
            })
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
        e.preventDefault()
        const {email, password, emailDb, passwordDb,security} = this.state
        

        if(email === emailDb && password === passwordDb){
            this.setState({
                showOn:<div>
                            <Redirect to="manager" />
                        </div>,
                
            })
           
        }else{
         
        }


    }

   


    render(){
            
          
        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = (
                <div>
                    <Redirect to="manager" />
                </div>
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
                        <Redirect to="login" />
                    </div>
            )
        }


        return(
            <div>
                

                {fbContent}
                {this.state.showOn}
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
                                        <form onSubmit={this.onSubmit} className="formLogin">
                                            <div className="input-login">
                                                <input placeholder="Usernam" 
                                                       type="text"
                                                       onChange={this.onChangeEmail}
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
                                        </form>

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
                                                      redirectUri="https://ennisszeu.web.app/login" 
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
}

export default LoginPage;