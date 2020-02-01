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
                imageName:"",
                progress:0,
                err:"",
                textAria:"",
                errName:"",
                errConten:"",
                errText:"",
                acess:"",
                acessing:""        
            }

            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeConten = this.onChangeConten.bind(this);
            this.onChangeImage = this.onChangeImage.bind(this);
            this.onChangeTextAria = this.onChangeTextAria.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
            this.handleUpload = this.handleUpload.bind(this);
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

        handleUpload(e){

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
                    });
                });
                
            }else{
                this.setState({err:"Plee Choose Image"})
            }
            

        }

        onSubmit(e){
            e.preventDefault();
            var {name,conten,textAria,url,imageName} = this.state;
            var {history} = this.props;

            
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
                                        imageName:imageName
                                    }).then(res =>{

                                        history.goBack('/');

                                    })
                                    
                                }

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
            var { url,html,meauAdd,meau,name,conten,textAria,err,progress,errName,errConten,errText,acess,acessing } = this.state
        

        	 setInterval(() => {
	             this.setState({ html: "html" });
	         }, 1000);
            return(
            	<div>
            		<Loading />
                        <div className={` wapperManager ${html}`}>
                            <div className="side-nav" id="side-nav">
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
                                        <i className="fas fa-bars fa-2x"></i>
                                    </div>
                                    <div className={`close ${this.state.meauAdd}`} onClick={this.close} >{/*onclick="closes()"*/}
                                        <i className="fas fa-times"></i>
                                    </div>
                                    <h3>Create Post</h3>
                                </div>
        	                	
                                <form onSubmit={this.onSubmit}>
                                     <div className="form-group">
                                        <label> Anh Bài Viết </label>
                                        <div className="row"  >
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                        <img src={url || "http://blogdep.mywibes.com/images/d360749ebc4d4b4bd07e42f40ef6a79c.gif" } onClick={this.imageUp} className="imageUp"
                                                        />
                                                        <div className="image-add" onClick={this.imageUp}>{`${acessing || " Click Để Thêm Anh "} `}</div>
                                                        <div type="button" className="button-add" onClick={this.handleUpload}> {`${acess || " Xác Nhận Thêm "} `} </div>
                                                        <div className="progress">
                                                          <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{width:`${progress}%`}}>{progress}%</div>
                                                        </div>
                                                <input className="form-control file imageFile"
                                                       type="file" 
                                                       onChange={this.onChangeImage}
                                                       id="imageInput"
                                                    />
                                            </div>
                                            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                                <p>{`Tiêu Đề : ${name}`}</p>
                                                <p>{`Nội dung : ${conten}`}</p>
                                                <br/>
                                                <p style={{color:"red", fontSize:"30px"}}>{`${err}`}</p>
                                                
                                            </div>
                                            <br/>
                                            
                                           
                                            {/*<p>{`uploading ${progress} %`}</p>*/}
                                            <br/>
                                           
                                  
                                            <br/>
                                            
                                            
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Name:</label>
                                        <input type="text" 
                                               className="form-control input-custom"
                                               name="name"
                                               value={name}
                                               onChange={this.onChangeName}
                                        />
                                        <p style={{color:"red", fontSize:"30px"}}>{`${errName}`}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Conten:</label>
                                        <input type="text" 
                                               className="form-control input-custom"
                                               name="conten"
                                               value={conten}
                                               onChange={this.onChangeConten}
                                        />
                                        <p style={{color:"red", fontSize:"30px"}}>{`${errConten}`}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Text:</label>
                                         <textarea 
                                             className="form-control text-custom" 
                                             id="exampleFormControlTextarea1" 
                                             rows="6"
                                             name="textAria"
                                             value={textAria}
                                             onChange={this.onChangeTextAria}
                                             >
                                         </textarea>
                                         <p style={{color:"red", fontSize:"30px"}}>{`${errText}`}</p>
                                    </div>
                                   

                                    <div className="form-group">
                                        <button type="submit" 
                                                value="Create post" 
                                                className="btn btn-primary"

                                                >Lưu Lại
                                                <i className="fas fa-check fa-lg check"></i>
                                        </button>

                                        <Link to="/manager" 
                                              className="btn btn-success"
                                              style={{marginLeft:"20px"}}
                                              >Tre Lai
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

