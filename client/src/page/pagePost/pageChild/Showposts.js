import React from 'react';
import {
  Link
} from "react-router-dom";


    class Showpost extends React.Component {

    	showposts = (posts) =>{
	        var resule = null;
	            resule = posts.map((post, index)=>{
	                return (
	                        <div className={`${post.conten === "HTML" ? "" : this.props.html} ${post.conten === "CSS" ? "" : this.props.css} ${post.conten === "JAVASCRIPT" ? "" : this.props.js} ${post.conten === "LINUX" ? "" : this.props.linux} col-xs-12 col-sm-12 col-md-6 col-lg-6 postCal`} key={index}>
	                            <div className="postMeau">
	                                <img src={post.imageName}/>
	                                <div className="blogDatePost">
	                                    <div className="blogDate1">
	                                        <p>{(post.date).slice(7,10)} <br/>{`${(post.date).slice(0,7)}`}</p>
	                                    </div>
	                                    <h5>{(post.date).slice(11,15)}</h5>
	                                    <h3>{(post.date).slice(16,24)}</h3>
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
    	// console.log(this.props.posts)
            return(
                <div class="row">
	                {this.showposts(this.props.posts)}
	            </div>
            )
        }
    }

export default Showpost;

