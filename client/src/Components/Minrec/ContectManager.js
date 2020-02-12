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
            link:"/5e104b921de3cc0017f7ca42-yuhftb-juyx-rsezxzd-jytv-8714762ghj7g"
        },
        {
            name:<PostAddIcon/>,
            link:"/56grfg4543-75egr653-753dffs3-786ygh-6ygfdrg5-785g456571-dffxr7sszsv-7645ff"
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