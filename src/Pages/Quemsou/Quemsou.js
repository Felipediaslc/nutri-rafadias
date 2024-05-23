import React from "react";


import { Link  } from 'react-router-dom';
import { Button} from "../../Componentes/Button/Button"
import Imagemraf from "./IMG_0489.png"



const Quemsou = () => {
   
    
  return (
    
     
      <section className="Quemsou">
        
          
          
      
        <div className=" Conteudo">
          <h2>Quem Sou</h2>
          <p><strong>Nutricionista por paixão e amor a profissão.</strong></p>
         <span > A palavra equilíbrio sempre me acompanha e levo em conta as individualidades da paciente,
           acolhendo-a de forma singular, notando suas nuances, estilo de vida, desejos e dúvidas.
          </span>
          <Link to="/quem02"><Button type="button"  id="Saiba mais sobre mim" onClick="" ></Button></Link>
        </div>
      
        <img src={ Imagemraf} alt=""/>
       
       
      </section>
      
    
  );
};

export default Quemsou;