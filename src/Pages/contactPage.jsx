import React from "react";
import Footer from "../Components/footer";
import Navbar from "../Components/navbar";
import ContactForm from "../Components/contactForm";


const ContactPage = () =>{
    return(
        <>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
             <div>
                <ContactForm/>
             </div>
        <Footer/>
      </div>
      
      
        </>

    )
}

export default ContactPage;