import React from 'react';
import {
  Link
} from "react-router-dom";

    
class Meaus extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isIcon:true,
            tree:"",
            one:"",
            tow:"",
            nav:""
        }
    }
     componentDidMount(){
        const show = document.getElementById("showHome");
        const showMeau = document.getElementById("showMeau");
        setTimeout(() => {
             show.click();
        },500);
        setTimeout(() => {
             showMeau.click();
        },2000);
           
        }
    onMeau = () =>{
        if(this.state.isIcon){
            this.setState({
            tree:"tree",
            one:"one",
            tow:"tow",
            nav:"navShow",
            isIcon:false
            })
        }else{
            this.setState({
            tree:"",
            one:"",
            tow:"",
            nav:"",
            isIcon:true     
        })
        }
    }
    showHome = () =>{
        this.props.showHome()
    }
    showAbout = () =>{
        this.props.showAbout()
    }
    showActive = () =>{
        this.props.showActive()
    }
    render(){
        const {tree,one,tow,nav} =this.state
        return(
                <div className="nav-bar">
                    <div className="button-icon" onClick={this.onMeau} id="showMeau">
                    </div>

                    <div className={`nav-meau ${nav}`}>
                        <ul className={ this.props.isHome ? "" : "on"} id={this.props.isActive ? "" : "onActive"}>
                            <Link to="" ><li onClick={this.showHome} id="showHome">
                                      <div class="arrow animated bounce" onClick={this.showHome}></div>
                            </li></Link>
                            <Link to="" ><li onClick={this.showAbout}>
                                <div class="arrow animated bounce" onClick={this.showAbout}></div>
                            </li></Link>
                            <Link to="" ><li onClick={this.showActive}>
                                <div class="arrow animated bounce" onClick={this.showActive}></div>
                            </li></Link>
                        </ul>
                    </div>
                </div>
           )
    }
}

export default Meaus;
