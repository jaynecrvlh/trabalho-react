import React from 'react';
import './footer.css'

export default Footer => (
    <footer class=" footer"> 
        <div class="row">
            <div class="col s4">
                <ul>
                    <li><h6><a  target="blank" href="https://reactjs.org/">Documentação</a></h6></li>
                    <li><h6><a  target="blank" href="https://github.com/ReactTraining/react-router">Biblioteca rotas</a></h6></li>
                </ul>              
            </div>

            <div class="col s8">
                <ul>
                    <li><h6>Referencias:</h6></li>
                    <li><h6><a target="blank" href="https://br.udacity.com/blog/post/react-o-que-e-como-funciona"> Udacity </a></h6></li>
                    <li><h6><a target="blank" href="https://blog.coderockr.com/gerenciando-rotas-com-react-router-ed44ce1e8753"> Coderockr Way</a></h6></li>
                    <li><h6><a target="blank" href="https://imasters.com.br/front-end/iniciando-com-react-3-criando-componentes/?trace=1519021197&source=single">iMaster </a></h6></li>
                    <li><h6><a target="blank" href="https://tableless.com.br/criando-sua-primeira-aplicacao-web-com-react/"> Tableless </a></h6></li>
                </ul>  
            </div>
        </div>
        
    </footer>
)

