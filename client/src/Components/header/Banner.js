import React from 'react';
import Meaus from './Meaus';
import BannerTitle from './BannerTitle';


class Banner extends React.Component{


    render(){
        return(
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    	<Meaus/>
        				<BannerTitle />
                    </div>
                </div>
        )
    }
}

export default Banner;
