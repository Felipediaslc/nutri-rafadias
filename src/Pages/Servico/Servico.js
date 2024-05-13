import React from "react";
import { Link  } from 'react-router-dom';
import "../Home/Home.css";
import { Button} from "../../Componentes/Button/Button"




const Servico = () => {
  return (
    
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
      
    
  );
};

export default Servico;