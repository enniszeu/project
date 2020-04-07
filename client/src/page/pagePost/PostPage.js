import React from 'react';
import callApi from './../../utils/apicaller';
import Meau from './pageChild/Meau';
import Loading from '../.././Loading/Loading';
import Showposts from './pageChild/Showposts';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {
  Link
} from "react-router-dom";


    class PostPage extends React.Component {

        constructor(props){
            super(props);

            this.state = {
                posts : [],
                status:0,
                loading12:"",
                html:"",
                css:"",
                js:"",
                linux:"",
                onMeau:"",
                disMeau:""
            }
        }

        componentDidMount(){
            callApi('manager', 'GET', null).then(res =>{
                this.setState({
                    posts : res.data,
                    status: res.status
                })
            })
        }
        home=()=>{
            this.setState({html:"", css:"", js:"" ,loading12:"", linux:"", onMeau:"", disMeau:""})
        }
        html=()=>{
            this.setState({html:"html", css:"", js:"" ,loading12:"", linux:"", onMeau:"", disMeau:""})
        }
        css=()=>{
            this.setState({css:"css", html:"", js:"" ,loading12:"", linux:"", onMeau:"", disMeau:""})
        }
        js=()=>{
            this.setState({js:"js", css:"", html:"",loading12:"", linux:"", onMeau:"", disMeau:""})
        }
        linux=()=>{
            this.setState({linux:"linux", js:"", css:"", html:"",loading12:"", onMeau:"", disMeau:""})
        }
        onMeau=()=>{
            this.setState({onMeau:"onMeau", disMeau:"disMeau"})
        }
        ofMeau=()=>{
            this.setState({onMeau:"", disMeau:""})
        }
        render(){
             const {posts, status, loading12, html, css, js, linux, onMeau, disMeau} = this.state
             setInterval(() => {
                 this.setState({ loading12: "loading12" });
             }, 2000);
                // console.log("res")
             
            return(
                <div>
                    <div className="">
                       {loading12 === "loading12" ? "" : <Loading />}
                    </div>
                    <title>Chia sẽ kinh nghiệm lập trình</title>
                    <div className="row custom_row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 custom_col">

                                <div className="meau_mobie fixed-top">
                                    <MenuIcon onClick={this.onMeau}/>
                                    <div className={`nav_mobi ${onMeau} `}>
                                        <CloseIcon onClick={this.ofMeau}/>
                                        <ul>
                                            <li onClick={this.home}><Link to="/post">home</Link></li>
                                            <li onClick={this.html} ><Link to="/post" className={html === "html" ? "colorHtml" : ""}>html</Link></li>
                                            <li onClick={this.css}><Link to="/post" className={css === "css" ? "colorCss" : ""}>css</Link></li>
                                            <li onClick={this.js}><Link to="/post" className={js === "js" ? "colorJs" : ""}>js</Link></li>
                                            <li onClick={this.linux}><Link to="/post" className={linux === "linux" ? "colorLinux" : ""}>Linux</Link></li>
                                        </ul>
                                    </div>  
                                </div>

                                <Meau html={html} css={css} js={js} linux={linux} loading12={loading12} setHtml={this.html} setHome={this.home} setCss={this.css} setJs={this.js} setLinux={this.linux}/>
                                
                            </div>
                        </div>

                    <div className={`postBackground container-fluid wapperManager ${disMeau} ${this.state.loading12}`}>
                        <div className="row "   >
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

                                <div className="wapper_header">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                            <Showposts posts={posts} html={html} css={css} js={js} linux={linux}/>
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

export default PostPage;

