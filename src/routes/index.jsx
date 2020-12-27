import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import Collaborators from '../pages/Collaborators';
import AddCollaborators from '../pages/Collaborators/Add';
import Courses from '../pages/Courses';
import Students from '../pages/Students';
import AddStudents from '../pages/Students/Add';

export default function Routes() {
  return (
    <Switch>
      <Route path="/entrar" component={SignIn} />
      <Route exact path="/" component={Dashboard} isPrivate />
      <Route exact path="/colaboradores" component={Collaborators} isPrivate />
      <Route path="/colaboradores/adicionar" component={AddCollaborators} isPrivate />
      <Route exact path="/cursos" component={Courses} isPrivate />
      <Route exact path="/alunos" component={Students} isPrivate />
      <Route path="/alunos/adicionar" component={AddStudents} isPrivate />
    </Switch>
  );
}
