import React from 'react';
import '../public/style/manager.css';
// import Loading from '../../Components/loader/Loading';
import callApi from './../../utils/apicaller';
import ContactManager from '../../Components/Minrec/ContectManager'
import {storage} from './../../firebaseConfig/firebaseConfig'
import {
  Link
} from "react-router-dom";



class ManagerPage extends React.Component{

	constructor(props){
	        super(props);

	        this.state = {
	        	html:"",
	        	meauAdd:"",
	        	meau:"",
	            posts : []
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

    	var {posts} = this.state
    	 // setInterval(() => {
	     //         this.setState({ html: "html" });
	     //     }, 1000);

    		    	

        return(
        	<div>
        		{/*<Loading />*/}
	        	<div className={` wapperManager ${this.state.html}`}>
	           		<div className="side-nav" id="side-nav">
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
								<i className="fas fa-bars fa-2x"></i>
							</div>
							<div className={`close ${this.state.meauAdd}`} onClick={this.close} >{/*onclick="closes()"*/}
								<i className="fas fa-times"></i>
							</div>
							<h3>Manager Post</h3>
						</div>
						<table className="table table-dark">
						  <thead>
						    <tr>
						      <th scope="col">Stt</th>
						      <th scope="col">Name</th>
						      <th scope="col">Conten</th>
						      <th scope="col">Image</th>
						      <th scope="col">Manager</th>
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
				      <td>{post.name}</td>
				      <td>{post.conten}</td>
				      <td>
				      	<img src={post.url} width="50" height="50" />
				      </td>
				      <td><button type="button" 
				      			  className="btn "
				      			  onClick={()=> this.onDelete(post._id, post.url)}
				      			  >
				      			  	<i className="fas fa-trash fa-lg custom-icon"></i>
				      		</button>
				      		<Link to={`/upload/${post._id}`} 
				      			  className="btn"
				      			  >
				      			  	<i className="fas fa-pencil-alt fa-lg custom-icon-edit"></i>
				      		</Link>
				      </td>
				    </tr>
                    )
            })
        return resule;
    }

}

export default ManagerPage;