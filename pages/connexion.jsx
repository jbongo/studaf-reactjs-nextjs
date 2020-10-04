import React , {useState} from 'react'
import Link from 'next/link';
import {useRouter} from 'next/router';
import TopMenuPage from './topmenu/topmenupage'

import {connexionAction} from '../actions/authentification'
import {Alert, Button} from 'react-bootstrap/';
import Cookies from 'universal-cookie'



const Connexion = () => {

	const [showalerterror, setShowalerterror] = useState(false);
	const [errormessage, setErrormessage] = useState("");

	const cookies = new Cookies();
	const router = useRouter();



	function handleSubmit(e){
		e.preventDefault();

		const data = {
			email : e.target.email.value,
			password : e.target.password.value
		}

		connexionAction(data, (result)=>{


			
			if(result.status == 200){

				console.log("aaaaa");

				console.log(result.data.token);
				cookies.set('token', result.data.token,{ path: '/' }, {
					httpOnly: true // true by default
				})
				cookies.set('user_id', result.data.userId, { path: '/' },{
					httpOnly: true // true by default
				})
				cookies.set('role', result.data.role, { path: '/' },{
					httpOnly: true // true by default
				})
				
				if(result.data.role =="candidat"){
					router.push('/candidat/profile')
				}
				else if(result.data.role =="recruteur"){
					router.push('/recruteur/profile')

				}
				


				// 
			}else if(result.status > 200) {
				
				setErrormessage(result.data.error)

				setShowalerterror(true);

			}

		})
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
								<h3>Connexion</h3>
								{/* <span>Keep up to date with the latest news</span> */}
							</div>
							{/* <div className="page-breacrumbs">
								<ul className="breadcrumbs">
									<li><a href="#" title="">Home</a></li>
									<li><a href="#" title="">Pages</a></li>
									<li><a href="#" title="">Login</a></li>
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
						<div className="account-popup-area signin-popup-box static">
							<div className="account-popup">
							<h3>Connectez-vous !</h3>

									<div className="alerte">

										<Alert show={showalerterror} variant="danger">
											<Alert.Heading>{errormessage} !</Alert.Heading>
											{/* <Alert.Heading>Désolé ces identiants sont incorrects</Alert.Heading> */}
											
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
									<div className="cfield">
										<input type="email" name="email" placeholder="email"  required/>
										<i className="la la-user"></i>
									</div>
									<div className="cfield">
										<input type="password" name="password" placeholder="********"  required/>
										<i className="la la-key"></i>
									</div>
									<p className="remember-label">
										<input type="checkbox" name="cb" id="cb1"/><label htmlFor="cb1">Se souvenir de moi</label>
									</p>
									<a href="#" title="">Mot de passe oublié ?</a>
									<button type="submit">Se Connecter</button>
								</form>
								<div className="extra-login">
								<span><Link href="/inscription" title="">Je crée un compte </Link></span>

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




<div className="account-popup-area signin-popup-box">
	<div className="account-popup">
		<span className="close-popup"><i className="la la-close"></i></span>
		<h3>User Login</h3>
		<span>Click To Login With Demo User</span>
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
			<p className="remember-label">
				<input type="checkbox" name="cb" id="cbwq"/><label htmlFor="cbwq">Remember me</label>
			</p>
			<a href="#" title="">Forgot Password?</a>
			<button type="submit">Login</button>
		</form>
		<div className="extra-login">
			<span>Or</span>
			<div className="login-social">
				<a className="fb-login" href="#" title=""><i className="fa fa-facebook"></i></a>
				<a className="tw-login" href="#" title=""><i className="fa fa-twitter"></i></a>
			</div>
		</div>
	</div>
</div>

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
</div>

    </>
//   Fin return
  )
}


export default Connexion