import React from 'react';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MessageIcon from '@material-ui/icons/Message';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {
  Link
} from "react-router-dom";
const icons =[
        {
            name:<InsertInvitationIcon/>,
            link:"/manager"
        },
        {
            name:<PostAddIcon/>,
            link:"/create"
        },
        {
            name:<PersonOutlineIcon/>,
            link:"/profile"
        },
        {
            name:<MessageIcon/>,
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