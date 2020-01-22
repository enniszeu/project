import React from 'react';
import Meau from './Meau';
import BannerTitle from './BannerTitle';


class Banner extends React.Component{


    render(){
        return(
            <div className="baner" id="baner" >
            	<Meau/>
            	<BannerTitle />
            </div>    
        )
    }
}

export default Banner;
