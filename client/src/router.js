import React from 'react';
import HomePage from './page/pageHome/HomePage';
import ManagerPage from './page/pageManager/ManagerPage';
import CreatePage from './page/pageCreate/CreatePage';
import EditPage from './page/pageEdit/EditPage';
import NotFoud from './page/notFoud/NotFoud';


const routes = [
	{
		path:"/",
		exact:true,
		main: () => <HomePage />
	},
	{
		path:"/manager",
		exact:true,
		main: () => <ManagerPage />
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
		path:"",
		exact:true,
		main: () => <NotFoud />
	}
]



export default routes;


