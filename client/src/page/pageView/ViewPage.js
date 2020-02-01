import React from 'react';
import Loading from '../../Components/loader/Loading';
import callApi from './../../utils/apicaller';
import {
  Link
} from "react-router-dom";


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
                    var data = res.data;
                    this.setState({
                        posts : res.data
                    })
                })
            }
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
                        <p>Single Blog Page</p>
                        </h2>

                    </div>
                    <div className={` conten container-fluid wapperManager ${this.state.html}`}>
                        <div className="row"  >
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <div>
                                    <p>{posts.textAria}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

export default ViewPage;

