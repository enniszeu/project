import React from 'react';
import '../public/style/home.css';
import Banner from '../../Components/header/Banner';
import callApi from './../../utils/apicaller';

    
    
class HomePage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            html:"",
            name:"",
            conten:""
        }
    }

    componentDidMount(){
                callApi('', 'GET', null).then(res =>{
                    var data = res.data;
                    this.setState({
                        name: data.name,
                        conten: data.conten
                    })
                })
            }

    render(){

        setInterval(() => {
            this.setState({ html: "html" });
        }, 1000);

        return(
                <div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Banner />
                            </div>
                        </div>
                    </div>
                </div>
           )
    }
}

export default HomePage;
