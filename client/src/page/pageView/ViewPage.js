import React from 'react';
import callApi from './../../utils/apicaller';
import Loading from '../.././Loading/Loading';

    class ViewPage extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                posts : [],
                data:null,
                loading12:""
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

        text2html = (data) => {
            return (
                <div className="content" dangerouslySetInnerHTML={{__html: data}}></div>
            )
        }
        
        render(){
   

            const {posts, data} = this.state
        
            setInterval(() => {
                 this.setState({ loading12: "loading12" });
             }, 1000);
            return(
                <div>
                    <title>{posts.name}</title>
                    <meta
                      name="description"
                      content={posts.name}
                    />
                    <div className="">
                        {this.state.loading12 === "loading12" ? "" : <Loading />}
                    </div>
                    <div className={` baner-view ${this.state.loading12}`}>

                         <div className="baner-title">
                         </div>

                    </div>
                    <div className={`postBackground postaria conten container-fluid wapperManagerView ${this.state.loading12}`}>
                        <div className="row"   >
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                
                                <div className="header_1">
                                    <div className="title_view">
                                    <h2>{posts.name}</h2>
                                    <h4>Chu de: {posts.conten} <br/><br/> {posts.date}</h4>
                                </div>
                                    <div className="row "  >
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <div className="text-aria">
                                                
                                                <img src={posts.imageName} />
                                                <p id="_post_textArea">{this.text2html(posts.textAria)}</p>
                                                    
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

