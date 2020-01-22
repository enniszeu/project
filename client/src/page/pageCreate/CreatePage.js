import React from 'react';
import Loading from '../../Components/loader/Loading';
import callApi from './../../utils/apicaller';
import ContactManager from '../../Components/Minrec/ContectManager'
import {storage} from './../../firebaseConfig/firebaseConfig'
import {
  Link
} from "react-router-dom";


    class CreatePage extends React.Component {

    	constructor(props){
	        super(props);

	        this.state = {
	            html:"",
                meauAdd:"",
                meau:"",
                name:"",
                conten:"",
                image:null,
                url:"",
                progress:"",
                textAria:""        
            }

            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeConten = this.onChangeConten.bind(this);
            this.onChangeImage = this.onChangeImage.bind(this);
            this.onChangeTextAria = this.onChangeTextAria.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
	    }

        // componentDidMount(){
        //     var {match} = this.props;
        //     if(match){
        //         var id = match.params.id;
        //         callApi(`post/${id}`, 'GET', null).then(res =>{
        //             var data = res.data;
        //             this.setState({
        //                 name: data.name,
        //                 conten: data.conten
        //             })
        //         })
        //     }
        // }

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

        onChangeImage(e){
            if(e.target.files[0]){
                const image = e.target.files[0];
                this.setState(()=> ({image}))
            }

        }

        onSubmit(e){
            e.preventDefault();
            var {name,conten,textAria,image,url} = this.state;
            var {history} = this.props;

            const uploadTask = storage.ref(`image/${image.name}`);
            console.log(storage.ref('images'))
            uploadTask.put(image).then(function(snapshot) {

            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            console.log('Upload is ' + progress + '% done');

            }).then(function() {
                uploadTask.getDownloadURL().then(function(downloadURL) {
                    this.setState({
                        url:downloadURL
                    })
                    console.log('File available at', downloadURL);
                });
            });

                callApi('create', 'POST', {
                    name:name,
                    conten:conten,
                    textAria:textAria,
                    url:url
                }).then(res =>{
                    history.goBack('/');
                })

            }
        meau = () =>{
        this.setState({ 
            meauAdd: "meauAdd",
            meau:"meau" 
        });
        }

        close = () =>{
            this.setState({ 
                meauAdd: "",
                meau:"" 
            });
        }

        render(){

            

        	 setInterval(() => {
	             this.setState({ html: "html" });
	         }, 1000);
            return(
            	<div>
            		<Loading />
                        <div className={` wapperManager ${this.state.html}`}>
                            <div className="side-nav" id="side-nav">
                                <div className="logo">
                                    <Link to="/manager">
                                        <i className="fab fa-airbnb fa-2x"></i>
                                    </Link>
                                </div>
                                <ContactManager />
                            </div>
                            <div className={`conten-mana ${this.state.meauAdd}`} >
                                <div className="nav-title">
                                    <div className={`meau-click ${this.state.meau}`} onClick={this.meau} >{/*onclick="meau()"*/}
                                        <i className="fas fa-bars fa-2x"></i>
                                    </div>
                                    <div className={`close ${this.state.meauAdd}`} onClick={this.close} >{/*onclick="closes()"*/}
                                        <i className="fas fa-times"></i>
                                    </div>
                                </div>
        	                	
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
                                        <label>Text:</label>
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
                                        <label>Image</label>
                                        <input className="form-control file"
                                               type="file" 
                                               onChange={this.onChangeImage}
                                            />
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" value="Create post" className="btn btn-primary">Add</button>
                                        <Link to="/manager" className="btn btn-success">Tre Lai</Link>
                                    </div>
                                </form> 
        	                </div>
                       	</div>
                    </div>
            )
        }
    }

export default CreatePage;

