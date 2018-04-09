import React from 'react';
import './sobre.css';
import Instalar from './../instalar.png';

export default Sobre => (
    <div class="">
        <div class="secao1">
            <div class="secao">
                <div class="secao1"><h2 > React </h2></div>
                <h5 class="definicao">
                    “Uma biblioteca JavaScript declarativa, eficiente e flexível para a criação de interfaces 
                    de usuário (UI)”.
                </h5>
            </div>
        </div>
        <divider></divider>
        <div class="texto">
            <p>Surgiu em 2011 com o Facebook e desde então é usada em seu feed de notícias. 
            React não é um framework, ou seja, quem dita com algo deve ser feito é o próprio 
            desenvolvedor, chamando as funcionalidades desejadas, para resolver problemas específicos,
            apenas quando julgar necessário. Bibliotecas acabam, portanto, sendo mais flexíveis e menos
            complexas do que os frameworks.</p>

            <p><b>Resumindo: a preocupação do React é organizar o 
            que será mostrado na tela para o usuário final.</b></p>
        </div> 

        <div class="row">
            <div class="col s4 "> 
                <div>
                    <h5 class="titulo-col">React é uma linguagem declarativa </h5>
                    <p class="titulo-col">Linguagem utilizada é JavaScript. A biblioteca se preocupa apenas com o que o 
                    programador quer fazer para gerar a interface de usuário.</p>
                </div>
            </div>
            <div class="col s4 ">
                <div class="titulo-texto">
                    <h5 class="">Em React tudo é componente! </h5>
                    <p class="">O código é separado em pequenas partes, <br/>gerando 
                    componentes reutilizáveis.</p>
                </div>
            </div>
            <div class="col s3">
                <div class="">
                    <h5 class="">React é eficiente</h5>
                    <p class="">Possui Virtual DOM, garantindo que
                     somente os componentes que mudaram de estado são atualizados.                                                       
                    </p>
                </div>
            </div>
        </div>
        <div className="instalacao">
            <h5 class="definicao">
                Como instalar: 
            </h5>
            <img src={Instalar}></img>
        </div>
    </div>

)