import React from 'react';
import TopMenuPage from '../topmenu/topmenupage';
import Footer from '../footer/footer';
import Aside from './aside';


const AddArticle = ()=>{
    return(
        <>
            <TopMenuPage/>
            <section>
                     {/* block title*/}
                    <div className="block no-padding  gray">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="inner2">
                                        <div className="inner-title2">
                                            <h3>Ajouter un article</h3>
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
                       <br/>                 
             {/*bloc formulaire*/}
            <section>
                <div className="bloc">
                    <div className="container">
                        <br/><br/>
                       <div className="row">
                           <div className="col-lg-9">
                               <div className="blog-sec">

                                     <form>
                                            <div className="col-lg-11">
                                                    <span className="pf-title">Titre Article</span>
                                                <div className="pf-field">
                                                    <input type="text"   name="titre" className="form-control datepicker"  placeholder="Le tritre de l'artcle de publication"/>
                                                </div>
                                            </div>

                                            <div className="col-lg-11">
                                                        <span className="pf-title">Description Article</span>
                                                    <div className="pf-field">
                                                        <textarea className="form-control" name="description"></textarea>
                                                    </div>
                                            </div>

                                            <div className="col-lg-9">
                                                        <span className="pf-title">Image Article</span>
                                                    <div className="pf-field">
                                                        <input type="file"   name="image" className="form-control"/>
                                                    </div>
                                            </div><br/>

                                     </form>

                               </div>  

                                <div className="col-lg-9 ">
                                    <button className="btn btn-lg btn-outline-info" type="submit" >Publier Article</button>
                                </div>       
                           </div>

                            {/*right navigation*/}
                           <div className="col-lg-3">
					        <Aside/> 
				           </div>
                       </div>                     
                    </div>                   
                </div><br/><br/>

            <Footer/>
            </section>
        </>
    )
}

export default AddArticle;