import React from "react";
import { Link  } from 'react-router-dom';
import "./Home.css";
import "../Quemsou/Quemsou.css";
import "../Servico/servico.css";
import Carousel from "../../Componentes/Carousel.js";
import { countries } from "../../Componentes/Data";
import { Button} from "../../Componentes/Button/Button.js";
import Imagemraf from "../Quemsou/IMG_0489.png";
import Efectnovo from "./efectnov.png";
import Imga from "./whatsapp.png"





const Home = () => {
  return (
    <>
    <div id=" div-fixa" className=" flutuar" data-skrink="yes">

<Link  href=""  target="_blank">

<div className="flex-itens" >
    
    <img  src={Imga} alt="Agende sua Consulta no whatsapp" />

    <span>Agende sua Consulta</span>
</div>  </Link>

</div>
   <div className="homestyle">
 
 
        <div className= "banner01">
            <span> Rafaelle Dias</span>
            <h3>Nutricionista</h3>
            <h4 className="Crn">CRN 43895</h4>
            <div className=" Conteudo-home">
          <h5 >
         
            Saúde, Qualidade de Vida e Longevidade
          </h5>
        </div>
        
        </div>
        {/* Carousel */}
         <div className="imge">
          <img src={Efectnovo} alt="" /> 
        </div>
        
        <Carousel images={countries} />
       
      </div>

      < section className="Quemsou">
        
          
          
      
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
         <Link to=""> <Button type="button"  id="Saiba mais sobre mim"  ></Button></Link>
         
        </div>
      
        <img src={ Imagemraf} alt=""/>
       
        
      </section>
      <section className="Servicos" >
        <div className="Serv-card">
          <h2>Serviço em Nutrição</h2>
      
      <small>NOSSAS SOLUÇÕES PARA VOCÊ</small>
     
      <p>Cada paciente que chega em nosso consultório possui um objetivo e uma expectativa diferente em face da uma dieta e de uma mudança corporal.
         Oferecemos serviços que possam atender à ampla maioria dos desejos (como ganha de massa muscular ou definição/perda de gordura) tendo sempre 
         por base um programa nutricional exclusivo .</p>

        <span>Dentro do serviço de “consultoria em nutrição” descubra aqui aquele que mais se adequa 
        às suas necessidades e então agende sua consulta presencial/on-line.</span>
       <Link to="/sevico01"> <Button type="button"  id="Serviços Oferecidos" onClick={(e) => (e)} ></Button></Link>
       </div>
        
      </section>
    </>
  );
};

export default Home;
