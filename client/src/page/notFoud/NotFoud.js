import React from 'react';
import Loading from '../../Components/loader/Loading';


    class NotFoud extends React.Component {

    	constructor(props){
	        super(props);

	        this.state = {
	            html:""
	        }
	    }

        render(){
        	setInterval(() => {
	            this.setState({ html: "html" });
	        }, 1000);
            return(
            	<div>
            		<Loading />
	            	<div className={` conten ${this.state.html}`}>
	                	<h1>404 - khong tim thay trang</h1>
	                </div>
               	</div>
            )
        }
    }

export default NotFoud;

