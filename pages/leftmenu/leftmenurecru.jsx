import React from 'react';
import Link from 'next/link';


const LeftMenuRecru = () => {

    return (
        <aside className="col-lg-3 column border-right">
            <div className="widget">
                <div className="tree_widget-sec">
                    <ul>
                        <li><Link href="/recruteur/profile" title="">Profile</Link></li>
                        <li><Link href="/recruteur/job" title="">Offres d'emplois</Link></li>
                        <li><Link href="/recruteur/cv" title="">CV</Link></li>
                        <li><Link href="/recruteur/addjob" title="">Ajouter une offre</Link></li>
                        <li><Link href="/recruteur/alerte" title="">Mes alertes</Link></li>
                        {/* <li><Link href="/recruteur/identifiants" title=""><i className="la la-lock"></i>Modifier mes identifiants</Link></li> */}
                        <li><Link href="/logout" title="">Déconnexion</Link></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default LeftMenuRecru;