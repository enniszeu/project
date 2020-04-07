import React from 'react';
import Proce from './Proce';
import Datetime from "react-datetime";
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
import Loading from '../.././Loading/Loading';
import ImageUploader from "react-images-upload";
import {
  Link 
} from "react-router-dom";


    class CreatePage extends React.Component {

    	constructor(props){
	        super(props);

	        this.state = {
                name:"",
                sivba:"",
                conten:"",
                imageName:"",
                err:"",
                textAria:"",
                errName:"",
                errConten:"",
                errText:"",
                valueInput:"" ,
                date:Date(),
                loading12:"",
                file:"",
                start:0,
                redirct:0,
                meauAdd:"",
                meau:"",
                isTrueLogin:false,
                image1:"",
                image2:"",
                pictures: []
            }

            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeConten = this.onChangeConten.bind(this);
            this.onChangeImage = this.onChangeImage.bind(this);
            this.onChangeTextAria = this.onChangeTextAria.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.onChangeDate = this.onChangeDate.bind(this);
	    }


        imageUp = () =>{
            const imageUp = document.getElementById("imageInput");
            imageUp.click();
        }

        componentDidMount(){
            const cookie = document.cookie
             if(cookie === "0fe8cf3262d72131ec5d304cd3d8190b"){
                this.setState({isTrueLogin : true})
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
          onChangeDate = (e) =>{
    
        }

        onChangeTextAria(e){
            this.setState({
                textAria: e.target.value
            });
        }
        // key=(e)=>{
        //     var {image1} = this.state;
        //     var eKey = e.key;
        //     var value = e.target.value;
        //     var enter = this.addEnter();
        //     if(eKey === "`"){
        //         var textAria = e.target.value += enter;
        //             this.setState({
        //             textAria: textAria
        //         });
        //     }
        //     console.log(eKey)
            
            
        // }

        addEnter=()=>{
            let result = "";
            return result += `<img src="${this.state.image1}" />`;
        }

        onChangeImage(e){
          // let file = e.target.files[0];
          // if(file === undefined){
            
          // }else{
          //   let reader = new FileReader();
          //   reader.onloadend = () => {
          //       this.setState({
          //         file: file,
          //         valueInput:file.name,
          //         imageName: reader.result
          //       })
          //     }
          //     reader.readAsDataURL(file)
          // }
          this.setState({file : e.target.files[0], imageName: e.target.files[0].name})       

        }

          onDrop=(pictureFiles, pictureDataURLs)=> {
            this.setState({
              pictures: this.state.pictures.concat(pictureFiles),
              image1:pictureDataURLs
            });
          }

        // onChangeImageAdd=(e)=>{
        //   let file = e.target.files[0];
        //   if(file === undefined){
            
        //   }else{
        //     let reader = new FileReader();
        //     reader.onloadend = () => {
        //         this.setState({
        //           image1: reader.result
        //         })
        //       }
        //       reader.readAsDataURL(file)
        //   }
        // }

        callApiFunc = (body) => {
            const formData = new FormData();
            formData.append("file", this.state.file)

          callApi('upload', 'POST', formData).then(res =>{
             // history.goBack()
             // this.setState({redirct : res.status})
             console.log(res.data)
          }) 
        }
        onSubmit(e){
            e.preventDefault();
            var {name,conten,url,textAria,imageName, date, file, err} = this.state;
            var {history} = this.props;
            


            /*if(!file){
              this.setState({err:"Plee Choose Image"})
              return true;
            }*/
             {this.thenGetDownloadUrl()}
            this.setState({start:200})   

      
        }

        thenGetDownloadUrl = () =>{
          var {name,conten,url,textAria,imageName, date} = this.state;
          this.callApiFunc({
            name:name,
            conten:conten,
            textAria:textAria.replace("@", "<span style=color:red>@</span>"), 
            imageName:imageName,
            date:date
          });
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
            var {image1, isTrueLogin, imageName, loading12, date,sivba,name,meauAdd,meau,conten,textAria,err,errName,errConten,errText, valueInput, start, redirct } = this.state
            var notContent = <div style={{color:"#fff"}}><h3>Bạn không có quyền truy cập</h3></div>
            var content = <div>
                            <div className="">
                                {this.state.loading12 === "loading12" ? "" : <Loading />}
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
                                    <form onSubmit={this.onSubmit} className={start === 200 ? "alertCustom" : ""}>
                                        <div className="title-input">
                                            <div className="form-group">
                                                <p className="display-5">About this post</p>
                                                <br/>
                                                <div className="alert alert-primary" role="alert">
                                                  <ErrorOutlineIcon/> Once you choose the project name you can’t change it unless you contact customer support.
                                                </div>
                                                <input type="text" 
                                                       className="form-control input-custom"
                                                       name="date"
                                                       placeholder="false"
                                                       value={Date()}
                                                       onChange={this.onChangeDate}
                                                       style={{border:"none", background:"#fff", boxShadow:"none", fontSize:"16px", color:"#b3c0c8"}}
                                                />
                                                <br/>
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
                                                {/*<input type="text" 
                                                       className="form-control input-custom"
                                                       name="conten"
                                                       placeholder="Conten"
                                                       value={conten}
                                                       
                                                />*/}
                                                <div className="" >
                                                  <select style={{width:"20%", height:"50px", background:"#cce5ff96", border:"none"}} defaultValue={'DEFAULT'} className="form-control input-custom" id="inlineFormCustomSelect" onChange={this.onChangeConten} name="conten">
                                                    <option value="DEFAULT" disabled>section</option>
                                                    <option defaultValue="1">HTML</option>
                                                    <option defaultValue="1">LINUX</option>
                                                    <option defaultValue="2">JAVASCRIPT</option>
                                                    <option defaultValue="3">CSS</option>
                                                  </select>
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
                                                <br/>
                                                <br/>
                                            </div>
                                        </div>
                                        <div style={{ marginRight: "15px" }}>
                                            <ImageUploader
                                              withIcon={false}
                                              withPreview={true}
                                              label=""
                                              buttonText="Upload Images"
                                              onChange={this.onDrop}
                                              imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                                              maxFileSize={1048576}
                                              fileSizeError=" file size is too big"
                                            />
                                          </div>
                                        <div className="title-input">
                                            <div className="form-group">
                                                <p>Text:</p>
                                                <div className="fontSeting">
                                            {/*    <input type="file" onChange={this.onChangeImageAdd}/>*/}
                                                 </div>
                                                
                                                 <textarea 
                                                     className={`form-control text-custom`} 
                                                     id="exampleFormControlTextarea1" 
                                                     rows="15"
                                                     name="textAria"            
                                                     onChange={this.onChangeTextAria}
                                                     onKeyPress={this.key}
                                                     >
                                                 
                                                 </textarea>

                                                 <p style={{color:"red", fontSize:"30px"}}>{`${errText}`}</p>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" 
                                                    value="Create post" 
                                                    className="btn btn-primary"

                                                    >Upload
                                                    <i className="fas fa-check fa-lg check"></i>
                                            </button>
                                        </div>
                                    </form> 
                                    {redirct === 200 ? <div className="alert alert-success custom-suc" role="alert">
                                                        <div className="alert alert-info absub2" role="alert">
                                                            <Redirect to='manager'  /> Continue Add
                                                        </div>
                                                      </div> 
                                                    :
                                                     ""
                                   }
                                    {start === 200 ? <div className="proces"><Proce /></div> : ""}
                                </div>
                            </div>
                        </div>
            setInterval(() => {
                 this.setState({ loading12: "loading12" });
             }, 500);
            return(
            	<div>{isTrueLogin === true ? content : notContent }</div>
            )
            
        }
    }
export default CreatePage;

