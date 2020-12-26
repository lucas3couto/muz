import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Card({ children, ...props }) {
  return <S.Card {...props}>{children}</S.Card>;
}

Card.propTypes = {
  children: PropTypes.element.isRequired,
};
