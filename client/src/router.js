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
		path:"/5e104b921de3cc0017f7ca42-yuhftb-juyx-rsezxzd-jytv-8714762ghj7g",
		exact:true,
		main: () => <ManagerPage />
	},
	{
		path:"/56grfg4543-75egr653-753dffs3-786ygh-6ygfdrg5-785g456571-dffxr7sszsv-7645ff",
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


