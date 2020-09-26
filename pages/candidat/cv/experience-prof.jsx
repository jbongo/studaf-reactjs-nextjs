import React from 'react';
import TopMenuPage from '../../topmenu/topmenupage';
import LeftMenuCandi from '../../leftmenu/leftmenucandi';
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
					 							<input type="text" placeholder=" libelle formation" name="titre" className="form-control"/>
					 						</div>
					 				</div>

                                     <div className="col-lg-6">
					 					<span className="pf-title">Nom Entreprise</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder=" libelle formation" name="nom_entreprise" className="form-control"/>
					 						</div>
					 				</div>

                                     <div className="col-lg-12">
					 						<span className="pf-title">Description Formation</span>
					 						<div className="pf-field">
					 							<textarea className="form-control" name="description"></textarea>
					 						</div>
					 				 </div>

                                      <div className="col-lg-6">
					 						<span className="pf-title">Date debut formation</span>
					 						<div className="pf-field">
					 							<input type="date"   name="date_deb" className="form-control datepicker" />
					 						</div>
					 				  </div>

                                       <div className="col-lg-6">
					 						<span className="pf-title">Date fin formation</span>
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
            </div>


            
        </>
    )
}

export default ExperienceProf