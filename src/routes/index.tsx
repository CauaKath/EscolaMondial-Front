import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/index'));
const Alunos = lazy(() => import('../pages/Alunos/index'));
const Notfound = lazy(() => import('../pages/notfound/index'));

const Routes: React.FC = () => (
  <Suspense fallback={<div>Carregando...</div>}>
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/alunos" exact component={Alunos} />
      <Route path="*" exact component={Notfound} />
    </Switch>
  </Suspense>
);

export default Routes;
