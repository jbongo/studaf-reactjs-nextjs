import React from 'react'
import Link from 'next/link';
import {isAuth} from '../../actions/authentification'

import Cookies from 'universal-cookie'


const cookies = new Cookies()

export default function TopMenuHome () {

	function isAuth(){
		const role = cookies.get('role');

        if(role != null) {
           console.log(   {
                value : true,
                role: role
            })
        }else{
            
            console.log(   {
                value : false,
                role: null
            })

        }
	}

return (
    
    <>
{
		isAuth() 
			
	
}
     <div className="responsive-header">
		<div className="responsive-menubar">
			<div className="res-logo"><a href="index.html" ><img src="../../assets/images/logo.jpg" alt="" /></a></div>
			<div className="menu-resaction">
				<div className="res-openmenu">
					<img src="" alt="" /> Menu
				</div>
				<div className="res-closemenu">
					<img src="" alt="" /> Close
				</div>
			</div>
		</div>
		<div className="responsive-opensec">
			<div className="btn-extars">
					<a href="#"  className="post-job-btn"><i className="la la-plus"></i>Postuler</a>
					<ul className="account-btns">
					{/* <li className="signup-popup"><Link href="/inscription" ><i className="la la-key"></i> Inscription</Link></li> */}
					<li className="signin-popup"><Link href="/connexion" > Mon compte</Link></li>
						
					</ul>
				</div>
			{/* <form className="res-search">
				<input type="text" placeholder="Titre de l'offre" />
				<button type="submit"><i className="la la-search"></i></button>
			</form> */}
			<a href="#"  className="post-job-btn"><i className="la la-plus"></i>Postuler</a>
			<div className="responsivemenu">
				
				<ul>
						<li className="menu-item">
							<Link href="/" >Accueil</Link>
							
						</li>
						<li className="menu-item">
							<Link href="/recruteur/profile" >Recruteurs</Link>
							
						</li>
						<li className="menu-item">
							<Link href="/candidat/profile" >Candidats</Link>
							
						</li>
						<li className="menu-item">
							<Link href="/blog/blog" >Blog</Link>
							
						</li>
						{/* <li className="menu-item">
							<a href="#" >Offres d'emplois</a>

						</li> */}
						<li className="menu-item">
							<Link href="/connexion" >Nous contacter</Link>
						</li>
					</ul>
			</div>
		</div>
	</div>
	
	<header className="stick-top forsticky">
		<div className="menu-sec">
			<div className="container">
				<div className="logo">
					<a href="index.html" ><img className="hidesticky" src="../../assets/images/logo.jpg"  alt="" /><img className="showsticky" src="../../assets/images/logo.jpg"  alt="" /></a>
				</div>
				<div className="btn-extars">
					<ul className="account-btns">
						{/* <li className="signup-popup"><Link href="/inscription" ><i className="la la-key"></i> Inscription</Link></li> */}
					<li className="signin-popup"><Link href="/connexion" > Mon compte</Link></li>

					</ul>
				</div>
				<nav>
					<ul>
						<li className="menu-item">
							<Link href="/" >Accueil</Link>
							
						</li>
						 {
							   (isAuth.value == true) ? 	
								
								<div> 
									<li className="menu-item">
										<Link href="/recruteur/profile" >Recruteurs</Link>
										
									</li> 
										<li className="menu-item">
										<Link href="/candidat/profile" >Candidats</Link>										
									</li>
							</div>
						   : ""
						 }
						  

						<li className="menu-item">
							<Link href="/blog/blog" >Blog</Link>
							
						</li>
						{/* <li className="menu-item">
							<a href="#" >Offres d'emplois</a>

						</li> */}
						<li className="menu-item">
							<Link href="/contact" >Nous contacter</Link>
						
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
  
  </>
//   Fin return
)
  
}


TopMenuHome.getInitialProps = async (ctx) => {
	isAuth((result) => {
		console.log(result);
		return {auth : result }
	})
  }

// export default TopMenuHome