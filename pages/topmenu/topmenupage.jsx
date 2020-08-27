import React from 'react'
import Link from 'next/link';


export default function TopMenuPage ()  {

    return(
    
    <>
           <div className="theme-layout" id="scrollup">
	
	<div className="responsive-header">
		<div className="responsive-menubar">
			<div className="res-logo"><a href="index.html" title=""><img src="http://placehold.it/178x40" alt="" /></a></div>
			<div className="menu-resaction">
				<div className="res-openmenu">
					<img src="images/icon.png" alt="" /> Menu
				</div>
				<div className="res-closemenu">
					<img src="images/icon2.png" alt="" /> Close
				</div>
			</div>
		</div>
		<div className="responsive-opensec">
			<div className="btn-extars">
					<a href="/" title="" className="post-job-btn"><i className="la la-plus"></i>Postuler</a>
					<ul className="account-btns">
					{/* <li className="signup-popup"><Link href="/inscription" title=""> Inscription</Link></li> */}
					<li className="signin-popup"><Link href="Authentification/Inscription" title=""> Mon compte</Link></li>
						
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
						<Link href="/recruteur/profile" title=""> Recruteurs </Link>
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
			</div>
		</div>
	</div>
	
	<header className="gradient">
		<div className="menu-sec">
			<div className="container">
				<div className="logo">
					<a href="index.html" title=""><img src="http://placehold.it/178x40" alt="" /></a>
				</div>
				<div className="btn-extars">
					<a href="#" title="" className="post-job-btn"><i className="la la-plus"></i>Postuler</a>
					<ul className="account-btns">
					{/* <li className="signup-popup"><Link href="/inscription" title=""> Inscription</Link></li> */}
					{/* <li className="signin-popup"><Link href="/mon-compte" title="">Mon compte</Link></li> */}
						
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
							<Link href="/blog/blog" title=""> Blog  </Link>
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



</div>
  
  </>
//   Fin return
  )
}

