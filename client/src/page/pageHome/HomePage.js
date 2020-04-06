import React from 'react';
import '../public/scss/style.css';
import Banner from '../../Components/header/Banner';
import callApi from './../../utils/apicaller';


class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
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
        return(
                <div>
                    <title>enniszeu</title>
                    <meta
                      name="description"
                      content="Web site created using enniszeu"
                    />
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
