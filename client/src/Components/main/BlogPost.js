import React from 'react';


class BlogPost extends React.Component{
    render(){
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
                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="blogConten">
                                            <img src="" />
                                            <div className="blogTitle">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="blogConten">
                                            <img src="" />
                                            <div className="blogTitle">
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                                        <div className="blogConten">
                                            <img src="" />
                                            <div className="blogTitle">
                                            </div>
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