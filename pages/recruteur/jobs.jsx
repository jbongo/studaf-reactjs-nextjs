import React, {useEffect, useState} from 'react';
import LeftMenuRecru from '../leftmenu/leftmenurecru';
import TopMenuPage from '../topmenu/topmenupage';

import {getAllOffreAction} from '../../actions/recruteur/offreaction'


// le .default permet d'obtenir l'auto complete des fonction axios
const axios = require('axios').default;

axios.defaults.baseURL = 'http://127.0.0.1:4000';
const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjQ1MzIzOGZiZTdkODNlNTgxYjIzZTciLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE1OTg5NjkzMjQsImV4cCI6MTU5ODk3NjUyNH0.xmwPnnzppSBDFMgt6nDk35Ecry4HU4N8VMrLcOjcRog"
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';




const Jobs = () => {


	const [offres, setOffres] = useState([]);

	useEffect(() => {

		axios.get('/recruteur/offres') 
            .then((res)=> {
                // console.log(offre.data);
                setOffres(res.data);
            })
            .catch((err) => {
                console.log(err);
                return err;
			})
			

		// const offres = getAllOffreAction();
		// console.log(offres);

		// setOffres(offres);

	});
		
	
    return (
        <>
        <TopMenuPage/>

        <section>
		<div className="block no-padding">
			<div className="container">
				 <div className="row no-gape">
                    <LeftMenuRecru/>
				 	<div className="col-lg-9 column">
				 		<div className="padding-left">
					 		<div className="manage-jobs-sec">
					 			<h3>Gestion des offres d'emplois</h3>
					 			<div className="extra-job-info">
						 			<span><i className="la la-clock-o"></i><strong>9</strong> Offres</span>
						 			<span><i className="la la-file-text"></i><strong>20</strong> Candidatures</span>
						 			<span><i className="la la-users"></i><strong>18</strong> Offres actives </span>
						 		</div>
						 		<table>
						 			<thead>
						 				<tr>
						 					<td>Titre</td>
						 					<td>Candidatures</td>
						 					<td>Date de création et expiration</td>
						 					<td>Statut</td>
						 					<td>Action</td>
						 				</tr>
						 			</thead>
						 			<tbody>

										 {offres.map((offre) => (
											<tr key={offre.id}>
						 					<td>
						 						<div className="table-list-title">
						 							<h3><a href="#" title="">{offre.titre}</a></h3>
						 							<span><i className="la la-map-marker"></i>{offre.ville}, {offre.pays}</span>
						 						</div>
						 					</td>
						 					<td>
						 						<span className="applied-field">3+ Candidatures</span>
						 					</td>
						 					<td>
						 						<span> 
													 {offre.date_creation} ,
												
												
											</span><br />
						 						<span>{offre.date_expiration}</span>
						 					</td>
						 					<td>
						 						<span className="status active">Active</span>
						 					</td>
						 					<td>
						 						<ul className="action_job">
						 							<li><span>Afficher</span><a href="#" title=""><i className="la la-eye"></i></a></li>
						 							<li><span>Modifier</span><a href="#" title=""><i className="la la-pencil"></i></a></li>
						 							<li><span>Supprimer</span><a href="#" title=""><i className="la la-trash-o"></i></a></li>
						 						</ul>
						 					</td>
						 				</tr>
										 ))}
						 				
										
						 				

						 			</tbody>
						 		</table>
					 		</div>
					 	</div>
					</div>
				 </div>
			</div>
		</div>
	</section>

    </>
    )
}

export default Jobs;