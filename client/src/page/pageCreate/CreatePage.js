import React from 'react';


// react component plugin for creating a beautiful datetime dropdown picker
import Datetime from "react-datetime";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import callApi from './../../utils/apicaller';
import ContactManager from '../../Components/Minrec/ContectManager'
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import  { Redirect } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {storage} from './../../firebaseConfig/firebaseConfig'
import {
  Link
} from "react-router-dom";


    class CreatePage extends React.Component {

    	constructor(props){
	        super(props);

	        this.state = {
                meauAdd:"",
                meau:"",
                name:"",
                sivba:"",
                conten:"",
                image:null,
                url:"",
                imageName:"",
                progress:0,
                err:"",
                textAria:"",
                errName:"",
                errConten:"",
                errText:"",
                acess:"",
                acessing:"",
                valueInput:"" ,
                date:""       
            }

            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeConten = this.onChangeConten.bind(this);
            this.onChangeImage = this.onChangeImage.bind(this);
            this.onChangeTextAria = this.onChangeTextAria.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.handleUpload = this.handleUpload.bind(this);
            this.onChangeDate = this.onChangeDate.bind(this);
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
        imageUp = () =>{
            const imageUp = document.getElementById("imageInput");
            imageUp.click();
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
            console.log(e.target.value)
        }
          onChangeDate = (e) =>{
              const date = document.getElementById("date");
              this.setState({
                date:date.value
              })
              console.log(this.state.date)
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
            this.setState({
                valueInput:e.target.files[0].name
            })
            console.log(e.target.files[0])


        }

        handleUpload(e){

             

        }

        onSubmit(e){
            e.preventDefault();
            

            var {name,conten,url,textAria,imageName, date} = this.state;
            var {history} = this.props;
            var {image,err} = this.state;
             if(image){
                var imageName = image.name
                const uploadTask = storage.ref(`image/${image.name}`);
                this.setState(()=> ({imageName}))

                uploadTask.put(image).then((snapshot)=> {

                    var progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.setState(()=> ({progress}))
                    // console.log('Upload is ' + progress + '% done');
                        if(progress === 100){
                            this.setState({acess:"Thêm Thành Công", acessing:"  "})
                        }
                }).then(()=> {
                    uploadTask.getDownloadURL().then((url)=> {
                        this.setState(()=> ({url}))
                        history.goBack('/');
                        if(name === ""){
                            this.setState({errName:"name khong dc de trong"})
                            }
                            else if(conten === ""){
                                this.setState({errConten:"conten khong dc de trong"})
                                }
                                else if(textAria === ""){
                                    this.setState({errText:"textAria khong dc de trong"})
                                    }
                                    else if(imageName === ""){
                                    this.setState({err:"imageName khong dc de trong"})
                                        }else{
                                            callApi('create', 'POST', {
                                            name:name,
                                            conten:conten,
                                            textAria:textAria,
                                            url:url,
                                            imageName:imageName,
                                            date:date
                                            }).then(res =>{
                                                history.goBack('/');
                                            })

                                        }
                    });
                });
                
            }else{
                this.setState({err:"Plee Choose Image"})
            }
            
                

            }
        meau = () =>{
        this.setState({ 
            meauAdd: "meauAdd",
            meau:"meau",
            sivba:"sivba"
        });
        }

        close = () =>{
            this.setState({ 
                meauAdd: "",
                meau:"" 
            });
        }


        render(){
            var { date,url,html,meauAdd,meau,sivba,name,conten,textAria,err,progress,errName,errConten,errText,acess,acessing, valueInput } = this.state
            return(
            	<div>
                        <div className="wapperManagerActive">
                            <div className={`side-nav ${sivba}`}>
                                <div className="logo">
                                    <Link to="/manager">
                                        <i className="fab fa-airbnb fa-2x"></i>
                                    </Link>
                                </div>
                                <ContactManager />
                            </div>
                            <div className={`conten-mana ${meauAdd}`} >
                                <div className="nav-title">
                                    <div className={`meau-click ${meau}`} onClick={this.meau} >{/*onclick="meau()"*/}
                                        <MenuIcon />
                                    </div>
                                    <div className={`close ${this.state.meauAdd}`} onClick={this.close} >{/*onclick="closes()"*/}
                                        <CloseIcon />
                                    </div>
                                    <h3>Create Post</h3>
                                </div>
        	                	{progress === 100 ? <div className="alert alert-success" role="alert">
                                  Thêm Thành Công
                                </div> : ""}
                                <form onSubmit={this.onSubmit}>
                                    <div className="title-input">
                                        <div className="form-group">
                                            <p className="display-5">About this post</p>
                                            <br/>
                                            <div className="alert alert-primary" role="alert">
                                              <ErrorOutlineIcon/> Once you choose the project name you can’t change it unless you contact customer support.
                                            </div>
                                            <input type="text" 
                                                   className="form-control input-custom"
                                                   name="name"
                                                   placeholder="Post Title"
                                                   value={name}
                                                   onChange={this.onChangeName}
                                            />
                                            <p style={{color:"red", fontSize:"30px"}}>{`${errName}`}</p>
                                        </div>

                                        <div className="form-group ">
                                            <input type="text" 
                                                   className="form-control input-custom"
                                                   name="conten"
                                                   placeholder="Conten"
                                                   value={conten}
                                                   onChange={this.onChangeConten}
                                            />
                                            
                                            
                                            <div>
                                                <InputLabel >
                                                    Datetime Picker
                                                </InputLabel>
                                                <br />
                                                <FormControl fullWidth>
                                                    <input type="checkbox" 
                                                           value={date} 
                                                           name="date" 
                                                           onChange={this.onChangeDate}/>
                                                    <Datetime
                                                      inputProps={{ placeholder: "Datetime Picker Here", id:"date", name:"date" }}

                                                      
                                                    />
                                                </FormControl>
                                            </div>









                                            <p style={{color:"red", fontSize:"30px"}}>{`${errConten}`}</p>
                                        </div>
                                    </div>
                                     <div className="form-group">
                                       
                                        <div className="row"  >
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                        <div onClick={this.imageUp} className="imageUp">
                                                         <label> Anh Bài Viết </label>
                                                        <div className="valueInput">
                                                            <p>{valueInput ? <FileCopyIcon/> : ""}<span>{valueInput}</span></p>
                                                            
                                                        </div>
                                                        
                                                        </div>
                                                        <div>
                                                            <Link to="56grfg4543-75egr653-753dffs3-786ygh-6ygfdrg5-785g456571-dffxr7sszsv-7645ff">
                                                            <div className="image-add" onClick={this.imageUp}></div>
                                                            <div className="image-text">
                                                                <p>Select file</p>
                                                                <h4>Drop files here or click</h4>
                                                            </div>
                                                            </Link>

                                                        </div>

                                                        
                                                <input className="form-control file imageFile"
                                                       type="file" 
                                                       onChange={this.onChangeImage}
                                                       id="imageInput"
                                                    />
                                            </div>
                                            <br/>
                                            
                                           
                                            {/*<p>{`uploading ${progress} %`}</p>*/}
                                            <br/>
                                           
                                  
                                            <br/>
                                            
                                            
                                        </div>
                                    </div>
                                    <div className="title-input">
                                        <div className="form-group">
                                            <label>Text:</label>
                                             <textarea 
                                                 className="form-control text-custom" 
                                                 id="exampleFormControlTextarea1" 
                                                 rows="20"
                                                 name="textAria"
                                                 value={textAria}
                                                 onChange={this.onChangeTextAria}
                                                 >
                                             </textarea>
                                             <p style={{color:"red", fontSize:"30px"}}>{`${errText}`}</p>
                                        </div>
                                        <div className="progress">
                                          <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width:`${progress}%`}}>{progress === 100 ? progress : ""}%</div>
                                        </div>
                                    </div>
                                   

                                    <div className="form-group">
                                        <button type="submit" 
                                                value="Create post" 
                                                className="btn btn-primary"

                                                >Upload
                                                <i className="fas fa-check fa-lg check"></i>
                                        </button>

                                        <Link to="/manager" 
                                              className="btn btn-success"
                                              style={{marginLeft:"20px", width:"14%"}}
                                              >Back
                                              <i className="fas fa-arrow-left fa-lg check"></i>
                                        </Link>
                                    </div>
                                </form> 
        	                </div>
                       	</div>
                    </div>
            )
        }
    }

export default CreatePage;

