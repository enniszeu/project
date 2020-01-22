import React from 'react';
import Contect from '../Minrec/Contect';

class MyTeam extends React.Component{
    render(){
        return(
           <div className="container-fuild">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="imageMyteam">
                            <div className="serviceConten">
                                <h3>Meet My Team</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci consectetur tempora jet.
                                </p>
                            </div>
                            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                              <div className="carousel-inner paddingTem">
                                <div className="carousel-item active" data-interval="10000">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="teamOne Tem">
                                                <div className="imageTeam1"></div>
                                                <p> Mario Ozawa</p>
                                                <p>CEO/WEB</p>
                                                <p className="teamDisplay"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iust</p>
                                                <Contect />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="teamOne Tem">
                                                <div className="imageTeam1"></div>
                                                <p> Mario Ozawa</p>
                                                <p>CEO/WEB</p>
                                                <p className="teamDisplay"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iust</p>
                                                <Contect />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-interval="2000">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="teamTrue Tem">
                                                <div className="imageTeam1"></div>
                                                <p> Mario Ozawa</p>
                                                <p>CEO/WEB</p>
                                                <p className="teamDisplay"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iust</p>
                                                <Contect />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="teamTrue Tem">
                                                <div className="imageTeam1"></div>
                                                <p> Mario Ozawa</p>
                                                <p>CEO/WEB</p>
                                                <p className="teamDisplay"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iust</p>
                                                <Contect />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="teamTree Tem">
                                                <div className="imageTeam1"></div>
                                                <p> Mario Ozawa</p>
                                                <p>CEO/WEB</p>
                                                <p className="teamDisplay"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iust</p>
                                                <Contect />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="teamTree Tem">
                                                <div className="imageTeam1"></div>
                                                <p> Mario Ozawa</p>
                                                <p>CEO/WEB</p>
                                                <p className="teamDisplay"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iust</p>
                                                <Contect />
                                            </div>
                                            
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

export default MyTeam;