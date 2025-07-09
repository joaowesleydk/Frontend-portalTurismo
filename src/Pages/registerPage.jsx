import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import RegisterForm from "../Components/registerForm";
import img55 from "../assets/imagens/img55.png"



const RegisterPage = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen"
            style={{ backgroundImage: `url(${img55})` }}>
            <Navbar />
        <div className="flex-grow flex items-center justify-center ">
            <RegisterForm />
        </div>
            <Footer />
        </div>
        
        </>
    )
}

export default RegisterPage;