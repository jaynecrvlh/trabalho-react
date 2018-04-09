import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';
import Sobre from '../sobre-react/sobre';
import Componente from '../componente/componente';
import Roteamento from '../roteamento/roteamento';

export default Routes => (
    <Router history={ hashHistory }>
        <Route path='/sobre' component={ Sobre } />
        <Route path='/componente' component={ Componente } />
        <Route path='/roteamento' component={ Roteamento } />
        <Redirect from='*' to='/sobre'/>
    </Router>
)