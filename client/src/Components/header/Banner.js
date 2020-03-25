import React from 'react';
import Meaus from './Meaus';
import {
  Link
} from "react-router-dom";

class Banner extends React.Component{
	constructor(props){
        super(props);

        this.state = {
            activeHome:"",
          	timeHome:"",
          	isHome:true,
          	activeAbout:"",
          	timeAbout:"",
          	isAbout:true,
          	activeAction:"",
          	timeAction:"",
          	isAction:true,
          	rowActive:"",
          	img1Active:"",
          	img2Active:"",
          	rowActiveAbout:"",
          	img2ActiveAbout:"",
          	img2ActiveActive:"",
          	rowActiveActive:""
        }
    }

   

	showHome = () =>{
		if(this.state.isHome === true){
			this.setState({
			activeHome:"activeHome",
			isHome:false
		})
		setTimeout(() => {
			this.setState({
				timeHome:"timeHome"
		})
		},800);
		setTimeout(() => {
			this.setState({
				rowActive:"rowActive"
		})
		},1200);
		setTimeout(() => {
			this.setState({
				img2Active:"img2Active"
		})
		},1400);
		setTimeout(() => {
			this.setState({
				img1Active:"img1Active"
		})
		},1800);
		


		this.setState({
			activeAbout:"",
			isAbout:true
			})
			setTimeout(() => {
				this.setState({
					timeAbout:""
			})
			},800);
		this.setState({
			activeAction:"",
			isAction:true
			})
			setTimeout(() => {
				this.setState({
					timeAction:""
			})
			},800);


			setTimeout(() => {
			this.setState({
				rowActiveAbout:""
			})
			},1200);
			setTimeout(() => {
				this.setState({
					img1ActiveAbout:"",
					img2ActiveAbout:""
			})
			},1400);


			setTimeout(() => {
			this.setState({
				rowActiveActive:""
			})
			},100);
			setTimeout(() => {
				this.setState({
					img2ActiveActive:""
			})
			},200);
			

		}
	}

	showAbout = () =>{
		if(this.state.isAbout === true){
			this.setState({
			activeAbout:"activeAbout",
			isAbout:false
			})
			setTimeout(() => {
				this.setState({
					timeAbout:"timeAbout"
			})
			},800);
			this.setState({
			timeHome:"",
			isHome:true
			})
			setTimeout(() => {
				this.setState({
					activeHome:""
			})
			},800);
			this.setState({
			activeAction:"",
			isAction:true
			})
			setTimeout(() => {
				this.setState({
					timeAction:""
			})
			},800);

			setTimeout(() => {
			this.setState({
				rowActiveAbout:"rowActiveAbout"
			})
			},1200);
			setTimeout(() => {
				this.setState({
					img2ActiveAbout:"img2ActiveAbout"
			})
			},1400);

			


			setTimeout(() => {
			this.setState({
				rowActive:""
			})
			},100);
			setTimeout(() => {
				this.setState({
					img1Active:"",
					img2Active:""
			})
			},200);



			setTimeout(() => {
			this.setState({
				rowActiveActive:""
			})
			},100);
			setTimeout(() => {
				this.setState({
					img2ActiveActive:""
			})
			},200);
			
		}
		console.log("ab")

		}
	
	showActive = () =>{
		if(this.state.isAction === true){
			this.setState({
			activeAction:"activeAction",
			isAction:false
			})

			setTimeout(() => {
				this.setState({
					timeAction:"timeAction"
			})
			},800);

			this.setState({
			activeHome:"",
			isHome:true
			})
			setTimeout(() => {
				this.setState({
					timeHome:""
			})
			},800);

			this.setState({
			timeAbout:"",
			isAbout:true
			})
			setTimeout(() => {
				this.setState({
					activeAbout:""
			})
			},800);


			setTimeout(() => {
			this.setState({
				img2ActiveAbout:""
			})
			},100);
			setTimeout(() => {
				this.setState({
					rowActiveAbout:""
			})
			},200);


			setTimeout(() => {
			this.setState({
				rowActiveActive:"rowActiveActive"
			})
			},1200);
			setTimeout(() => {
				this.setState({
					img2ActiveActive:"img2ActiveActive"
			})
			},1400);

			setTimeout(() => {
			this.setState({
				rowActive:""
			})
			},100);
			setTimeout(() => {
				this.setState({
					img1Active:"",
					img2Active:""
			})
			},200);
			
		}
		console.log("acti")

		}
	
	
    render(){
    	const {activeHome, timeHome, activeAbout, timeAbout, activeAction, timeAction, rowActive, img1Active, img2Active, rowActiveAbout, img2ActiveAbout, img2ActiveActive,rowActiveActive} = this.state;

	    
        return(
                <div className="row" onLoad={this.showHomeDe}>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    	<div className="row-section">
                		<section className={`sec-home ${activeHome} ${timeHome}`}>
                			<div className={`row sec-row ${rowActive}`}>
                				<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                					<div className="sec-img">
                						<div className={`img-true Home2 ${img1Active}`}></div>
                						<div className={`img-one Home1 ${img2Active}`}></div>
                					</div>
		                		</div>
                   				 <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
		                			<div className="sec-conten">
		                				<h1>Hi my name is tuan, desing list</h1>
		                				<p>Beginners & Professionals Have
											Made Avada Their OwnBeginners & Professionals Have
											Made Avada Their Own</p>
		                			</div>
		                		</div>
		                		
		                	</div>
                		</section>
                    	<section className={`sec-about ${activeAbout} ${timeAbout}`}>
                    		<div className={`row sec-row ${rowActiveAbout}`}>
                				<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
                					<div className="sec-img">
                						<div className={`img-one About1 ${img2ActiveAbout}`}></div>
                					</div>
		                		</div>
                   				 <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">

		                			<div className="sec-conten">
		                				<h1>Góc chia sẽ kinh nghiệm lập trình</h1>
		                				<p>Beginners & Professionals Have
											Made Avada Their OwnBeginners & Professionals Have
											Made Avada Their Own</p>
										<button type="button" className="btn btn-danger button-about">
											<Link to="/post" > Go To</Link>
										</button>
		                			</div>

		                		</div>
		                		
		                	</div>

                    	</section>
                    	<section className={`sec-active ${activeAction} ${timeAction}`}>
                    		<div className={`row sec-row ${rowActiveActive}`}>
	                    		<div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
	            					<div className="sec-img">
	            						<div className={`img-one Active ${img2ActiveActive}`}></div>
	            					</div>
		                		</div>
		                		<div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
		                			<div className="sec-conten">
		                				<h1  style={{color:"#7072f7"}}>Fully Coded in HTML5</h1>
		                				<p>Beginners & Professionals Have
											Made Avada </p>
										<button type="button" className="btn btn-danger button-active">
											<Link to="/login" style={{color:"#000"}}  > Login </Link>
										</button>
										
		                			</div>

		                		</div>
	                		</div>
                    	</section>
 
                    	</div>
                    	<Meaus showHome={this.showHome}
                    		   isHome={this.state.isHome}
                    		   showAbout={this.showAbout}
                    		   isAbout={this.state.isAbout}
                    		   showActive={this.showActive}
                    		   isActive={this.state.isAction}
                    	/>
                    </div>

                </div>
	                
        )
    }
}

export default Banner;
