import React from 'react';
import callApi from './../../utils/apicaller';

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
   

            const {posts, data} = this.state

        
            setInterval(() => {
                 this.setState({ loading12: "loading12" });
             }, 1000);
            return(
                <div>
                    <div className="">
                        {this.state.loading12 === "loading12" ? "" : ab}
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

