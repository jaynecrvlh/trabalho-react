import React from 'react';
import '../sobre-react/sobre.css';
import Instalar from '.././roteamento.png';
import SobreRotas from '.././rotas.jpg';
import RotasAni from '.././rotasAni.png'

export default Roteamento => (
    <div>
        <h3 className="secao1">Roteamento</h3>
        <p className="texto">“React Router é uma biblioteca completa para controle de 
            rotas. Ela permite que você consiga configurar rotas utilizando o formato JSX e 
            também disponibiliza uma API para você configurar diretamente via Javascript.”
        </p>
        <div className="instalacao">
            <h5 class="definicao">
                Como instalar: 
            </h5>
            <img src={Instalar}></img>
        </div>
        <div>
            <h5 className="texto">Definição das rotas. Os componentes utilizados para essa definição 
            são o Router e o Route.</h5>

            <img className="img-r"src={SobreRotas}></img>
        </div>
        <div class="row">
            <div class="col s6"> 
                <div>
                    <h5 class="titulo-texto">Router </h5>
                    <h6 class="titulo-texto">Componente raiz, todas as rotas são definidas dentro dele.</h6>
                </div>
            </div>
            <div class="col s6">
                <div class="titulo-texto">
                    <h5 class="">Route </h5>
                    <h6 class="">Cada rota da aplicação. Espera o props como parâmetro.</h6>
                </div>
            </div>
        </div>
        <div className="instalacao">
            <h5 class="definicao">
                Rotas aninhadas 
            </h5>
            <h6>Existe a rota principal, e as rotas filhas, assim é possível navegar 
                tanto nas rotas filhas, quanto na rota principal.</h6>
            <img src={RotasAni}></img>
        </div>
        <div className="instalacao">
            <h5 class="definicao">History</h5>
            <h6 className="texto-his">Para aplicativos da Web de página única, pode ser útil armazenar o estado da 
                interface do usuário no URL. Isso permite que as pessoas enviem links para estados 
                específicos da interface do usuário e também para usar os botões Voltar e Avançar do 
                navegador para navegar pelo histórico de estados.</h6>
        </div>
    </div>
)