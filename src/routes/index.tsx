import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * Configuração das rotas da aplicação
 */

const Home = lazy(() => import('../pages/Home/index'));
const Alunos = lazy(() => import('../pages/Alunos/index'));
const Chamada = lazy(() => import('../pages/Chamada/index'));

const Routes: React.FC = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/alunos" exact component={Alunos} />
      <Route path="/chamada" exact component={Chamada} />
    </Switch>
  </Suspense>
);

export default Routes;
