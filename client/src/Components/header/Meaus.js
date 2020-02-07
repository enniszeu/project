import React from 'react';

    
class Meaus extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isIcon:true,
            tree:"",
            one:"",
            tow:""
        }
    }
    onMeau = () =>{
        console.log("gh")
        if(this.state.isIcon){
            this.setState({
            tree:"tree",
            one:"one",
            tow:"tow",
            isIcon:false
            })
        }else{
            this.setState({
            tree:"",
            one:"",
            tow:"",
            isIcon:true     
        })
        }
    }

    render(){
        const {tree,one,tow} =this.state
        return(
                <div className="nav-bar">
                    <div className="button-icon" onClick={this.onMeau}>
                        <div className={`icon-bar ${one}`}></div>
                        <div className={`icon-bar ${tow}`}></div>
                        <div className={`icon-bar ${tree}`}></div>
                    </div>
                </div>
           )
    }
}

export default Meaus;
