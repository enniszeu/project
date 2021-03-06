import React from 'react';
import callApi from './../../utils/apicaller';
import ContactManager from '../../Components/Minrec/ContectManager';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Loading from '../.././Loading/Loading';
import {
  Link,
  Redirect
} from "react-router-dom";
import axios from 'axios';



class ManagerPage extends React.Component{

	constructor(props){
	        super(props);

	        this.state = {
	        	meauAdd:"",
	        	meau:"",
	            posts : [],
	            sivba:"",
	            loading12:"",
	            showdelete:true,
	            isTrueLogin:false
	        }
	    }


	componentDidMount(){
		 callApi('manager', 'GET', null).then(res =>{
			this.setState({
				posts : res.data
			})
			console.log(res.data)
		})

		const cookie = document.cookie
		 if(cookie === "0fe8cf3262d72131ec5d304cd3d8190b"){
		 	this.setState({isTrueLogin : true})
		 }

	}

	onDelete = (id) =>{

		var {posts} = this.state;
	   	if(confirm('ban co chan chan muon xoa ? ')){ // eslint-disable-line
	   		callApi(`delete/${id}`, 'GET', null).then(res =>{
	   			if( res.status === 200){
	   				var index = this.findIndex(posts, id);
	   				if(index !== -1){
	   					posts.splice(index, 1);
	   					this.setState({
	   						posts:posts
	   					})
	   				}
	   			}
			})
	   	}
		
	}

	findIndex = (posts, id) =>{
		var result = -1;
			posts.forEach((post, index)=>{
				if(post._id === id){
					result = index;
				}
			})
		return result;
	}
	meau = () =>{
		this.setState({ 
			meauAdd: "meauAdd",
			meau:"meau" ,
			sivba:"sivba"
		});
	}
	close = () =>{
		this.setState({ 
			meauAdd: "",
			meau:"",
			sivba:""
		});
	}

    render(){

    	var {posts, sivba, html, loading12, meau, meauAdd, isTrueLogin} = this.state
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
							<div className="conten-mana meauAdd" >
								<div className="nav-title">
									<div className={`meau-click ${meau}`} onClick={this.meau} >{/*onclick="meau()"*/}
										<MenuIcon />
									</div>
									<div className={`close ${this.state.meauAdd}`} onClick={this.close} >{/*onclick="closes()"*/}
										<CloseIcon />
									</div>
									<div className="admin">
										<img src={this.props.picture} />
									</div>
									<h3>Manager Post</h3>

								</div>
								<table className="table table-dark">
								  <thead>
								    <tr>
								      <th scope="col">Stt</th>
														      <th scope="col">Bài Đăng</th>
								      <th scope="col" >Chủ Đề</th>
								      <th scope="col">
								      	Chỉnh Sữa
								      </th>
								    </tr>
								  </thead>
								  <tbody>
								   {this.showtable(posts)}
								  </tbody>
								</table>
								</div>
							</div>
			           </div>
			var notContent = <div style={{color:"#fff"}}><h3>Bạn không có quyền truy cập</h3></div>
    	setInterval(() => {
	         this.setState({ loading12: "loading12" });
	     }, 1000);
        return(
        	<div>{isTrueLogin === true ? content : notContent}</div>
        )
    }

   
    showtable = (posts) =>{
        var resule = null;
            resule = posts.map((post, index)=>{
                return (
                    <tr key={index}>
				      <th scope="row">{index + 1}</th>
				      
				      <td><img src={post.filePath} width="50" height="50" /> {post.name}</td>
				      <td className="none-td">{post.conten}</td>

				      <td className="showdelete"><button type="button" 
				      			  className="btn delete-button"
				      			  onClick={()=> this.onDelete(post._id)}
				      			  >
				      			  	<DeleteIcon/>
				      		</button>
				      		<Link to={`/upload/${post._id}`} 
				      			  className="btn edit-button"
				      			  >
				      			  	<EditIcon/>
				      		</Link>
				      </td>
				    </tr>
                    )
            })
        return resule;
    }

}

export default ManagerPage;