import React from 'react';
import { MdDashboard, MdGroup, MdStar, MdViewDay } from 'react-icons/md';

export const menu = [
  {
    item: 'Dashboard',
    link: '/',
    icon: <MdDashboard />,
  },
  {
    item: 'Colaboradores',
    link: '/colaboradores',
    icon: <MdGroup />,
  },
  {
    item: 'Cursos',
    link: '/cursos',
    icon: <MdViewDay />,
  },
  {
    item: 'Alunos',
    link: '/alunos',
    icon: <MdStar />,
  },
];
