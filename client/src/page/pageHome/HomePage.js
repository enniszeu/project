import React from 'react';
import '../public/style/home.css';
import Banner from '../../Components/header/Banner';
import About from '../../Components/main/About';
import Service from '../../Components/main/Service';
import MyTeam from '../../Components/main/MyTeam';
import Loading from '../../Components/loader/Loading';
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
                <Loading />
                    <div className={` ${this.state.html} container-fluid`} id="html" >
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Banner />
                                <About />
                                <Service />
                                <MyTeam />
                            </div>
                        </div>
                    </div>
                </div>
           )
    }
}

export default HomePage;
