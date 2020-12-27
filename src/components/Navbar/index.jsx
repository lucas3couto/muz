import React from 'react';
import * as S from './styled';
import { RiMenu4Line } from 'react-icons/ri'
import PropTypes from 'prop-types'

export default function Navbar({ handleOpen }) {
  return <S.Navbar>
    <S.Menu onClick={handleOpen}>
    <RiMenu4Line />
    </S.Menu>
  </S.Navbar>;
}

Navbar.propTypes = {
  handleOpen: PropTypes.func
}
