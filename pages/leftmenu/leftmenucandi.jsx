import React from 'react';
import Link from 'next/link';


const LeftMenuCandi = () => {

    return (
        <aside className="col-lg-3 column border-right">
            <div className="widget">
                <div className="tree_widget-sec">
                    <ul>
                        <li><Link href="/candidat/profile" title="">Profile</Link></li>
                        <li><Link href="/candidat/cv" title="">CV</Link></li>
                        <li><Link href="/candidat/favoris" title="">Mes favoris</Link></li>
                        <li><Link href="/candidat/candidatures" title="">Mes candidatures</Link></li>
                        <li><Link href="/candidat/alertes" title="">Mes alertes</Link></li>
                        {/* <li><Link href="/candidat/identifiants" title=""><i className="la la-lock"></i>Modifier mes identifiants</Link></li> */}
                        <li><Link href="/logout" title="">Déconnexion</Link></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}


export default LeftMenuCandi;