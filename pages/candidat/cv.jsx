import React from 'react';
import TopMenuPage from '../topmenu/topmenupage';
import LeftMenuCandi from '../leftmenu/leftmenucandi';
import Link from 'next/link';
import {BsFillTrashFill} from 'react-icons/bs'
import {BiPencil} from 'react-icons/bi'

const Resume = () => {

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
					 			<div className="border-title"><h3>Formations</h3><Link href="/candidat/cv/add-formation" title="">   Ajouter Formation </Link></div>
						 		<div className="edu-history-sec">
		 							<div className="edu-history">
		 								<i className="la la-graduation-cap"></i>
		 								<div className="edu-hisinfo">
		 									<h3>Université LAPIN</h3>
		 									<i>2008 - 2012</i>
		 									<i>Informatique de gestion</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
				 							<li><span>Modifier</span><Link href="/candidat/cv/update-formation" title=""><i className="la la-pencil"></i></Link></li>
				 							<li><span>Supprimer</span><a href="#" title=""><BsFillTrashFill/></a></li>
				 						</ul>
		 							</div>
		 						
		 						</div>
								 <div className="edu-history-sec">
		 							<div className="edu-history">
		 								<i className="la la-graduation-cap"></i>
		 								<div className="edu-hisinfo">
		 									<h3>Université LAPIN</h3>
		 									<i>2008 - 2012</i>
		 									<i>Informatique de gestion</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
											 {/*<i className="la la-pencil"></i>*/}
				 							<li><span>Modifier</span><Link href="/candidat/cv/update-formation" title=""><BiPencil/></Link></li>
				 							<li><span>Supprimer</span><a href="#" title=""><BsFillTrashFill/></a></li>
				 						</ul>
		 							</div>
		 						
		 						</div>
								{/*<i className="la la-plus"></i>*/}
		 						<div className="border-title"><h3>Expériences Professionnelle</h3><Link href="/candidat/cv/experience-prof" title=""> Ajouter Expérience</Link></div>
						 		<div className="edu-history-sec">
		 							<div className="edu-history style2">
		 								<i></i>
		 								<div className="edu-hisinfo">
		 									<h3>Web Designer <span>ICA </span></h3>
		 									<i>2008 - 2012</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
											 {/*<i className="la la-pencil"></i>*/}
				 							<li><span>Modifier</span><Link href="/candidat/cv/experience-prof" title=""><BiPencil/></Link></li>
											 {/*<i className="la la-trash-o"></i>*/}
				 							<li><span>Supprimer</span><a href="#" title=""><BsFillTrashFill/></a></li>
				 						</ul>
		 							</div>
									 <div className="edu-history style2">
		 								<i></i>
		 								<div className="edu-hisinfo">
		 									<h3>Web Designer <span>ICA </span></h3>
		 									<i>2008 - 2012</i>
		 									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
		 								</div>
		 								<ul className="action_job">
											 {/*<i className="la la-pencil"></i>*/}
				 							<li><span>Modifier</span><Link href="/candidat/cv/experience-prof" title=""><BiPencil/></Link></li>
											 {/*<i className="la la-trash-o"></i>*/}
				 							<li><span>Supprimer</span><a href="#" title=""><BsFillTrashFill/></a></li>
				 						</ul>
		 							</div>
		 							
		 						</div>
		 						{/*<i className="la la-plus"></i>*/}
		 						<div className="border-title"><h3>Compétences professionnelles </h3><Link href="/candidat/cv/competence-prof" title=""> Ajouter Compétences</Link></div>
		 						<div className="progress-sec">
		 							<div className="progress-sec with-edit">
		 								<span>Microsoft Office</span>
		 								<div className="progressbar"> <div className="progress" style={{ width: "80%" }}><span>80%</span></div> </div>
		 								<ul className="action_job">
											 {/*<i className="la la-pencil"></i>*/}
				 							<li><span>Modifier</span><Link href="/candidat/cv/competence-prof" title=""><BiPencil/></Link></li>
											 {/*<i className="la la-trash-o"></i>*/}
				 							<li><span>Supprimer</span><a href="#" title=""><BsFillTrashFill/></a></li>
				 						</ul>
		 							</div>
		 							<div className="progress-sec with-edit">
		 								<span>Rédaction</span>
		 								<div className="progressbar"> <div className="progress" style={{ width: "60%" }}><span>60%</span></div> </div>
		 								<ul className="action_job">
											 {/*<i className="la la-pencil"></i>*/}
				 							<li><span>Modifier</span><Link href="/candidat/cv/competence-prof" title=""><BiPencil/></Link></li>
											 {/*<i className="la la-trash-o"></i>*/}
				 							<li><span>Supprimer</span><a href="#" title=""><BsFillTrashFill/></a></li>
				 						</ul>
		 							</div>
		 							
		 						</div>
		 						
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

export default Resume;