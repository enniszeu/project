import React from 'react';
import {
  Link
} from "react-router-dom";
const icons =[
        {
            name:<i className="fab fa-facebook-f"></i>
        },
        {
            name:<i className="fab fa-twitter"></i>
        },
        {
            name:<i className="fab fa-google-plus-g"></i>
        },
        {
            name:<i className="fab fa-instagram"></i>
        }
    ]



class Contect extends React.Component{

	showIcons = (icons) =>{
        var resule = null;
            resule = icons.map((icon, index)=>{
                return (
                    <ul key={index}>
                        <li>
                            <Link to="dfs">{icon.name}</Link>
                        </li>
                    </ul>
                    )
            })
        return resule;
    }



    render(){
        return(
           <div className="conten-social">
				{this.showIcons(icons)}
			</div>
        )
    }
}

export default Contect;