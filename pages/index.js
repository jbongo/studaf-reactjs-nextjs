import Home from './home/home'
import Head from 'next/head'

export default function Accueil() {
  return (  
    <>
    <Head>
        <script src="../assets/js/jquery.min.js"></script>
        <script src="../assets/js/modernizr.js"></script>
        <script src="../assets/js/bootstrap.min.js"></script>
        <script src="../assets/js/script.js"></script>
        <script src="../assets/js/wow.min.js"></script>
        <script src="../assets/js/slick.min.js"></script>
        <script src="../assets/js/parallax.min.js"></script>
        <script src="../assets/js/select-chosen.js"></script>
    </Head>
   

    <Home />


    </>
  )
}
