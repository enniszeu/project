import React from 'react';
import Proce from './Proce';

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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
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
                date:"",
                loading12:""
            }

            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeConten = this.onChangeConten.bind(this);
            this.onChangeImage = this.onChangeImage.bind(this);
            this.onChangeTextAria = this.onChangeTextAria.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.handleUpload = this.handleUpload.bind(this);
            this.onChangeDate = this.onChangeDate.bind(this);
	    }


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
        }
          onChangeDate = (e) =>{
              const date = document.getElementById("date");
              this.setState({
                date:date.value
              })
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
                valueInput:e.target.files[0].name,
            })
           


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
            var {imageName, loading12, date,url,html,meauAdd,meau,sivba,name,conten,textAria,err,progress,errName,errConten,errText,acess,acessing, valueInput } = this.state
            var ab = <div className="loading-custom loading">
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                      <div className='loading__square'></div>
                     </div>
            setInterval(() => {
                 this.setState({ loading12: "loading12" });
             }, 1000);
            return(
            	<div>
                        <div className="">
                            {this.state.loading12 === "loading12" ? "" : ab}
                        </div>
                        <div className={` wapperManagerActive ${loading12}`}>
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
        	                	 
                                    
                                
                                <form onSubmit={this.onSubmit} className={imageName != "" ? "alertCustom" : ""}>
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
                                                
                                               
                                                <FormControl fullWidth>
                                                    
                                                    <Datetime
                                                      inputProps={{ placeholder: "Datetime Picker Here", id:"date", name:"date" }}            
                                                    />
                                                    <input type="checkbox"
                                                           className="checkbox" 
                                                           value={date} 
                                                           name="date" 
                                                           onChange={this.onChangeDate}/>

                                                </FormControl>
                                            </div>









                                            <p style={{color:"red", fontSize:"30px"}}>{`${errConten}`}</p>
                                        </div>
                                    </div>
                                     <div className="form-group">
                                       
                                        <div className="row"  >
                                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                                        <div onClick={this.imageUp} className="imageUp">
                                                         <p> Anh Bài Viết </p>
                                                        <div className="valueInput">
                                                            <p>{valueInput ? <FileCopyIcon/> : ""}<span>{valueInput}</span></p>
                                                            
                                                        </div>
                                                        
                                                        </div>
                                                        <div>
                                                            <Link to="create">
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
                                            <p>Text:</p>
                                             <textarea 
                                                 className="form-control text-custom" 
                                                 id="exampleFormControlTextarea1" 
                                                 rows="15"
                                                 name="textAria"
                                                 value={textAria}
                                                 onChange={this.onChangeTextAria}
                                                 >
                                             </textarea>
                                             <p style={{color:"red", fontSize:"30px"}}>{`${errText}`}</p>
                                        </div>
                                        
                                    </div>
                                   <div className="progress">
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width:`${progress}%`}}>{progress === 100 ? progress : ""}%</div>
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
                                {progress === 100 ? <div className="alert alert-success custom-suc" role="alert">
                                    <div className="alert alert-success absub" role="alert">
                                        
                                      <CheckCircleIcon/> Thêm Thành Công
                                    </div>
                                    <div className="alert alert-danger absub1" role="alert">
                                         <ErrorOutlineIcon/> 
                                         <Link to="manager">
                                          Go to Back page Manager
                                        </Link>
                                    </div>
                                    <div className="alert alert-info absub2" role="alert">
                                         <PlayCircleFilledIcon/> 
                                         <Redirect to='manager'  /> Continue Add
                                    </div>

                                </div> : ""}
                                {imageName != "" ? <div className="proces"><Proce /></div> : ""}
        	                </div>
                       	</div>
                    </div>
            )
        }
    }

export default CreatePage;

