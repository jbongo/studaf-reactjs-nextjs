import React , {useState} from 'react'
import {useRouter} from 'next/router'
// import SweetAlert from 'sweetalert2-react';
import {Alert, Button} from 'react-bootstrap/'


import TopMenuPage from './topmenu/topmenupage'
import Link from 'next/link';

import {inscriptionAction} from '../actions/authentification'



const inscription = () => {

	const [showalertsuccess, setShowalertsuccess] = useState(false);
	const [showalerterror, setShowalerterror] = useState(false);
	const router = useRouter();



	function handleSubmit  (e)  {
	
		e.preventDefault();
		
		
		const data = {
		
			type: e.target.type.value,
			password: e.target.password.value,
			email: e.target.email.value,
		}
		
		inscriptionAction(data, (result) => {

			if(result.status == 201){
				setShowalertsuccess(true);
			}else if(result.status == 200){
				setShowalerterror(true);

			}

			
		})
		
		 ;
		
		
		
	
	}

	return(
    
    <>
<TopMenuPage/>
    
       <section>
		<div className="block no-padding  gray">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="inner2">
							<div className="inner-title2">
								<h3>Inscription</h3>
								{/* <span>Keep up to date with the latest news</span> */}
							</div>
							{/* <div className="page-breacrumbs">
								<ul className="breadcrumbs">
									<li><a href="#" title="">Home</a></li>
									<li><a href="#" title="">Pages</a></li>
									<li><a href="#" title="">Register</a></li>
								</ul>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section>
		<div className="block remove-bottom">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="account-popup-area signup-popup-box static">
							<div className="account-popup">
								<h3>Créez Votre Compte</h3>
								{/* <span>Lorem ipsum dolor sit amet consectetur adipiscing elit odio duis risus at lobortis ullamcorper</span> */}


								<div className="alerte">
								<Alert show={showalertsuccess} variant="success">
										<Alert.Heading>Félicitation votre compte a été crée.</Alert.Heading>
										<p>
										
										</p>
										<hr />
										<div className="d-flex justify-content-end">
										<Button onClick={() => router.push('/connexion')} variant="outline-success">
											Je me connecte
										</Button>
										</div>
									</Alert>

									<Alert show={showalerterror} variant="danger">
										<Alert.Heading>Désolé cette adresse mail existe déjà !</Alert.Heading>
										<p>
										
										</p>
										<hr />
										<div className="d-flex justify-content-end">
										<Button onClick={() => setShowalerterror(false)} variant="outline-danger">
											fermer
										</Button>
										</div>
									</Alert>

									
								</div>


								
								<form onSubmit={handleSubmit}>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="radio" name="type" id="type1"required  value="candidat"/>
										<label className="form-check-label" htmlFor="type1">Je suis candidat</label>
									</div>
									<div className="form-check form-check-inline">
										<input className="form-check-input" type="radio" name="type" id="type2" required value="recruteur"/>
										<label className="form-check-label" htmlFor="type2">Je suis recruteur</label>
									</div>
									<br/><hr/>

									<div className="cfield">
										<input type="email" name="email" placeholder="Email" required />
										<i className="la la-envelope-o"></i>
									</div>
								
									<div className="cfield">
										<input type="password" name="password" placeholder="Mot de passe" required />
										<i className="la la-key"></i>
									</div>
									
								
									
									<button type="submit">Enregistrer</button>
								</form>
								<div className="extra-login">
											
								<span><Link href="/connexion" ><a> J'ai déjà un compte </a></Link></span>

									
									<div className="login-social">
										<a className="fb-login" href="#" title=""><i className="fa fa-facebook"></i></a>
										<a className="li-login" href="#" title=""><i className="fa fa-linkedin"></i></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>





{/* 
<div className="account-popup-area signup-popup-box">
	<div className="account-popup">
		<span className="close-popup"><i className="la la-close"></i></span>
		<h3>Sign Up</h3>
		<div className="select-user">
			<span>Candidate</span>
			<span>Employer</span>
		</div>
		<form>
			<div className="cfield">
				<input type="text" placeholder="Username" />
				<i className="la la-user"></i>
			</div>
			<div className="cfield">
				<input type="password" placeholder="********" />
				<i className="la la-key"></i>
			</div>
			<div className="cfield">
				<input type="text" placeholder="Email" />
				<i className="la la-envelope-o"></i>
			</div>
			<div className="dropdown-field">
				<select data-placeholder="Please Select Specialism" className="chosen">
					<option>Web Development</option>
					<option>Web Designing</option>
					<option>Art & Culture</option>
					<option>Reading & Writing</option>
				</select>
			</div>
			<div className="cfield">
				<input type="text" placeholder="Phone Number" />
				<i className="la la-phone"></i>
			</div>
			<button type="submit">Signup</button>
		</form>
		<div className="extra-login">
			<span>Or</span>
			<div className="login-social">
				<a className="fb-login" href="#" title=""><i className="fa fa-facebook"></i></a>
				<a className="tw-login" href="#" title=""><i className="fa fa-twitter"></i></a>
			</div>
		</div>
	</div>
</div> */}
    </>
//   Fin return
  )
}


export default inscription