import React from "react";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import Hero from  "../Components/hero";
import img20 from "../assets/imagens/img20.png"

const Home = () =>{
    return(
        <>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
             <div>
                <Hero img = {img20} titulo = "Nova Serra Azul" paragrafo = "Conheça nossas atrações" rota="#" botao="saiba  mais"/>
             </div>
        <Footer/>
      </div>
      
      
        </>

    )
}

export default Home;