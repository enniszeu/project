import React from 'react';
import callApi from './../../utils/apicaller';
import {
  Link
} from "react-router-dom";


    class PostPage extends React.Component {

        constructor(props){
            super(props);

            this.state = {
                posts : [],
                status:0,
                loading12:""
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


        showposts = (posts) =>{
        var resule = null;
            resule = posts.map((post, index)=>{
                return (
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 postCal" key={index}>
                            <div className="postMeau">
                                <img src={post.imageName}/>
                                <div className="blogDatePost">
                                    <div className="blogDate1">
                                        <p>{(post.date).slice(3,5)} <br/>{`Thang ${(post.date).slice(1,2)}`}</p>
                                    </div>
                                    <h5>{(post.date).slice(6,10)}</h5>
                                    <h3>{(post.date).slice(11,19)}</h3>
                                </div>
                                <div className="row"  >
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                        <Link to={`/post/${post._id}`} ><h4 className="display-14">{post.name}</h4></Link>
                                        <p className="p">{post.conten}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            })
            return resule;
        }

        render(){
            var ab = <div class="load-wrapp">
                        <div class="load-6">
                            <div class="letter-holder">
                                <div class="l-1 letter">E</div>
                                <div class="l-2 letter">N</div>
                                <div class="l-3 letter">N</div>
                                <div class="l-4 letter">I</div>
                                <div class="l-5 letter">S</div>
                                <div class="l-6 letter">Z</div>
                                <div class="l-7 letter">E</div>
                                <div class="l-8 letter">U</div>
                                <div class="l-9 letter">.</div>
                                <div class="l-10 letter">.</div>
                                <div class="l-11 letter">.</div>
                            </div>
                        </div>
                    </div>
             const {posts, status, loading12} = this.state
             setInterval(() => {
                 this.setState({ loading12: "loading12" });
             }, 2000);
            return(
                <div>
                    <div className="">
                       {loading12 === "loading12" ? "" : ab}
                    </div>
                    
                    <div className={`postBackground container-fluid wapperManager ${this.state.loading12}`}>
                        <div className="row "   >
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className={` baner-view ${this.state.loading12}`}>
                                    <Link to="/">
                                    <div className="baner-title">
                                    </div>
                                    </Link>
                                </div>
                                <div className="wapper_header">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                                            <div class="row">
                                                {this.showposts(posts)}
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

export default PostPage;

