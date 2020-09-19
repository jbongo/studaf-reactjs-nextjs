import React from 'react'

// le .default permet d'obtenir l'auto complete des fonction axios
const axios = require('axios').default;

axios.defaults.baseURL = process.env.BASE_URI || 'http://127.0.0.1:4000';
const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjY1YWNkMDhjYTIwMTFlMTA1MmEzZWIiLCJpYXQiOjE2MDA1MzYzNzgsImV4cCI6MTYwMDU0MzU3OH0.F7_vzpOjHmYAueYDWcqeu2407tQdKFvMEieRoUHvbmc";
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


const addOffreAction = (offre) =>{

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


const getAllOffreAction = () =>{

    axios.get('/recruteur/offres') 
            .then((res)=> {
                // console.log(offre.data);
                return res.data;
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