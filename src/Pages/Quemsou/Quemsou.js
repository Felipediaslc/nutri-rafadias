import React from "react";

import "../Home/Home.css";
import { Link  } from 'react-router-dom';
import { Button} from "../../Componentes/Button/Button"
import  Quemimag from "./IMG_0489.png"



const Quemsou = () => {
   
    
  return (
    
     
    <section className="Quemsou">
    <div className=" Conteudo">
      <div className="Conteudo-text">
      <h2>Quem Sou</h2>
     <h4>Nutricionista por paixão e amor a profissão.</h4>
    <span > A palavra equilíbrio sempre me acompanha e levo em conta as individualidades da paciente,
    acolhendo-a de forma singular, notando suas nuances, estilo de vida, desejos e dúvidas.
    </span>
    <Link to="/quem02"> <Button type="button"  id="Saiba mais sobre mim"  ></Button></Link>
    </div>
    </div>
    <div className="quemsou-imagem">
      <div className="SouImg">
   <img src={Quemimag} alt=""/>
   </div>
    </div>
  </section>
      
    
  );
};

export default Quemsou;