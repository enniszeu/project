import React from 'react';
import Button from './Icons/Button';
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
		}, 500);
		setInterval(() => {
  			this.setState({ title2: "title2-2" });
		}, 1000);
		setInterval(() => {
  			this.setState({ button: "button" });
		}, 1500);

	
        return(
            <div className="row row-title"  >
				<div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
					<div className="baner-title">
						<p className={` ${this.state.title1} title1`} > Hi, My Name Is Tuan And I Love</p>
						<p className={` ${this.state.title2} title2`} > Design</p>
						<div className={` ${this.state.button} button-title`}>
							<Button />
						</div>
						
					</div>
					
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
				
				</div>
			</div>
        )
    }
}

export default BannerTitle;
