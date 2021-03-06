import React, {useEffect} from 'react';
import LeftMenuRecru from '../leftmenu/leftmenurecru';
import TopMenuPage from '../topmenu/topmenupage';
import Footer from '../footer/footer';
import {addOffreAction} from '../../actions/recruteur/offreaction'


function handleSubmit (e) {
			e.preventDefault();
			

			const offre = {
				
 
				user_id: "5f453238fbe7d83e581b23e7",
				categorie_offre_id: e.target.categorie_offre_id.value,
				titre: e.target.titre.value,
				description: e.target.description.value,
				description_profil: e.target.description_profil.value,
				sexe: e.target.sexe.value,
				salaire_min: e.target.salaire_min.value,
				salaire_max: e.target.salaire_max.value,
				experience_min: e.target.experience_min.value,
				experience_max: e.target.experience_max.value,
				competence_requise: e.target.competence_requise.value,
				pays: e.target.pays.value,
				ville: e.target.ville.value,
				date_expiration: e.target.date_expiration.value,

			}

			addOffreAction(offre)
	
}




const Profile = () => {

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
					 		<div className="profile-title">
					 			<h3>Ajouter une offre</h3>
					 	
					 		</div>
					 		<div className="profile-form-edit">

								 
					 			<form onSubmit={handleSubmit} >
					 				<div className="row">
					 					<div className="col-lg-12">
					 						<span className="pf-title">Titre de l'offre</span>
					 						<div className="pf-field">
					 							<input type="text"  name="titre" placeholder="" />
					 						</div>
					 					</div>

					 					<div className="col-lg-12">
					 						<span className="pf-title">Description</span>
					 						<div className="pf-field">
					 							<textarea name="description" ></textarea>
					 						</div>
					 					</div>
										 <div className="col-lg-12">
					 						<span className="pf-title">Description du profil recherché</span>
					 						<div className="pf-field">
					 							<textarea name="description_profil" ></textarea>
					 						</div>
					 					</div>

					 					<div className="col-lg-6">
					 						<span className="pf-title">Catégorie de l'emploi</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Please Select Specialism"  name="categorie_offre_id" className="form-control chosen">
													<option>Marketing</option>
													<option>Informatique</option>
													<option>Art & Culture</option>
													
												</select>
					 						</div>
					 					</div>
					 					
					 					<div className="col-lg-3">
					 						<span  htmlFor="customRange1" className="pf-title">Salaire Min </span>
					 						<div className="pf-field">
												<input type="number"  name="salaire_min" className="custom-range" ></input>
					 						</div>
					 					</div>
										 <div className="col-lg-3">
					 						<span  htmlFor="customRange1" className="pf-title">Salaire Max </span>
					 						<div className="pf-field">
												<input type="number"  name="salaire_max" className="custom-range" ></input>
					 						</div>
					 					</div>
					 					<div className="col-lg-3">
					 						<span className="pf-title"  htmlFor="customRange2">Expérience réquise Min (mois)</span>
					 						<div className="pf-field">
												<input type="number"  name="experience_min" className="custom-range" ></input>
					 							
					 						</div>
					 					</div>
										 <div className="col-lg-3">
					 						<span className="pf-title"  htmlFor="customRange2">Expérience réquise Max (mois)</span>
					 						<div className="pf-field">
												<input type="number"  name="experience_max" className="custom-range" ></input>
					 							
					 						</div>
					 					</div>
					 		
					 					<div className="col-lg-6">
					 						<span className="pf-title">Sexe</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Please Select Specialism"    name="sexe" className="form-control chosen">
													<option>H/F</option>
													<option>H</option>
													<option>F</option>
												
												</select>
					 						</div>
					 					</div>
					 					
					 					
					 					<div className="col-lg-12">
					 						<span className="pf-title">Date d'expiration de l'offre</span>
					 						<div className="pf-field">
					 							<input type="date"   name="date_expiration" className="form-control datepicker" />
					 						</div>
					 					</div>
					 					<div className="col-lg-12">
					 						<span className="pf-title">Compétences réquises</span>
					 						<div className="pf-field">
						 						<textarea name="competence_requise" id="" cols="30" rows="5"></textarea>
											</div>
					 					</div>
										 <div className="col-lg-6">
					 						<span className="pf-title">Pays de l'offre</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Please Select Specialism"  name="pays" className=" form-control chosen">
													<option>Gabon</option>
													<option>Benin</option>
													
												</select>
					 						</div>
					 					</div>
										 <div className="col-lg-6">
					 						<span className="pf-title">Ville de l'offre</span>
					 						<div className="pf-field">
					 							<input type="text"  name="ville" placeholder="" />
					 						</div>
					 					</div>

										 <div className="col-lg-12">
					 						<button type="submit" >Ajouter</button>
					 					</div>
					 					

					 				</div>
					 			</form>
					 		</div>
		
					 	</div>
					</div>
				 </div>
			</div>
			<br/>
			<Footer/>
		</div>
	</section>



    </>
    )
}

export default Profile;