import React from 'react';
import Loading from '../../Components/loader/Loading';
import callApi from './../../utils/apicaller';
import {
  Link
} from "react-router-dom";


    class PostPage extends React.Component {

        constructor(props){
            super(props);

            this.state = {
                html:"",
                posts : []
    
            }


        }

        componentDidMount(){
            callApi('manager', 'GET', null).then(res =>{
                this.setState({
                    posts : res.data
                })
            })
        }

        showposts = (posts) =>{
        var resule = null;
            resule = posts.map((post, index)=>{
                return (
                        <div className="postMeau" key={index}>

                            <img src={post.url} />
                            <div className="row"  >
                                <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                    <div className="blogDatePost">
                                        <div className="blogDate1">
                                            <p>12 <br/>Thu hai</p>
                                        </div>
                                        <h5>2016</h5>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
                                    <h4 className="display-4">{post.name}</h4>
                                    <h4>{(post.textAria).split("",160)}
                                    <br/>
                                    <br/>
                                    <Link to={`post/${post._id}`}>Read More</Link>
                                    </h4>
                                    
                                </div>
                            </div>
                        </div>
                    )
            })
            return resule;
        }

        render(){

             const {posts} = this.state
             setInterval(() => {
                 this.setState({ html: "html" });
             }, 1000);
            return(
                <div>
                    <Loading />
                    <div className="baner-view">
                        <h2>{posts.name}
                        <p>Single Post</p>
                        </h2>

                    </div>
                    <div className={` conten container-fluid wapperManager ${this.state.html}`}>
                        <div className="row"  >
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="header">
                                    <div className="row"  >
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                            {this.showposts(posts)}
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                            <div className="meauPost">
                                                <h1>Categories</h1>
                                                <hr/>
                                                <ul>
                                                    <li>Web Design (12)</li>
                                                    <li>Web Development (9)</li>
                                                    <li>Grapics Design (7)</li>
                                                    <li>Grapics Design (7)</li>
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

export default PostPage;

