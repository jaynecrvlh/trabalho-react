import React from 'react';
import './componente.css';
import Funcao1 from '.././componentefuncao1.png';
import Funcao2 from '.././componentefuncao2.png';
import Class1 from '.././classcomponent.png';
import Class2 from '.././classcomponent2.png';
import AppImg from '.././app.png';
import StateImg from '.././state.png';


export default Componente => (
    <div >
        <h3 className="secao-comp"> Componente React </h3>
        <p className="descricao">"O componente serve para dividir a UI em partes independentes e reutilizáveis, 
            além de permitir se pensar em cada parte isoladamente.
            Componentes possuem diversos formatos diferentes, assim como responsabilidades. 
            Eles podem ser desde um botão, até uma página inteira.
        </p>
        <div className="row">
            <div class="col s4"> 
                <div>
                    <h5 class="">JSX </h5>
                    <p class="">Os componentes do React não utilizam HTML, a marcação é feita no próprio 
                    JavaScript, em uma sintaxe baseada em XML chamada JSX. Existem algumas diferenças entre 
                    o JSX e o HTML, como:     
                    </p>
                    <p>- Todas as tags devem ser fechadas</p>
                    <p>- É possível colocar expressões JavaScript dentro do JSX usando {'{ }'}</p>
                    <p>- Como o JSX fica dentro de arquivos ‘.js’ a palavra Class não pode ser usada, 
                            pois já é reservado do JavaScript. Em seu lugar, devemos usar className. </p>
                            <p>{" Ex.: <h1 className=“titulo”>Olá!</ h1>"}</p>
                            
                </div>
            </div>
            <div class="col s4">
                <div class="margin-comp">
                    <h5 class="">Extraindo Componentes - Reutilização </h5>
                    <p class="">Ao se ter um componente grande, com mais de uma funcionalidade em si, 
                    é recomendado dividir ele em diversos componentes menores. Isso pode parecer mais trabalhoso, 
                    mas ter uma grande variedade de componentes reutilizáveis compensa em projetos maiores. Por exemplo, 
                    em um componente de comentário, que contém comentario, informações do usuário e avatar, pode ser 
                    dividido em três, um componente para cada uma dessas funcionalidades.</p>
                </div>
            </div>
            <div class="col s4 ">
                <div class="margin-comp">
                    <h5 class="">Children</h5>
                    <p class="">Children são props diferentes das demais. Ela é o conteúdo dentro da tag.
                    <p> {'<div> Esse conteúdo será a prop children</div>'}</p>
                   
                    Existe outra forma de passar children, mais explicitamente, porém menos utilizada.
                    <p>{'<div children=’Esse conteúdo será a prop children’/> '}    </p>                                                  
                    </p>
                </div>
            </div>
        </div>
        <div className="tipos-comp">
            <div >
                <h5 className="">Os componentes podem ser criados de diversas formas</h5>
            </div>
            <div>
                <p className="titulos-secao descricao">Functional Components</p>
            </div>
            <p className="descricao">Forma mais simples de se definir um componentes, sendo basicamente uma função JavaScript. Ao contrário do componente de classe, não é necessário usar o método render(), se pode apenas retornar
	        Primeiro de tudo deve-se criar um arquivo .js dentro da pasta src. É nesse arquivo que você deve escrever sua componente, no caso aqui de exemplo, criamos uma função chamada Hello:
            </p>
            <div className="row">
                <div className="col s6">
                    <p className=""><b>Forma padão:</b></p>
                    <img src={Funcao1}></img>
                </div>  
                <div className="col s6">
                    <p className=""><b>Outra forma de criar, seria assim:</b></p>
                    <img src={Funcao2}></img>
                </div>   
            </div>
            <div>
                <p className="titulos-secao descricao">Class Components</p>
            </div>
            <p className="descricao">Componentes definidos como classe tem algumas funcionalidades a 
                mais, como state, que está disponível apenas para as classes, e será exemplificado mais 
                abaixo.
            </p>
            <div className="row">
                <div className="col s6">
                    <p className=""><b>Dentro da classe tem apenas um método, o render()</b></p>
                         <img src={Class1}></img>
                </div>  
                <div className="col s6">
                    <p className=""><b>Forma Abreviada</b></p>
                    <img src={Class2}></img>
                </div>   
            </div>
            <div>
            <p className="descricao">Dentro do componente App, no arquivo App.js, 
                você deve importar o componente que será renderizado pelo React:
                <div className="img-div">
                   <img className="img-image"src={AppImg}></img>
                </div>
            
            </p>
            </div>
        </div>   
        <div className="row">
            <div className="col s6">
                <h5 class="">Props - valores herdados </h5>
                <p class="">Props possuem valor estático, os Componentes nunca devem 
                modificar o valor do props.    
                </p>
            </div>
            <div className="col s6">
            <h5 class="">State - valores dinâmicos </h5>
                <p class="">O state está disponível apenas para componentes definidos como 
                classe e é usado em componentes interativos.
                </p>
            </div>
        </div>  
        <div>
            <p className="descricao">
            Um exemplo simples de um componente de Click, que se utiliza de state. 
            Ao contrário do props, o state mudará o seu valor, no exemplo a cada click esse valor 
            será incrementado.
            </p>
            <div className="img-state">
                 <img className="img" src={StateImg}></img>
            </div>
           
        </div>
    </div>
)