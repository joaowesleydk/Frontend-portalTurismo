import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import LoginForm from "../Components/loginForm";
import img10 from "../assets/imagens/img10.png"

const LoginPage = () => {
    return (
        <>
        <div className="flex flex-col min-h-screen"
        style={{ backgroundImage: `url(${img10})` }}>
            <Navbar />
        <div className="flex-grow flex items-center justify-center ">
            <LoginForm/>
        </div>
            <Footer />
        </div>
        
        </>
    )
}

export default LoginPage;