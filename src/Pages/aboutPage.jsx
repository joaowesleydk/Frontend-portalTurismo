import React from "react";
import AboutHero from "../Components/aboutHero";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import img77 from "../assets/imagens/img77.png"

const AboutPage = () =>{
    return(
        <>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
             <div>
               
             </div>
             <div>
               <AboutHero img = {img77}/>
             </div>
        <Footer/>
      </div>
      
      
        </>

    )
}

export default AboutPage;