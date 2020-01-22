import React from 'react';
import Contect from '../Minrec/Contect';
import {
  Link
} from "react-router-dom";
	
class About extends React.Component{
	constructor(props){
        super(props);

        this.state = {
            myProject :[
				{
					conten:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci consectetur tempora jet.",
					type:true
				}			
			]
        }
    }

    
	showConten = () =>{
    	this.setState({
    		myProject:[{
					conten:"Enim auctor purus quis dolor bibendum velit sapien, tincidunt non imperdiet in dapibus placerat justo imperdiet dolor. Vel sem mauris nibh facilisi tincidunt. Fusce elementum dui iaculis consequat volutpat montes, consequat, magnis cubilia. Interdum aliquet ad ridiculus ullamcorper mus natoque sed nibh cubilia tortor dictum nullam pharetra ut sociosqu.Tellus vitae consectetuer velit. Nonummy rhoncus blandit pretium ullamcorper. Facilisis fermentum pretium adipiscing bibendum fermentum className facilisis nascetur. Et, neque natoque. Et cubilia mattis Pellentesque augue sociosqu et maecenas ad lorem curae; interdum malesuada.",
					type:true
				}]
        })
    }
    showConten1 = () =>{
    	this.setState({
    		myProject:[{
    				conten:"hang",
					type:true
				}]
        })
    }
    showConten2 = () =>{
    	this.setState({
    		myProject:[{
    			conten:"tuan 123",
					type:true
				}]
        })
    }

   

    render(){
    	var { myProject } = this.state

    	var conten = myProject.map((myProjects, index)=>{
				return (
					<p key={index} className="meau-conten">
						{myProjects.type === true ? myProjects.conten : ""}			
					</p>
					)
			})
    	
        return(
            <div className="container-fluid">
            	<div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<div className="conten">
							<h3>About</h3>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci consectetur tempora jet.
							</p>
						</div>
						<div className="row">
							<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
								<div className="table1">
									<Contect />
								</div>
							</div>
							<div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
								<div className="table2">
									<div className="meau-conten">
										<ul>
											<li onClick={this.showConten}>
												<Link to="">About Me</Link>
											</li>
										
											<li onClick={this.showConten1}>
												<Link to="" className="active">Why Me</Link>
											</li>
										
											<li onClick={this.showConten2}>
												<Link to="">My Express</Link>
											</li>
										</ul>	
									</div>
									<div className="conten-meau" >
										{conten}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
					<div className="row">
	                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
							<div className="contenSkill">
								<h3>My Qualification And Skills</h3>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci consectetur tempora jet.
								</p>
							</div>
							<div className="loaderSkill">
								<div className="row">
									<div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2">
										<p>Html</p>
										<div className="skillOne float"></div>
									</div>
									<div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2">
										<p>Css</p>
										<div className="skillTrue float"></div>
									</div>
									<div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2">
										<p>Express</p>
										<div className="skillTree float"></div>
									</div>
									<div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2">
										<p>Nodejs</p>
										<div className="skillFor float"></div>
									</div>
									<div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2">
										<p>MongDb</p>
										<div className="skillFire float"></div>
									</div>
									<div className="col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2">
										<p>Reactjs</p>
										<div className="skillSit float"></div>
									</div>
									<p className="conten-skill">Taciti sodales turpis neque cursus parturient turpis ullamcorper lacinia condimentum, euismod at neque sit laoreet venenatis fames class dis eros nisi conubia laoreet tristique pharetra dui. Class aenean nisl natoque pharetra. Sapien, tristique, montes nibh ante tristique turpis vitae risus.</p>
								</div>
							</div>
						</div>
					</div>
			</div>	
        )
    }
}

export default About;
