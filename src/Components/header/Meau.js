import React from 'react';

const meaus =[
		{
			name:"Home"
		},
		{
			name:"About"
		},
		{
			name:"Contact"
		},
		{
			name:"Adkuin"
		},
		{
			name:"Help"
		}
	]

class Meau extends React.Component{

	showMeau = (meaus) =>{
		var resule = null;
			resule = meaus.map((meau, index)=>{
				return (
					<li key={index}>
						<a>{meau.name}</a>
					</li>
					)
			})
		return resule;
	}
	showTableMeau = () =>{
		var navMobie = document.getElementById("nav-mobie");
		var meauUl = document.getElementById("meau-nav-ul")
		var banerTitle = document.getElementById("baner-title");
		banerTitle.style.display="none"
		navMobie.style.marginLeft="-2%";

		// meauUl.style.display="block";
	}
	closeTableMeau = () =>{
		var navMobie = document.getElementById("nav-mobie");
		var banerTitle = document.getElementById("baner-title");
		banerTitle.style.display="block"
		navMobie.style.marginLeft="100%"
	}

    render(){
        return(
             	// nav bar
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
				<div className="nav-cribe" id="nav-mobie">
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
