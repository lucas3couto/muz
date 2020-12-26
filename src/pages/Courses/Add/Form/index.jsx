import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Button from 'components/Button';
import { coursesCreateRequest, coursesUpdateRequest } from 'store/modules/courses/actions';
import PropTypes from 'prop-types';

export default function FormComponent({ handleClose, row }) {
  const formRef = useRef(null);
  const dispatch = useDispatch();

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        description: Yup.string().required('Insira o sobrenome'),
        name: Yup.string().required('Insira o primeiro nome'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      if (row) {
        dispatch(
          coursesUpdateRequest({
            _id: row._id,
            ...data,
          }),
        );
      } else {
        dispatch(coursesCreateRequest(data));
      }
      handleClose();
    } catch (err) {
      const validationErrors = {};
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        formRef.current.setErrors(validationErrors);
      }
    }
  }

  return (
    <Form initialData={row && row} ref={formRef} onSubmit={handleSubmit}>
      <Grid spacing={3} container>
        <Grid item xs={12}>
          <Input name="name" placeholder="Nome do curso" />
        </Grid>
        <Grid item xs={12}>
          <Textarea name="description" placeholder="Descrição" rows="5" />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" primary>
            {row ? 'Editar' : 'Salvar'}
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
}

FormComponent.propTypes = {
  handleClose: PropTypes.func,
  row: PropTypes.object,
};
