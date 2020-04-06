import React from 'react';
import './App.css';
import routes from './router'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
    
    
class App extends React.Component{
    render(){
        return(
                <Router>
                    <div className="wapper">
                        {this.showMeau(routes)}
                    </div>
                </Router>        
            )
    }

    showMeau = (routes) =>{
        var result = null;
            result = routes.map((route, index)=>{
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                     />
                )
            })
        

        return <Switch>{result}</Switch>
    }

}

export default App;
