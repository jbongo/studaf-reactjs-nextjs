import React from 'react';
import TopMenuPage from '../../topmenu/topmenupage';
import LeftMenuCandi from '../../leftmenu/leftmenucandi';
import Link from 'next/link';


const CompetenceProf = () => {
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
								<div> <h3>Ma competence Professionnelle</h3> </div>
                                <div className="row">
                                     
                                        <div className="col-md-6">
                                           <span className="pf-title">Titre Competence</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder=" Inscrir la competence" name="libelle" className="form-control"/>
					 						</div>     
                                        </div>

                                        <div className="col-md-6">
                                           <span className="pf-title">Domaine Competence</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder=" Inscrir le domaine competence" name="libelle" className="form-control"/>
					 						</div>     
                                        </div>

                        
                                     <div className="col-lg-12">
					 						<span className="pf-title">Description Competence</span>
					 						<div className="pf-field">
					 							<textarea className="form-control" name="description"></textarea>
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

export default CompetenceProf