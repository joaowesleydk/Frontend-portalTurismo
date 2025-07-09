import React, {useState} from "react";


const LoginForm = () => {
    const [email ,setEmail] = useState('')
    const [senha ,setSenha] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Email: ${email} \nSenha:${senha}`)
    }
    
    return (
        <>
        <div className="bg-white p-8 rounded-2x1 shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6"> Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                   <label>E-mail</label> 
                   <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                    placeholder="Digite seu E-mail"/>
                </div>
                <div>
                    <label>Senha</label>
                    <input
                    id="password"
                    type="password"
                    name="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    className="w-full border border-gray-300 p-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base mb-3"
                    placeholder="Digite sua Senha"/>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-b-lg hover:bg-blue-300 transition">
                    Entrar</button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600 ">não tem conta?
            <a href="/register" className="text-blue-600 hover:underline text-center p-2">Cadastre-se</a>
            </p>
        </div>
        </>
    )
}

export default LoginForm