import React from 'react';
import TopMenuPage from '../../topmenu/topmenupage';
import LeftMenuCandi from '../../leftmenu/leftmenucandi';


class  AddFormation extends React.Component {
   render(){
		return(
			<>
            <TopMenuPage/>
            
            <div className="block no-padding">
                <div className="container">
                    <div className="row no-gape">
                        <LeftMenuCandi/>

                        <div className="profile-form-edit">
                            <form>
								<div><label><h3>Ajouter votre formation</h3></label></div>
                                <div className="row">
                                    <div className="col-lg-6">
					 					<span className="pf-title">Libelle Formation</span>
					 						<div className="pf-field">
					 							<input type="text" placeholder=" libelle formation" name="libelle" className="form-control"/>
					 						</div>
					 				</div>

                                     <div className="col-lg-12">
					 						<span className="pf-title">Description Formation</span>
					 						<div className="pf-field">
					 							<textarea className="form-control" name="description"></textarea>
					 						</div>
					 				 </div>

                                      <div className="col-lg-12">
					 						<span className="pf-title">Date création formation</span>
					 						<div className="pf-field">
					 							<input type="date"   name="date_creation" className="form-control datepicker" />
					 						</div>
					 				  </div>

                                      <div className="col-lg-12">
					 						<span className="pf-title">Date debut formation</span>
					 						<div className="pf-field">
					 							<input type="date"   name="date_deb" className="form-control datepicker" />
					 						</div>
					 				  </div>

                                       <div className="col-lg-12">
					 						<span className="pf-title">Date fin formation</span>
					 						<div className="pf-field">
					 							<input type="date"   name="date_fin" className="form-control datepicker" />
					 						</div>
					 				  </div>

                                       <div className="col-lg-12">
					 						<button type="submit" >Ajouter</button>
					 					</div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            
        </>

		)
   }
}

export default AddFormation