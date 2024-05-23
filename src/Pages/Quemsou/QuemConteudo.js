import React from "react";

import "./QuemConteudo.css";
import Carousel02 from "../../Componentes/Car02/Carousel02.js";
import { countries02 } from "../../Componentes/Car02/Data02.js";
import { FaStethoscope } from "react-icons/fa6";

const QuemConteudo = () => {
  return (
    <section className="Quem-Conteudo">
      <div className="titulo-card"><h3>Sobre Rafaelle Dias</h3></div>

      <div className="texto-primeiro">
         <div className="text">
                    <h2>Nutricionista por <strong>paixão</strong> e <strong>amor a profissão</strong></h2>
                    <h3>Sou Rafaelle Dias, nutricionista formada pela Unifacisa em 2023  e pós graduanda em Nutrição esportiva e Saúde da  Mulher.
                     Possuo também formação em Química Industrial pela UEPBem 2010 com experiência em laboratório de analise e controle de qualidade de água 
                     e esgoto da Paraíba na CAGEPA</h3>
                     <p>A saúde é fundamental e está diretamente relacionada aos nossos hábitos alimentares.</p>
                     <p>Priorizo sempre a ingestão da “comida de verdade” no qual fazem parte os alimentos naturais,
                         por isso busco incentivar e orientar as pessoas a fazerem as melhores escolhas alimentares com equilíbrio e sabedoria, 
                         pois acredito que além dos alimentos proporcionarem momentos prazerosos são também capazes de tratar sintomas e curar doenças.</p>
                </div>
                     <div className="imagem-carossel">
                     <Carousel02 images={countries02 }/>
                      </div>
      </div>

      <div className="texto-segundo">
         <h3>A História</h3>
                  <p>Sempre fui uma criança e adolescente curiosa em pesquisar sobre alimentação, hábitos saudáveis,
                     receitas culinárias e novas preparações, composições e funções dos alimentos.
                      Conforme fui crescendo a minha paixão pela nutrição caminhava junto com o esporte e exercício físico
                      e na minha primeira graduação as disciplinas que envolviam alimentos me encantavam. 
                      Trabalhei anos em laboratório de analises químicas de controle e qualidade de água e 
                      sempre palestrando, estudando sobre a sua importância na nossa saúde, mas sempre com o sonho em 
                      ser nutricionista bem claro em meu coração. Dei uma pausa na minha vida profissional para ser mãe 
                      em tempo integral, realizado o sonho de ser mãe de dois, Marina e Paulo Neto, e como tudo é no tempo
                       de Deus utilizei o conhecimento adquirido na prática inicial em minha família, cuidando bem da introdução alimentar, rotina e hábitos.</p>

                       <span>Iniciei minha carreira profissional como nutricionista clínica de imediato após me formar. 
                        Onde atuo atualmente e sou muito realizada em cada um que busca meu atendimento. </span>
      </div>

      <div className="texto-terceiro">
          <h3>Missão, Diferenciais e Valores</h3>
             
             <div className=" card-container02">
             <div className="card02">
           
             <div class="card-coment02">
             <div className="icon02">
             <FaStethoscope />

             </div>
              <h1>Missão</h1>
              <p> De forma multidisciplinar, humanizada e personalizada busco proporcionar saúde
                 e bem estar aos meus pacientes entregando serviços que possibilite alcançar metas sustentáveis
                 e objetivos, transformando corpo, mente e autoestima.
              </p>
              
             </div>
             </div>
             <div class="card02">
          
             <div className="card-coment02">
             <div className="icon02">
             <ion-icon name="person-outline"></ion-icon>
             </div>
              <h1>Diferenciais</h1>
              <p>Acompanhamento nutricional individualizado focado nas necessidades e rotina de cada paciente.</p>
             
             </div>
             </div>
             <div className="card02">
          
             <div className="card-coment02">
             <div className="icon02">
             <ion-icon name="fitness-outline"></ion-icon>
             </div>
              <h1> Valores</h1>
              <p>Ter empatia, sensibilidade, respeito, ética, inovação e amor.</p>
              
             </div>
             </div>
             </div>
      </div>
    </section>
  );
};

export default QuemConteudo;
