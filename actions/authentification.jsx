import React from 'react'
import {useRouter} from 'next/router'

import Cookies from 'universal-cookie'


// le .default permet d'obtenir l'auto complete des fonction axios
const axios = require('axios').default;
const cookies = new Cookies()

axios.defaults.baseURL = process.env.BASE_URI || 'https://studaf-node.herokuapp.com';
// axios.defaults.baseURL = process.env.BASE_URI || 'http://127.0.0.1:4001';
const AUTH_TOKEN = "Bearer "+cookies.get('token');
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


async function inscriptionAction  (data, callback) {

	// const router = useRouter();

 
     axios.post('/register', data) 
            .then((res)=> {
               
                callback(res)
              
            })
            .catch((err) => {
                console.log(err);
                callback(err)

            })

         


}


const connexionAction = (data, callback) =>{

    axios.post('/login',data) 
            .then((res)=> {
                callback(res)
            })
            .catch((err) => {
                console.log(err);
                callback(err)
            })


    }



const isAuth = (callback) => {

    
    const role = cookies.get('role');

        if(role != null) {
            callback({
                value : true,
                role: role
            })
        }else{
            
            callback( {
                value : false,
                role: null
            })

        }

}





module.exports = {
    inscriptionAction,
    connexionAction  ,
    isAuth
} 