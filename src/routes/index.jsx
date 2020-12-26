import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import Collaborators from '../pages/Collaborators';
import Courses from '../pages/Courses';
import Students from '../pages/Students';

export default function Routes() {
  return (
    <Switch>
      <Route path="/entrar" exact component={SignIn} />
      <Route path="/" exact component={Dashboard} isPrivate />
      <Route path="/colaboradores" exact component={Collaborators} isPrivate />
      <Route path="cursos/" exact component={Courses} isPrivate />
      <Route path="/alunos" exact component={Students} isPrivate />
    </Switch>
  );
}
