import React from 'react';
import {
  Link
} from "react-router-dom";

const meaus =[
		{
			name:"Admin",
			link:"/login"
		},
		{
			name:"About",
			link:"/manager"
		},
		{
			name:"Contact",
			link:"/manager"
		},
		{
			name:"Adkuin",
			link:"/manager"
		},
		{
			name:"Help",
			link:"/manager"
		}
	]

class Meau extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			showMeau:""
		}
	}

	showTableMeau = () =>{
		this.setState({ showMeau: "onMeau" });
	};

	closeTableMeau = () =>{
		this.setState({ showMeau: "closeMeau" });
	}

	showMeau = (meaus) =>{
		var resule = null;
			resule = meaus.map((meau, index)=>{
				return (
					<li key={index}>
						<Link to={meau.link}>{meau.name}</Link>
					</li>
					)
			})
		return resule;
	}
	// showTableMeau = () =>{
	// 	var navMobie = document.getElementById("nav-mobie");
	// 	var meauUl = document.getElementById("meau-nav-ul")
	// 	var banerTitle = document.getElementById("baner-title");
	// 	banerTitle.style.display="none"
	// 	navMobie.style.marginLeft="-2%";

	// 	// meauUl.style.display="block";
	// }
	// closeTableMeau = () =>{
	// 	var navMobie = document.getElementById("nav-mobie");
	// 	var banerTitle = document.getElementById("baner-title");
	// 	banerTitle.style.display="block"
	// 	navMobie.style.marginLeft="100%"
	// }

    render(){

        return(
				<nav className="meau-nav">
					<div className="title-nav">
						<p className="display-4">ENIISZEU</p>
					</div>
						<ul className="meau-nav-ul">
							{this.showMeau(meaus)}
						</ul>
					<div className="nav-mobie" onClick={this.showTableMeau}>
						<i className="fas fa-bars"></i>
					</div>
					<div className={` nav-cribe ${this.state.showMeau}`}>
						<div className="close-nav" >
							<i className="fas fa-times fa-icon" onClick={this.closeTableMeau}></i>
							<nav className="meau-mobie">
								<ul>
									{this.showMeau(meaus)}
								</ul>
							</nav>
						</div>
					</div>
				</nav>

        )
    }
}

export default Meau;
