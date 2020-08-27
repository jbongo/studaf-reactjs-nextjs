import React from 'react'
import Link from 'next/link';


const Footer = () => {

    return(
    
    <>
        
	
		<footer>
		<div className="block">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 column">
						<div className="widget">
							<div className="about_widget">
								<div className="logo">
									<a href="#" title=""><img src="http://placehold.it/178x40" alt="" /></a>
								</div>
							
								<span>+33 05 05 05 05</span>
								<span>info@studafrik.com</span>
								<div className="social">
									<a href="#" title=""><i className="fa fa-facebook"></i></a>
									<a href="#" title=""><i className="fa fa-twitter"></i></a>
									<a href="#" title=""><i className="fa fa-linkedin"></i></a>
									<a href="#" title=""><i className="fa fa-pinterest"></i></a>
									<a href="#" title=""><i className="fa fa-behance"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 column">
						<div className="widget">
							<h3 className="footer-title">Questions fréquemment posées</h3>
							<div className="link_widgets">
								<div className="row">
									<div className="col-lg-6">
										<a href="#" title="">Politique de confidentialté </a>
										<a href="#" title="">Qui somme nous ?</a>
										<a href="#" title="">Qui somme nous ?</a>
									
									</div>
									<div className="col-lg-6">
										<a href="#" title="">Support </a>
										<a href="#" title="">Aide </a>
										<Link href="/recruteur/profile" title="">Récruteurs</Link>
										<Link href="/candidat/profile" title="">Candidats </Link>
										<Link href="/contact" title="">Nous contacter</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-2 column">
						<div className="widget">
							<h3 className="footer-title">Trouvez un emplois</h3>
							<div className="link_widgets">
								<div className="row">
									<div className="col-lg-12">
										<a href="#" title="">Gabon</a>	
										<a href="#" title="">Côte d'Ivoire</a>	
										
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3 column">
						<div className="widget">
							<div className="download_widget">
								<a href="#" title=""><img src="http://placehold.it/230x65" alt="" /></a>
								<a href="#" title=""><img src="http://placehold.it/230x65" alt="" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	
	</footer>


    </>
//   Fin return
  )
}


export default Footer