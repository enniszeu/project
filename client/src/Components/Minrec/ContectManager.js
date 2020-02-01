import React from 'react';
import {
  Link
} from "react-router-dom";
const icons =[
        {
            name:<i className="far fa-play-circle fa-lt"></i>,
            link:"/manager"
        },
        {
            name:<i className="far fa-calendar-alt fa-lt"></i>,
            link:"/create"
        },
        {
            name:<i className="far fa-calendar-alt fa-lt"></i>,
            link:"/"
        },
        {
            name:<i className="fas fa-receipt fa-lt"></i>,
            link:"/"
        }
    ]



class ContectManager extends React.Component{

	showIcons = (icons) =>{
        var resule = null;
            resule = icons.map((icon, index)=>{
                return (
                    <ul key={index}>
                        <li>
                            <Link to={icon.link}>{icon.name}</Link>
                        </li>
                    </ul>
                    )
            })
        return resule;
    }



    render(){
        return(
            <div className="ManagerDisplay">
				{this.showIcons(icons)}
			</div>
        )
    }
}

export default ContectManager;