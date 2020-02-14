import React from 'react';
import '../public/style/manager.css';
import callApi from './../../utils/apicaller';
import ContactManager from '../../Components/Minrec/ContectManager';
import {storage} from './../../firebaseConfig/firebaseConfig';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {
  Link
} from "react-router-dom";



class ManagerPage extends React.Component{

	constructor(props){
	        super(props);

	        this.state = {
	        	meauAdd:"",
	        	meau:"",
	            posts : [],
	            sivba:"",
	            loading12:"",
	            showdelete:true
	        }
	    }

	componentDidMount(){
		callApi('manager', 'GET', null).then(res =>{
			this.setState({
				posts : res.data
			})
		})
	}

	onDelete = (id, url) =>{

		var {posts} = this.state;
	   	if(confirm('ban co chan chan muon xoa ? ')){ // eslint-disable-line
	   		var desertRef = storage.refFromURL(url);
	   		desertRef.delete().then(()=> {
			  // File deleted successfully
			}).catch((err)=> {
			  console.log(err)
			});
			

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
			meau:"" 
		});
	}
	showDelete= () =>{
		if(this.state.showdelete === true){
			this.setState({ 
			showdelete:false
		});
		}else{
			this.setState({ 
			showdelete:true
		});
		}
	}

    render(){

    	var {posts, sivba, html, loading12} = this.state
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
							<Link to="/">
								<i className="fab fa-airbnb fa-2x"></i>
							</Link>
						</div>
						<ContactManager />
					</div>
					<div className={`conten-mana ${this.state.meauAdd}`} >
						<div className="nav-title">
							<div className={`meau-click ${this.state.meau}`} onClick={this.meau} >{/*onclick="meau()"*/}
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
												      <th scope="col">Post</th>
						      <th scope="col" >Theme</th>
						      <th scope="col">
						      	<input type="checkbox" id="switch" onClick={this.showDelete} /> <label htmlFor="switch">Toggle</label>
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
        )
    }

   
    showtable = (posts) =>{
        var resule = null;
            resule = posts.map((post, index)=>{
                return (
                    <tr key={index}>
				      <th scope="row">{index + 1}</th>
				      
				      <td><img src={post.url} width="50" height="50" /> {post.name}</td>
				      <td className="none-td">{post.conten}</td>

				      <td className={this.state.showdelete === true ? "delete-mana ": "showdelete" }><button type="button" 
				      			  className="btn delete-button"
				      			  onClick={()=> this.onDelete(post._id, post.url)}
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