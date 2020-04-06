import React from 'react';
import {
  Link
} from "react-router-dom";


    class Meau extends React.Component {
        html=()=>{
            this.props.setHtml()
        }
        home=()=>{
            this.props.setHome()
        }
        css=()=>{
            this.props.setCss()
        }
        js=()=>{
            this.props.setJs()
        }
        linux=()=>{
            this.props.setLinux()
        }

        render(){
            return(
                <div className={` baner-view ${this.props.loading12}`}>
                    <div className="view_pa">
                        <Link to="/">
                            <div className="baner-title"></div>
                        </Link>
                    </div>
                    <div className="meau_baner">
                        <ul>
                            <li onClick={this.home}><Link to="/post">home</Link></li>
                            <li onClick={this.html} ><Link to="/post" className={this.props.html === "html" ? "colorHtml" : ""}>html</Link></li>
                            <li onClick={this.css}><Link to="/post" className={this.props.css === "css" ? "colorCss" : ""}>css</Link></li>
                            <li onClick={this.js}><Link to="/post" className={this.props.js === "js" ? "colorJs" : ""}>js</Link></li>
                            <li onClick={this.linux}><Link to="/post" className={this.props.linux === "linux" ? "colorLinux" : ""}>Linux</Link></li>
                        </ul>
                    </div>
                </div>
            )
        }
    }

export default Meau;

