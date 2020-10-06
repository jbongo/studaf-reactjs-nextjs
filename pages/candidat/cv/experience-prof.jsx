import React from 'react';
import TopMenuPage from '../../topmenu/topmenupage';
import LeftMenuCandi from '../../leftmenu/leftmenucandi';
import Footer from '../../footer/footer';

import Link from 'next/link';


const ExperienceProf = () => {
    return(
        <>
             
            <TopMenuPage/>
            
            <div className="block no-padding">
                <div className="container">
                    <div className="row no-gape">
                        <LeftMenuCandi/>

                        <div className="profile-form-edit col-lg-9">
                            <form>
                            <br/><br/>
								<div> <h3>Mon Experience professionnel</h3> </div>
                                <div className="row">
                                    <div className="col-lg-6">
					 					<span className="pf-title">Titre experience</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder=" Titre Experience" name="titre" className="form-control"/>
					 						</div>
					 				</div>

                                     <div className="col-lg-6">
					 					<span className="pf-title">Nom Entreprise</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder=" Entreprise " name="nom_entreprise" className="form-control"/>
					 						</div>
					 				</div>

                                     <div className="col-lg-12">
					 						<span className="pf-title">Description Experience</span>
					 						<div className="pf-field">
					 							<textarea className="form-control" name="description"></textarea>
					 						</div>
					 				 </div>

                                      <div className="col-lg-6">
					 						<span className="pf-title">Date debut Experience</span>
					 						<div className="pf-field">
					 							<input type="date"   name="date_deb" className="form-control datepicker" />
					 						</div>
					 				  </div>

                                       <div className="col-lg-6">
					 						<span className="pf-title">Date fin Experience</span>
					 						<div className="pf-field">
					 							<input type="date"   name="date_fin" className="form-control datepicker" />
					 						</div>
					 				  </div>

                                       <div className="col-lg-12">
					 						<button type="submit" >Modifier</button>
					 					</div>
                                </div>
                                <br/><br/>
                            </form>
                        </div>
                    </div>
                </div>
				<Footer/>
            </div>


            
        </>
    )
}

export default ExperienceProf