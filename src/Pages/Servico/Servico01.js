import React from "react";
import "./servico.css";

import NutriEsportivo from "./images01.jpeg"
import NutriEstetica from "./nutricao-aliada.jpg";
import Nutricomport from "./nutricao-comportamental.jpg"
import Saudemulher  from "./alimentos.jpg";
import Intolerancia from "./Alergia_e_Intolerancia.png"
import Emagrecimento from "./emagrecimento.jpeg"


const Servico01 = () => {
  return (
    <>
      
      <section className="Servicos01">
      <div className="Sub-card">
      <h2>Serviços Oferecidos</h2>
      <small>Qual o seu objetivo?</small>
            <span>Conheça as minhas especialidades, entenda como cada uma delas pode te ajudar, saiba como funcionam
         e quais os objetivos de cada uma. Apos uma anmenese completa , avaliação nutricional e antropometrica
         e fechado um diagnostico do seu  estado nutricional, iremos traçar metas e estrategias nutricionais
         individualizadas para alcançar os seus objetivos.</span>
         </div>
      <div class=" card-container">
        <div class="card">
          <img src={NutriEsportivo} alt="" />
           <div class="card-coment">
              <h1>Nutrição Esportiva</h1>
              <p> A obesidade já é considerada um dos principais problemas de saúde pública no Brasil e no mundo. A nutrição possui papel fundamental na reversão do quadro e promoção de saúde e qualidade de vida.
              </p>
              
           </div>
        </div>
        <div class="card">
          <img src={NutriEstetica} alt="" />
           <div class="card-coment">
              <h1>Nutrição Estética</h1>
              <p>Tem como intuito o tratamento de desequilíbrios causados pelo excesso ou pela carência nutricional de cada indivíduo, a partir do desenvolvimento de um cardápio balanceado e individualizado.
              </p>
             
           </div>
        </div>
        <div class="card">
          <img src={Nutricomport} alt="" />
           <div class="card-coment">
              <h1> Nutrição Comportamental</h1>
              <p>A obesidade já é considerada um dos principais problemas de saúde pública no Brasil e no mundo.
                 A nutrição possui papel fundamental na reversão do quadro e promoção de saúde e qualidade de vida.
              </p>
              
           </div>
        </div>

        <div class="card">
          <img src={Saudemulher} alt="" />
           <div class="card-coment">
              <h1>Saúde da Mulher</h1>
              <p>Existem diversos tipos de intolerância e alergia alimentar. A nutrição tem como objetivo analisar quais alimentos causam alergia ou intolerância ao paciente e orientá-lo,
                 indicando uma dieta adequada e individualizada. 
              </p>
              
           </div>
        </div>
        <div class="card">
          <img src={Emagrecimento} alt="" />
           <div class="card-coment">
              <h1>Emagrecimento e Obesidade</h1>
              <p>Relaciona a melhora dos resultados de tratamentos estéticos com a conduta nutricional aplicada, a partir do conceito de que a beleza começa de dentro.
              </p>
              
           </div>
        </div>
        <div class="card">
          <img src={Intolerancia} alt="" />
           <div class="card-coment">
              <h1>Intolerância e Alergia Alimentar </h1>
              <p>Aplicação dos conhecimentos em nutrição, bioquímica e fisiologia na área do esporte, a fim de manter o equilíbrio das necessidades energéticas,
                 através da indicação de nutrientes necessários a cada organismo, conforme a modalidade.
              </p>
              
           </div>
        </div>
    </div>
      </section>
    </>
  );
};

export default Servico01;