import React from 'react';
import HomePage from './page/pageHome/HomePage';
import LoginPage from './page/pageLogin/LoginPage';
import PostPage from './page/pagePost/PostPage';
import ManagerPage from './page/pageManager/ManagerPage';
import CreatePage from './page/pageCreate/CreatePage';
import EditPage from './page/pageEdit/EditPage';
import ViewPage from './page/pageView/ViewPage';
import NotFoud from './page/notFoud/NotFoud';


const routes = [
	{
		path:"/",
		exact:true,
		main: () => <HomePage />
	},
	{
		path:"/login",
		exact:true,
		main: () => <LoginPage />
	},
	{
		path:"/post",
		exact:true,
		main: () => <PostPage />
	},
	{
		path:"/manager",
		exact:true,
		main: () =><ManagerPage />
	},
	{
		path:"/create",
		exact:true,
		main: ({history}) => <CreatePage history={history} />
	},
	{
		path:"/upload/:id",
		exact:true,
		main: ({match, history}) => <EditPage match={match} history={history} />
	},
	{
		path:"/post/:id",
		exact:true,
		main: ({match})=> <ViewPage match={match} />
	},
	{
		path:"",
		exact:true,
		main: () => <NotFoud />
	}
]



export default routes;


