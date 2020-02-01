import React from 'react';
import callApi from './../../utils/apicaller';
import {
  Link
} from "react-router-dom";

class BlogPost extends React.Component{
    constructor(props){
            super(props);

            this.state = {
                posts : []
            }
        }

    componentDidMount(){
        callApi('', 'GET', null).then(res =>{
            this.setState({
                posts : res.data
            })
        })

    }

    showBlog = (posts) =>{
        var resule = null;
            resule = posts.map((post, index)=>{
                return (
                    <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div className="blogConten">
                            <img src={post.url} />
                            <div className="blogDate">
                                <div className="blogDate1">
                                    <p>12 <br/>Thu hai</p>
                                </div>
                                <h5>2016</h5>
                            </div>
                            <div className="blogTitle">
                                <h3>{post.name}</h3>
                                <p>{post.conten}</p>
                                <hr/>
                                <Link to={`post/${post._id}`}>Read More</Link>
                            </div>
                        </div>
                    </div>
                    )
            })
            return resule;
        }


    render(){
        var {posts} = this.state
        return(
            <div className="container-fuild">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="blogMain">
                            <div className="serviceConten">
                                <h3>Latest Blog</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci consectetur tempora jet.
                                </p>
                            </div>
                            <div className="blogTable">
                                <div className="row">
                                  {this.showBlog(posts)}
                                  <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="viewBlog">
                                        <button type="button" className="btn btn-default">
                                            <Link to="/post">SEE ALL POST</Link>
                                        </button>
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

export default BlogPost;