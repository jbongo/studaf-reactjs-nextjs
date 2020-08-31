import React from 'react';
import LeftMenuRecru from '../leftmenu/leftmenurecru';
import TopMenuPage from '../topmenu/topmenupage';


const Profile = () => {

    return (
        <>
        <TopMenuPage/>

        <section className="overlape">
		<div className="block no-padding">
			<div className="test" data-velocity="-.1"  className="parallax scrolly-invisible no-parallax"></div>
			<div className="container fluid">
				<div className="row">
					<div className="col-lg-12">
						<div className="inner-header">
							<h3>Bienvenue TOTAL GABON</h3>
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
			<LeftMenuRecru/>
				 	<div className="col-lg-9 column">
				 		<div className="padding-left">
					 		<div className="profile-title" id="mp">
					 			<h3>Profil</h3>
					 			<div className="upload-img-bar">
					 				<span><img src="http://placehold.it/160x138" alt="" /><i>x</i></span>
					 				<div className="upload-info">
					 					<a href="#" title="">Téléverser</a>
					 					<span>Photo de couverture .jpg & .png</span>
					 				</div>
					 			</div>
					 			<div className="upload-img-bar">
					 				<span><img src="http://placehold.it/160x138" alt="" /><i>x</i></span>
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
					 						<span className="pf-title">Nom de l'entreprise</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="TOTAL GABON" name="nom_entreprise" className="form-control"/>
					 						</div>
					 					</div>
					 			
					 					<div className="col-lg-3">
					 						<span className="pf-title">Date de création</span>
					 						<div className="pf-field">
					 							<input type="date" placeholder="1991" name="date_creation_entreprise" className="form-control"/>
					 						</div>
					 					</div>
					 					<div className="col-lg-3">
					 						<span className="pf-title">Nombre de salariés</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="100 - 201" name="nb_salarie" className="form-control"/>
					 						</div>
					 					</div>
					 					
					 					<div className="col-lg-12">
					 						<span className="pf-title">Categories</span>
											 <div className="pf-field">
					 							<textarea type="catégorie" className="form-control" name="catégorie"></textarea>
					 						</div>
					 					</div>
					 					<div className="col-lg-12">
					 						<span className="pf-title">Description</span>
					 						<div className="pf-field">
					 							<textarea type="description" className="form-control" name="description"></textarea>
					 						</div>
					 					</div>
					 					<div className="col-lg-12">
					 						<button type="submit">Modifier</button>
					 					</div>
					 				</div>
					 			</form>
					 		</div>
					 		<div className="social-edit"  id="sn">
					 			<h3>Réseaux sociaux</h3>
					 			<form>
					 				<div className="row">
					 					<div className="col-lg-6">
					 						<span className="pf-title">Facebook</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.facebook.com/total" name="facebook" className="form-control"/>
					 							<i className="la la-facebook"></i>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Twitter</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.twitter.com/total" name="twitter" className="form-control"/>
					 							<i className="la la-twitter"></i>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Google</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.google-plus.com/total" name="google" className="form-control"/>
					 							<i className="la la-google"></i>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Linkedin</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.Linkedin.com/total" name="linkedin" className="form-control"/>
					 							<i className="la la-linkedin"></i>
					 						</div>
					 					</div>
					 				</div>
					 			</form>
					 		</div>
					 		<div className="contact-edit" id="ci">
					 			<h3>Contact</h3>
					 			<form>
					 				<div className="row">
					 					<div className="col-lg-4">
					 						<span className="pf-title">Télephone</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="+220 538 963 58 96" name="contact1" className="form-control"/>
					 						</div>
					 					</div>
					 					<div className="col-lg-4">
					 						<span className="pf-title">Email</span>
					 						<div className="pf-field">
					 							<input type="email" placeholder="demo@total.com" className="form-control" name="contact2"/>
					 						</div>
					 					</div>
					 					<div className="col-lg-4">
					 						<span className="pf-title">Site web</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder="www.total.com" className="form-control" name="site_web"/>
					 						</div>
					 					</div>
					 					<div className="col-lg-6">
					 						<span className="pf-title">Pays</span>
					 						<div className="pf-field">
					 							<select data-placeholder="Please Select Specialism" className="chosen form-control" name="pays">
													<option>Gabon</option>
													<option>Côte d'Ivoire</option>
													<option>Ghana</option>
													
												</select>
					 						</div>
					 					</div>
					 					{/* <div className="col-lg-6">
					 						<span className="pf-title"></span>
					 						<div className="pf-field">
					 							<select data-placeholder="Please Select Specialism" className="chosen">
													<option>Web Development</option>
													<option>Web Designing</option>
													<option>Art & Culture</option>
													<option>Reading & Writing</option>
												</select>
					 						</div>
					 					</div> */}
					 					
					 					<div className="col-lg-12">
					 						<button type="submit">Modifier</button>
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
		</div>
	</section>

    </>
    )
}

export default Profile;