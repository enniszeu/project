import React from 'react';
import './App.css';
import Banner from './Components/header/Banner';
import Loading from './Components/loader/Loading';

class App extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <Loading />
                        <Banner />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
