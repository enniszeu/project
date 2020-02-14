import React from 'react';
import callApi from './../../utils/apicaller';
import '../public/style/post.css';
import {
  Link
} from "react-router-dom";


    class PostPage extends React.Component {

        constructor(props){
            super(props);

            this.state = {
                posts : [],
                random1:"",
                random2:"",
                random3:"",
                loading12:""
    
            }


        }

        componentDidMount(){
            callApi('manager', 'GET', null).then(res =>{
                this.setState({
                    posts : res.data,
                    random1 : res.data[Math.floor(Math.random() * res.data.length)],
                    random2 : res.data[Math.floor(Math.random() * res.data.length)],
                    random3 : res.data[Math.floor(Math.random() * res.data.length)]
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
                                            <p>{(post.date).slice(3,5)} <br/>{`Thang ${(post.date).slice(1,2)}`}</p>
                                        </div>
                                        <h5>{(post.date).slice(6,10)}</h5>
                                        <h3>{(post.date).slice(12,19)}</h3>
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
            var ab = <div className="loading-custom loading">
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                     </div>
             const {posts,random1,random2,random3} = this.state

             setInterval(() => {
                 this.setState({ loading12: "loading12" });
             }, 1000);
            return(
                <div>
                    <div className="">
                        {this.state.loading12 === "loading12" ? "" : ab}
                    </div>
                    
                    <div className={`postBackground container-fluid wapperManager ${this.state.loading12}`}>
                        <div className="row "   >
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="baner-view">
                                    <h2>{posts.name}
                                    <p>Single Post</p>
                                    </h2>

                                </div>
                                <div className="header">
                                    <div className="row"  >
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
                                            {this.showposts(posts)}
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                            <div className="meauPost ">
                                                <div className="input-group mb-3 input-search">
                                                    <input type="text" className="form-control" placeholder="Search" />
                                                </div>
                                                <h2>Categories</h2>
                                                <hr/>
                                                <br/>
                                                <br/>
                                                <ul>
                                                    <li>Web Design (12)</li>
                                                    <li>Web Development (9)</li>
                                                    <li>Grapics Design (7)</li>
                                                    <li>Grapics Design (7)</li>
                                                </ul>
                                                <h2>Recent Posts</h2>
                                                <hr/>
                                                <br/>
                                                <br/>
                                                <br/>
                                                <Link to={`post/${random1._id}`}>
                                                    <img src={random1.url} width="90px" height="90px" />
                                                    <p>{random1.name}</p>
                                                </Link>
                                                <Link to={`post/${random2._id}`}>
                                                    <img src={random2.url} width="90px" height="90px" />
                                                    <p>{random2.name}</p>
                                                </Link>
                                                <Link to={`post/${random3._id}`}>
                                                    <img src={random3.url} width="90px" height="90px" />
                                                    <p>{random3.name}</p>
                                                </Link>
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

