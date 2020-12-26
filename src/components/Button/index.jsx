import React from 'react';
import { CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Button({ children, loading, ...rest }) {
  return <S.Button {...rest}>{!loading ? children : <CircularProgress />}</S.Button>;
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  loading: PropTypes.bool,
};
