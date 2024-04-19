import React from "react";

import "./Quemsou.css";

import { Button} from "../../Componentes/Button/Button"
import Imagemraf from "./IMG_0489.png"



const Quemsou = () => {
   
    
  return (
    
     
      <section className="Quemsou">
        
          
          
      
        <div className=" Conteudo">
          <h2>Quem Sou</h2>
          <p className=" ">
            Sou Rafaele Dias xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Quem sou eu além
            daquele que fui? Perdido entre florestas e sombras de ilusão Guiado
            por pequenos passos invisíveis de amor Jogado aos chutes pelo ódio
            do opressor Salvo pelas mãos delicadas de anjos. Reerguido, mais
            forte, redimido, Anjos salvei Por justiça lutei. E o amor novamente
            busquei.
          </p>
          <Button type="button"  id="Saiba mais sobre mim" onClick="" ></Button>
        </div>
      
        <img src={ Imagemraf} alt=""/>
       
       
      </section>
      
    
  );
};

export default Quemsou;