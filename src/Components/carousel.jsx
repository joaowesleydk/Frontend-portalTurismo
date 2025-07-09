import React from "react";
import CardService from "./cardService";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


import Predios from "../assets/imagens/Predios.png";
import Cristo from "../assets/imagens/Cristo.png";
import Castelo from "../assets/imagens/Castelo.png";
import Coliseu from "../assets/imagens/Coliseu.png";
import Ponte from "../assets/imagens/Ponte.png";
import Florianopolis from "../assets/imagens/Florianopolis.png";


const tourist_places = [
    { Image: Predios, title: "Hotéis incríveis ", description: "Com vista pra toda cidade." },
    { Image: Cristo, title: "Cristo Redentor", description: "É o melhor lugar pra se tirar fotos e ver a paisagem." },
    { Image: Castelo, title: "Castelo Italiano", description: "Volte aos tempos medievais." },
    { Image: Coliseu, title: "Antiga Arena de Gladiadores em Roma", description: "Melhor lugar para comprar presentes antigos." },
    { Image: Ponte, title: "Ponte futurista", description: "Onde você sai do presente." },
    { Image: Florianopolis, title: "Casa patrimônio de Florianópolis", description: "Venha prestigiar e admirar a história dessa cidade." },
];

const Carousel = () => {
    return (
        <div className="relative z-10 h-[900]">
            <h1 className="text-3xl font-bold text-center mt-32 text-white drop-shadow-lg">
                Pontos turísticos locais mais visitados
            </h1>
            <div className="mt-10">
                <Swiper
                    modules={[Autoplay,]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView="auto"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {tourist_places.map((place, index) => (
                        <SwiperSlide key={index}>
                            <CardService
                                img={place.Image}
                                alt={place.description}
                                titulo={place.title}
                                descricao={place.description}
                                link="#"
                                botao="Saiba Mais"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Carousel;
