import React from 'react';
// import Loading from '../../Components/loader/Loading';
import callApi from './../../utils/apicaller';


    class ViewPage extends React.Component {

        constructor(props){
            super(props);

            this.state = {
                html:"",
                posts : []
    
            }


        }

        componentDidMount(){
            var {match} = this.props;
            if(match){
                var id = match.params.id;
                callApi(`post/${id}`, 'GET', null).then(res =>{
                    this.setState({
                        posts : res.data
                    })
                })
            }
        }


        render(){

             const {posts} = this.state
             // setInterval(() => {
             //     this.setState({ html: "html" });
             // }, 1000);
            return(
                <div>
                
                    <div className="baner-view">
                        <h2>{posts.name}
                        <p>Single Post</p>
                        </h2>

                    </div>
                    <div className={`postBackground postaria conten container-fluid wapperManager ${this.state.html}`}>
                        <div className="row"   >
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div className="header">
                                    <div className="row "  >
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
                                            <div className="text-aria">
                                                <img src={posts.url} />
                                                <p>{posts.textAria}</p>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
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

