import React from "react";


const AboutHero = (props) => {
    return (
        <>
            <div
                className="bg-cover bg-center h-[780px] m-8 "style={{ backgroundImage: `url(${props.img})` }}>
                <div className="text-center pt-8 text-4xl font-extrabold ">
                  <h1>Minha Experiência</h1> 
                  <p className="text-2xl text-black font-bold">&nbsp;&nbsp;Olá Mundo! Eu me chamo João Wesley e tenho 16 anos, para mim, montar essa página e esse site está sendo muito legal e uma experiência única. <br /> No começo eu estava até meio perdido, mas, 
                  consegui compreender e fui mexendo e pesquisando até ficar do jeito que eu queria. <br /> Pensei que eu não ia conseguir, 
                  achei que iria ser o mais atrasado, mas quando fui me esforçando percebi
                  que não é tão difícil, só precisamos nos esforçar, e foi o que eu fiz. Entretanto tudo isso só foi possível graças aos ótimos ensinamentos do prefessor Jerê.</p>
                     
                </div>  
                
                 
                

            </div>
        </>
    )
}

export default AboutHero;