import React from 'react';
import {
  Link
} from "react-router-dom";


class BannerTitle extends React.Component{
	
	constructor(props){
        super(props);

        this.state = {
            title1:"",
            title2:"",
            title3:"",
            button:"",
            isDisplays:false
        }
    }


    
    render(){
    	setInterval(() => {
  			this.setState({ title1: "title1-1" });
		}, 1500);
		setInterval(() => {
  			this.setState({ title2: "title2-2" });
		}, 2000);
		setInterval(() => {
  			this.setState({ button: "button" });
		}, 2500);

	
        return(
            <div className="row row-title"  >
				<div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
					<div className="baner-title">
						<p className={` ${this.state.title1} title1`} > HI, MY NAME IS TUAN AND I LOVE</p>
						<p className={` ${this.state.title2} title2`} > DESIGN &</p>
						<p className="title3" > CODEINGRAVERY</p>
						<div className={` ${this.state.button} button-title`}>
							<Link to="">MY PROFIRE</Link>
						</div>
					</div>
					
				</div>
			</div>
        )
    }
}

export default BannerTitle;
