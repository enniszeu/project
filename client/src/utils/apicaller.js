import axios from 'axios';
import * as Config from './../contants/Config';

export default function callApi(endpoin, method = 'GET', body){
	return axios({
    		method:method,
    		url:`${Config.API_URL}/${endpoin}`,
    		data:body
    	}).catch(err => {
    		console.log(err)
    	})
}