import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class Loading extends React.Component{
    render(){
        return(
           <Loader
                type="Triangle"
                color="#fff"
                height={150}
                width={150}
                timeout={1000}
              /> 
        )
    }
}

export default Loading;