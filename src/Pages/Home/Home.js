import React from "react";
import "./Home.css";
import "../Servico/servico.css";
import Carousel from "../../Componentes/Carousel.js";
import { countries } from "../../Componentes/Data";
import Efectnovo from "./efectnov.png";
import Imga from "./whatsapp.png";
import Quemimag from "../Quemsou/IMG_0489.png";
import { Button} from "../../Componentes/Button/Button.js";
import { Link  } from 'react-router-dom';


const Home = () => {


  return (
    <>
    <div id="fixa" className=" flutuar" data-skrink="yes">
    <a href="https://api.whatsapp.com/message/DAGJBXKY5RQVP1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer" >
    <div className="flex-itens" >    
    <img  src={Imga} alt="Agende sua Consulta no whatsapp" />
    <span>Agende sua Consulta</span>
    </div> </a>  
    </div>


   <section className="homestyle">
        <div className="cardy-esquerdo">
            <span> Rafaelle Dias</span>
            <h3>Nutricionista</h3>
            <h4 >CRN 43895</h4>
            <h5> Saúde, Qualidade de Vida e Longevidade </h5>
        </div>
        <div className="cardy-direito">

      <Carousel  images={countries} />
        </div>
      <div className="cardy-rody">
      <div className="imge">
          <img src={Efectnovo} alt="" /> 
        </div>
      </div>
        
      </section>



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







      <section className="Servicos" >
          <div className="Serv-card">
          <h2>Serviço em Nutrição</h2>
      
          <small>Nossas Soluções para você</small>
     
          <p>Cada paciente que chega em nosso consultório possui um objetivo e uma expectativa diferente em face da uma dieta e de uma mudança corporal.
           Oferecemos serviços que possam atender à ampla maioria dos desejos (como ganha de massa muscular ou definição/perda de gordura) tendo sempre 
           por base um programa nutricional exclusivo .</p>

         <span>Dentro do serviço de “consultoria em nutrição” descubra aqui aquele que mais se adequa 
          às suas necessidades e então agende sua consulta presencial/on-line.</span>
         <Link to="/sevico01"> <Button type="button"  id="Serviços Oferecidos" onClick={(e) => (e)} ></Button></Link>
         </div>
      </section>



      <section className="Consulta" >
        <div className="Consult-card">
        <h2>Consulta</h2>
        <p>As consultas visam promover conscientização e reeducação alimentar. Vou te guiar, dar suporte e te acompanhar em todo o processo. Uma relação de parceria com decisões compartilhadas.
Avaliação clínica é realizada na primeira parte da consulta e são determinadas as metas e objetivos individuais, para que um planejamento alimentar personalizado possa ser definido a 4 mãos.
Em todos os atendimentos trabalhamos os 6 pilares do estilo de vida.
São também indicados, quando necessário, suplementos vitamínicos, minerais, fitoterápicos ou aminoácidos, de acordo com o objetivo e meta definidos.
Outro ponto importante é a sugestão de receitas e indicações de marcas e fornecedores, dicas de deliverys, cozinheira e tudo mais que for importante para colocar em prática o plano alimentar.
A cada nova consulta, avaliaremos e redefiniremos as novas metas, de acordo com os resultados obtidos.
</p>

<span>Acredito que o segredo para uma vida plena é se apaixonar pela alimentação e estilo de vida saudável, 
assim, esse processo se torna natural e espontâneo, sem a necessidade de fazer dietas restritivas.
Meu objetivo é guiar você nesse lindo processo, trazendo mais consciência e conhecimento. </span>
      
        </div>
        
        </section>
    </>
  );
};

export default Home;
