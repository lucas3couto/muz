import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Grid } from '@material-ui/core';
import Input from 'components/Input';
import Mask from 'components/InputMask';
import Button from 'components/Button';
import PropTypes from 'prop-types';

export default function FormComponent({ onSubmit }) {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        address: Yup.string().required('Insira o endereço'),
        city: Yup.string().required('Insira a cidade'),
        neighborhood: Yup.string().required('Insira o bairro'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      onSubmit({ address: data });
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
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Grid spacing={3} container>
        <Grid item xs={12} md={6}>
          <Input name="address" placeholder="Endereço" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input name="neighborhood" placeholder="Bairro" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input name="city" placeholder="Cidade" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Mask name="zipe_code" placeholder="CEP" mask="99.999-999" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input name="state" placeholder="Estado" />
        </Grid>

        <Grid item xs={12} md={6}>
          <Input name="country" placeholder="País" />
        </Grid>
        <Grid item xs={12}>
          <Button primary type="submit">
            Avançar
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
}

FormComponent.propTypes = {
  onSubmit: PropTypes.func,
};
