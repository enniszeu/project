import React from 'react';
import Loading from '../../Components/loader/Loading';
import callApi from './../../utils/apicaller';
import {
  Link
} from "react-router-dom";


    class EditPage extends React.Component {

    	constructor(props){
	        super(props);

	        this.state = {
	            html:"",
                name:"",
                conten:"",
                textAria:""
	        }

            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeConten = this.onChangeConten.bind(this);
            this.onChangeTextAria = this.onChangeTextAria.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
	    }

        componentDidMount(){
            var {match} = this.props;
            if(match){
                var id = match.params.id;
                callApi(`post/${id}`, 'GET', null).then(res =>{
                    var data = res.data;
                    this.setState({
                        name: data.name,
                        conten: data.conten,
                        textAria: data.textAria
                    })
                })
            }
        }

        onChangeName(e){
            this.setState({
                name: e.target.value
            });
        }

        onChangeConten(e){
            this.setState({
                conten: e.target.value
            });
        }
        onChangeTextAria(e){
            this.setState({
                textAria: e.target.value
            });
        }

        onSubmit(e){
            e.preventDefault();
            var {name,conten,textAria} = this.state;
            var {history} = this.props;
            var {match} = this.props;
            var id = match.params.id;
                callApi(`upload/${id}`, 'POST', {
                    name:name,
                    conten:conten,
                    textAria:textAria
                }).then(res =>{
                    history.goBack('/');
                })

            }

        render(){

            

        	 setInterval(() => {
	             this.setState({ html: "html" });
	         }, 1000);
            return(
            	<div>
            		<Loading />
	            	<div className={` conten ${this.state.html}`}>
	                	<h1>editr</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" 
                                       className="form-control"
                                       name="name"
                                       value={this.state.name}
                                       onChange={this.onChangeName}
                                />
                            </div>
                            <div className="form-group">
                                <label>Conten:</label>
                                <input type="text" 
                                       className="form-control"
                                       name="conten"
                                       value={this.state.conten}
                                       onChange={this.onChangeConten}
                                />
                            </div>
                            <div className="form-group">
                                <label>textAria:</label>
                                <textarea 
                                     className="form-control" 
                                     id="exampleFormControlTextarea1" 
                                     rows="3"
                                     name="textAria"
                                     value={this.state.textAria}
                                     onChange={this.onChangeTextAria}
                                     >
                                 </textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" value="Create post" className="btn btn-primary">Edit</button>
                                <Link to="/manager" className="btn btn-success">Tre Lai</Link>
                            </div>
                        </form> 
	                </div>
               	</div>
            )
        }
    }

export default EditPage;

