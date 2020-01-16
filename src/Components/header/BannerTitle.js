import React from 'react';


class BannerTitle extends React.Component{
	
    render(){
    	setInterval(function baner(){
			var baner = document.getElementById("baner");
			baner.style.opacity="1";
		}, 1000)
    	setInterval(function baner(){
			var title1 = document.getElementById("title1");
			title1.style.marginTop="-28px";
			title1.style.opacity="1";
		}, 1500)
		setInterval(function baner(){
			var title2 = document.getElementById("title2");
			title2.style.marginTop="23px";
			title2.style.opacity="1";
		
		}, 2000)
	setInterval(function baner(){
			var buttonTitle = document.getElementById("button-title");
			buttonTitle.style.marginTop="-23px";
			buttonTitle.style.opacity="1";
		
		}, 2500)

        return(
            <div className="row row-title" onLoad={this.baner}>
				<div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
				</div>
				<div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
					<div className="baner-title" id="baner-title">
						<p className="title1" id="title1" > HI, MY NAME IS TUAN AND I LOVE</p>
						<p className="title2" id="title2" > DESIGN &</p>
						<p className="title3" id="title3" > CODEINGRAVERY</p>
						<div className="button-title" id="button-title">
							<a>MY PROFIRE</a>
						</div>
					</div>
					
				</div>
			</div>
        )
    }
}

export default BannerTitle;
