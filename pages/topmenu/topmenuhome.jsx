import React from 'react'
import Link from 'next/link';

export default function TopMenuHome () {

    return(
    
    <>

     <div className="responsive-header">
		<div className="responsive-menubar">
			<div className="res-logo"><a href="index.html" title=""><img src="../../assets/images/logo.jpg" alt="" /></a></div>
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
					<a href="#" title="" className="post-job-btn"><i className="la la-plus"></i>Postuler</a>
					<ul className="account-btns">
					{/* <li className="signup-popup"><Link href="/inscription" title=""><i className="la la-key"></i> Inscription</Link></li> */}
					<li className="signin-popup"><Link href="/connexion" title=""> Mon compte</Link></li>
						
					</ul>
				</div>
			{/* <form className="res-search">
				<input type="text" placeholder="Titre de l'offre" />
				<button type="submit"><i className="la la-search"></i></button>
			</form> */}
			<a href="#" title="" className="post-job-btn"><i className="la la-plus"></i>Postuler</a>
			<div className="responsivemenu">
				
				<ul>
						<li className="menu-item">
							<Link href="/" title="">Accueil</Link>
							
						</li>
						<li className="menu-item">
							<Link href="/recruteur/profile" title="">Recruteurs</Link>
							
						</li>
						<li className="menu-item">
							<Link href="/candidat/profile" title="">Candidats</Link>
							
						</li>
						<li className="menu-item">
							<Link href="/blog/blog" title="">Blog</Link>
							
						</li>
						{/* <li className="menu-item">
							<a href="#" title="">Offres d'emplois</a>

						</li> */}
						<li className="menu-item">
							<Link href="/connexion" title="">Nous contacter</Link>
						</li>
					</ul>
			</div>
		</div>
	</div>
	
	<header className="stick-top forsticky">
		<div className="menu-sec">
			<div className="container">
				<div className="logo">
					<a href="index.html" title=""><img className="hidesticky" src="../../assets/images/logo.jpg"  alt="" /><img className="showsticky" src="../../assets/images/logo.jpg"  alt="" /></a>
				</div>
				<div className="btn-extars">
					<ul className="account-btns">
						{/* <li className="signup-popup"><Link href="/inscription" title=""><i className="la la-key"></i> Inscription</Link></li> */}
					<li className="signin-popup"><Link href="/connexion" title=""> Mon compte</Link></li>

					</ul>
				</div>
				<nav>
					<ul>
						<li className="menu-item">
							<Link href="/" title="">Accueil</Link>
							
						</li>
						<li className="menu-item">
							<Link href="/recruteur/profile" title="">Recruteurs</Link>
							
						</li>
						<li className="menu-item">
							<Link href="/candidat/profile" title="">Candidats</Link>
							
						</li>
						<li className="menu-item">
							<Link href="/blog/blog" title="">Blog</Link>
							
						</li>
						{/* <li className="menu-item">
							<a href="#" title="">Offres d'emplois</a>

						</li> */}
						<li className="menu-item">
							<Link href="/contact" title="">Nous contacter</Link>
						
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


// export default TopMenuHome