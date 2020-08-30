import React from 'react'

// le .default permet d'obtenir l'auto complete des fonction axios
const axios = require('axios').default;

axios.defaults.baseURL = 'http://127.0.0.1:4000';
const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjQ1MzIzOGZiZTdkODNlNTgxYjIzZTciLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE1OTg2MzMwNjcsImV4cCI6MTU5ODY0MDI2N30.lizSwhz8285bLgaRoIWvzCibJHq26ExkuN9eEoPQ4qk"
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const addOffreAction = (offre) =>{

// Ajout d'une offre
axios.post('/recruteur/offre/add', offre) 
        .then((res)=> {
            console.log(res);
            return res;
        })
        .catch((err) => {
            console.log(err);
            return err;
        })


}


// liste des offres chez le recruteur


const getAllOffreAction = () => {
    
    axios.get('/recruteur/offres') 
        .then((res)=> {
            console.log(res);
            return res;
        })
        .catch((err) => {
            console.log(err);
            return err;
        })

}

module.exports = {
    addOffreAction,
    getAllOffreAction
} 