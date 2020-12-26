import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';
import Modal from '../../../components/Modal';
import Form from './Form';

export default function AddCourse({ open, handleClose, row }) {
  return (
    <Modal open={open} handleClose={handleClose}>
      <S.Header>
        <h1>{row ? 'Editar curso' : 'Adicionar novo curso'}</h1>
      </S.Header>
      <Form row={row} handleClose={handleClose} />
    </Modal>
  );
}

AddCourse.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
  row: PropTypes.object,
};
