import React from 'react';
import LeftMenuRecru from '../leftmenu/leftmenurecru';
import TopMenuPage from '../topmenu/topmenupage';
import LeftMenuCandi from '../leftmenu/leftmenucandi';
import Footer from '../footer/footer';


const ChangePassword = () => {

    return (
        <>
        <TopMenuPage/>
        <section className="overlape">
		<div className="block no-padding">
			<div data-velocity="-.1"  className="parallax scrolly-invisible no-parallax"></div>
			<div className="container fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="inner-header">
							<h3>Bienvenue Toti TATA</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div className="block no-padding">
			<div className="container">
				 <div className="row no-gape">
		<LeftMenuCandi/>
				 	<div className="col-lg-9 column">
				 		<div className="padding-left">
					 		<div className="profile-title">
					 			<h3>Mon Profil</h3>
					 			<div className="upload-img-bar">
					 				<span className="round"><img src="http://placehold.it/140x140" alt="" /><i>x</i></span>
					 				<div className="upload-info">
					 					<a href="#" title="">Téléverser</a>
					 					<span>Photo de couverture .jpg & .png</span>
					 				</div>
					 			</div>
					 			<div className="upload-img-bar">
					 				<span className="round"><img src="http://placehold.it/140x140" alt="" /><i>x</i></span>
					 				<div className="upload-info">
					 					<a href="#" title="">Téléverser</a>
					 					<span>Photo de profil .jpg & .png</span>
					 				</div>
					 			</div>
					 		</div>
					 		<div className="profile-form-edit">
					 			<form>
					 				<div className="row">
					 					<div className="col-lg-6">
					 						<span className="pf-title">Nom</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder=" TUFAN" name="nom" className="form-control"/>
					 						</div>
					 					</div>
										 <div className="col-lg-6">
					 						<span className="pf-title">Prénom (s)</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="Ali" name="prénom" className="form-control"/>
					 						</div>
					 					</div>
					 					<div className="col-lg-12">
					 						<span className="pf-title">Poste</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="UX / UI Designer" name="poste"className="form-control" />
					 						</div>
					 					</div>
					 					
					 					
					 					<div className="col-lg-6">
					 						<span className="pf-title">Expérience</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Allow In Search" className="chosen form-control" name="expérience">
													<option>0-2 ans</option>
													<option>2-4 ans</option>
													<option> Sup à 4 ans</option>
												</select>
					 						</div>
					 					</div>
										 
					 					<div className="col-lg-6">
					 						<span className="pf-title">Âge</span>
					 						<div className="pf-field">
											 <input type="text" placeholder="25" className="form-control" name="date_naissance"/>
					 						</div>
					 					</div>
					 				
					 			
					 					<div className="col-lg-6">
					 						<span className="pf-title">Pays</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Please Select Specialism" className="chosen form-control" name=" paie">
													<option>Gabon</option>
													<option>Mali</option>
												</select>
					 						</div>
					 					</div>
										 <div className="col-lg-6">
					 						<span className="pf-title">Ville</span>
					 						<div className="pf-field">
											 <input type="text" placeholder="" name="ville" className="form-control"/>
					 						</div>
					 					</div>
					 					
					 					<div className="col-lg-12">
					 						<span className="pf-title">Description</span>
					 						<div className="pf-field">
					 							<textarea className="form-control" name="description"></textarea>
					 						</div>
					 					</div>
					 					<div className="col-lg-12">
					 						<button type="submit">Enregistrer</button>
					 					</div>
					 				</div>
					 			</form>
					 		</div>
					 		<div className="social-edit">
					 			<h3>Réseaux sociaux</h3>
					 			<form>
					 				<div className="row">
					 					<div className="col-lg-6">
					 						<span className="pf-title">Facebook</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.facebook.com/SG" name="facebook" className="form-control"/>
					 							<i className="la la-facebook"></i>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Twitter</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.twitter.com/SG" name="twitter" className="form-control"/>
					 							<i className="la la-twitter"></i>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Google</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.google-plus.com/SG" name="google" className="form-control"/>
					 							<i className="la la-google"></i>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Linkedin</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.Linkedin.com/SG" name="linkedin" className="form-control"/>
					 							<i className="la la-linkedin"></i>
					 						</div>
					 					</div>
					 				</div>
					 			</form>
					 		</div>
					 		<div className="contact-edit">
					 			<h3>Contact</h3>
					 			<form>
					 				<div className="row">
					 					<div className="col-lg-4">
					 						<span className="pf-title">Numéro de téléphone</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="+290 538 963 " name="contact1" className="form-control"/>
					 						</div>
					 					</div>
					 					<div className="col-lg-4">
					 						<span className="pf-title">Email</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="demo@jobhunt.com" name="contact2" className="form-control"/>
					 						</div>
					 					</div>

					 					<div className="col-lg-12">
					 						<button type="submit">Enregistrer</button>
					 					</div>
					 				</div>
					 			</form>
					 		</div>


							 <div className="contact-edit" id="ci">
					 			<h3>Changement du mot de passe</h3>
								 <form>
						 				<div className="row">
						 					<div className="col-lg-6">
						 						<span className="pf-title">Ancien mot de passe</span>
						 						<div className="pf-field">
						 							<input type="password" className="form-control"/>
						 						</div>
						 						<span className="pf-title">Nouveau mot de passe</span>
						 						<div className="pf-field">
						 							<input type="password" className="form-control"/>
						 						</div>
						 						<span className="pf-title">Confirmez le mot de passe</span>
						 						<div className="pf-field">
						 							<input type="password" className="form-control"/>
						 						</div>
						 						<button type="submit">Modifier</button>
						 					</div>
						 					<div className="col-lg-6">
						 						<i className="la la-key big-icon"></i>
						 					</div>
						 				</div>
						 			</form>
					 		</div>
					 	</div>
					</div>
				 </div>
			</div>

			<Footer/>
		</div>
	</section>







    </>
    )
}

export default ChangePassword;