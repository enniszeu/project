import React from 'react';
import callApi from './../../utils/apicaller';


    class ViewPage extends React.Component {

        constructor(props){
            super(props);

            this.state = {
                posts : []    
            }


        }

        componentDidMount(){
            var {match} = this.props;
            if(match){
                var id = match.params.id;
                callApi(`post/${id}`, 'GET', null).then(res =>{
                    this.setState({
                        posts : res.data,
                    })
                })
            }
        }


        render(){

             const {posts} = this.state
             console.log(String(posts))
            return(
                <div>
                
                    <div className="baner-view">
                        <h2>{posts.name}
                        <p>Single Post</p>
                        </h2>

                    </div>
                    <div className="postBackground postaria conten container-fluid wapperManagerView">
                        <div className="row"   >
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="header">
                                    <div className="row "  >
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
                                            <div className="text-aria">
                                                <h2>{posts.name}</h2>

                                                <h4>Chu de: {posts.conten} <br/><br/> Date: {posts.date}</h4>
                                                <img src={posts.url} />
                                                {posts.textAria}
                                                    

                                            </div>
                                                
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                                            <div className="meauPost-aria ">
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

export default ViewPage;

