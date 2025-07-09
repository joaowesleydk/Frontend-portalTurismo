import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Footer = () =>{
 
   return(
       <>
       <footer className="w-full bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900 text-white py-2 px-2 shadow-lg mt-auto">
           <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center">
               <div className="text-center md:text-left mb-4 md:mb-0">
                   <p className="text-2x1 hover:text-black text-center">Termos e serviços</p>
               </div>
               <div className="flex space-x-10">
                   <a href="#" className="hover:text-blue-800">  <CiFacebook /></a>
                   <a href="#" className="hover:text-green-600">  <FaWhatsapp /></a>
                   <a href="#" className="hover:text-rose-300"> <FaInstagram/></a>


               </div>
           </div>        
       </footer>
      
        
       </>
   )
}


export default Footer;