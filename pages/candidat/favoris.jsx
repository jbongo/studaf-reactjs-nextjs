import React from 'react';
import LeftMenuRecru from '../leftmenu/leftmenurecru';
import TopMenuPage from '../topmenu/topmenupage';
import Footer from '../footer/footer';
import LeftMenuCandi from '../leftmenu/leftmenucandi';


const Favoris = () => {

    return (
        <>
        <TopMenuPage/>
        <section>
		<div className="block remove-top">
			<div className="container">
				 <div className="row no-gape">
				 	<LeftMenuCandi/>
				 	<div className="col-lg-9 column">
				 		<div className="padding-left">
					 		<div className="manage-jobs-sec">
					 			<div className="border-title"><h3>Mes favoris</h3></div>
						 		<div className="job-listing wtabs">
									<div className="job-title-sec">
										<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Expert comptable</a></h3>
										<span>Sanofi</span>
										<div className="job-lctn">2, Juin, 2020</div>
									</div>
									<div className="job-list-del">
										<a href="#" title=""><i className="la la-trash-o"></i></a>
									</div>
								</div>
								<div className="job-listing wtabs">
									<div className="job-title-sec">
										<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Expert comptable</a></h3>
										<span>Sanofi</span>
										<div className="job-lctn">2, Juin, 2020</div>
									</div>
									<div className="job-list-del">
										<a href="#" title=""><i className="la la-trash-o"></i></a>
									</div>
								</div>
								<div className="job-listing wtabs">
									<div className="job-title-sec">
										<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Expert comptable</a></h3>
										<span>Sanofi</span>
										<div className="job-lctn">2, Juin, 2020</div>
									</div>
									<div className="job-list-del">
										<a href="#" title=""><i className="la la-trash-o"></i></a>
									</div>
								</div>
								<div className="job-listing wtabs">
									<div className="job-title-sec">
										<div className="c-logo"> <img src="http://placehold.it/98x51" alt="" /> </div>
										<h3><a href="#" title="">Expert comptable</a></h3>
										<span>Sanofi</span>
										<div className="job-lctn">2, Juin, 2020</div>
									</div>
									<div className="job-list-del">
										<a href="#" title=""><i className="la la-trash-o"></i></a>
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
										<li className="next"><a href="">Suivant <i className="la la-long-arrow-right"></i></a></li>
									</ul>
								</div>
					 		</div>
					 	</div>
					</div>
				 </div>
			</div>
		</div>
		<Footer/>
	</section>






    </>
    )
}

export default Favoris;