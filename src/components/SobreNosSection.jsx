import React from "react";
import { useNavigate } from 'react-router-dom';


function SobreNosSection() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sobrenos');
  };
  
  return (
    <section className="flex flex-col text-justify justify-center items-center w-screen mt-12 mb-12">
      <h1 className="text-greeny text-7xl mb-12">Sobre Nós</h1>
      <p className="mb-8 first-letter:text-5xl first-letter:text-greeny w-[350px] lg:w-[1000px]">
        {" "}
        A UH Clínica Veterinária é uma instituição comprometida com a excelência 
        em cuidados veterinários e bem-estar animal. 
        Nossa equipe é formada por profissionais altamente qualificados, 
        dedicados a proporcionar atendimento compassivo e personalizado a todos 
        os nossos pacientes de quatro patas. Com uma abordagem centrada no paciente, 
        buscamos oferecer serviços veterinários de alta qualidade, utilizando 
        as mais recentes inovações e práticas baseadas em evidências. 
        Nosso objetivo é promover a saúde e o conforto dos animais, 
        garantindo um ambiente acolhedor e seguro para todos que confiam 
        em nossos cuidados veterinários.
      </p>
      <p className="min-[200px]:w-[350px] lg:w-[1000px]">
      Nossa equipe de profissionais apaixonados pela saúde animal está pronta para 
      proporcionar atendimento compassivo e personalizado. Com especialistas em 
      diversas áreas da medicina veterinária, garantimos excelência clínica em cada 
      consulta e procedimento, sempre visando o conforto e a felicidade dos 
      nossos pacientes peludos.
      Venha fazer parte da nossa família! Estamos aqui para celebrar a alegria de ter animais 
      de estimação e para garantir que cada momento ao lado deles seja repleto de saúde, amor e 
      diversão. Seja bem-vindo à UH Clínica Veterinária, onde o cuidado vai além da medicina, 
      é uma expressão sincera de amor pelos animais.
      </p>
      <button onClick={handleClick} className="bg-greeny w-[250px] h-[40px] rounded-full mt-4 hover:bg-black text-white text-2xl">
        Ver Mais
      </button>
    </section>
  );
}

export default SobreNosSection;
