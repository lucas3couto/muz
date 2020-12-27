import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import { menu } from './menu';
import PropTypes from 'prop-types'

export default function Sidebar({ open }) {
  return (
    <S.Aside open={open} >
      <S.Scroll>
        <S.Header />
        <S.Content>
          <ul>
            {menu.map(({ item, link, icon }, idx) => (
              <li key={idx}>
                <Link to={link}>
                  {icon}
                  <span>{item}</span>
                </Link>
              </li>
            ))}
          </ul>
        </S.Content>
      </S.Scroll>
    </S.Aside>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool
}