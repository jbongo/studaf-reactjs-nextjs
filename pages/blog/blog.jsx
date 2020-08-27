import React from 'react'

import TopMenuPage from '../topmenu/topmenupage'

import Link from 'next/link';

import Aside from './aside';

const Blog = () => {

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
								<h3>Blog</h3>
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
		<div className="block">
			<div className="container">
				 <div className="row">
				 	<div className="col-lg-9">
				 		<div className="blog-sec">
							<div className="row" id="masonry">
								
								
					
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div className="my-blog">
										<div className="blog-thumb">
											<a href="#" title=""><img src="http://placehold.it/360x200" alt="" /></a>
											<div className="blog-metas">
												<a href="#" title="">28 Mars, 2020</a>
												<a href="#" title="">0 Commentaires</a>
											</div>
										</div>
										<div className="blog-details">
											<h3><a href="#" title="">11 conseils pour vous aider à obtenir un nouvel emploir</a></h3>
											<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street.  </p>
											<Link href="/article/conseil-emploi" title="">Lire la suite </Link>
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div className="my-blog">
										<div className="blog-thumb">
											<a href="#" title=""><img src="http://placehold.it/360x200" alt="" /></a>
											<div className="blog-metas">
												<a href="#" title="">28 Mars, 2020</a>
												<a href="#" title="">0 Commentaires</a>
											</div>
										</div>
										<div className="blog-details">
											<h3><a href="#" title="">11 conseils pour vous aider à obtenir un nouvel emploir</a></h3>
											<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street.  </p>
											<Link href="/article/conseil-emploi" title="">Lire la suite </Link>
										</div>
									</div>
								</div>

								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div className="my-blog">
										<div className="blog-thumb">
											<a href="#" title=""><img src="http://placehold.it/360x200" alt="" /></a>
											<div className="blog-metas">
												<a href="#" title="">28 Mars, 2020</a>
												<a href="#" title="">0 Commentaires</a>
											</div>
										</div>
										<div className="blog-details">
											<h3><a href="#" title="">11 conseils pour vous aider à obtenir un nouvel emploir</a></h3>
											<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street.  </p>
											<Link href="/article/conseil-emploi" title="">Lire la suite </Link>
										</div>
									</div>
								</div>


								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
									<div className="my-blog">
										<div className="blog-thumb">
											<a href="#" title=""><img src="http://placehold.it/360x200" alt="" /></a>
											<div className="blog-metas">
												<a href="#" title="">28 Mars, 2020</a>
												<a href="#" title="">0 Commentaires</a>
											</div>
										</div>
										<div className="blog-details">
											<h3><a href="#" title="">11 conseils pour vous aider à obtenir un nouvel emploir</a></h3>
											<p>J'ai passé plusieurs années à travailler sur des moutons à Wall Street. A eu un succès modéré en investissant dans Yugos à Wall Street.  </p>
											<Link href="/article/conseil-emploi" title="">Lire la suite </Link>
										</div>
									</div>
								</div>
								
							</div>

							<div className="pagination">
								<ul>
									<li className="prev"><a href=""><i className="la la-long-arrow-left"></i> Précédent</a></li>
									<li><a href="">1</a></li>
									<li className="active"><a href="">2</a></li>
									<li><a href="">3</a></li>
									<li><span className="delimeter">...</span></li>
									<li><a href="">14</a></li>
									<li className="next"><a href="">Suivant </a></li>
								</ul>
							</div>
						</div>
						
					</div>

				   <div className="col-lg-3">
					  <Aside/> 
				   </div>
				 </div>
				 
			</div>
		</div>
	</section>








    </>
//   Fin return
  )
}


export default Blog