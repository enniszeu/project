import React from 'react';
import Meaus from './Meaus';
import BannerTitle from './BannerTitle';


class Banner extends React.Component{


    render(){
        return(
            <div className="baner" id="baner" >
            	<Meaus/>
            	<BannerTitle />
            </div>    
        )
    }
}

export default Banner;
