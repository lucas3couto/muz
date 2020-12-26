import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Grid } from '@material-ui/core';
import Input from 'components/Input';
import Mask from 'components/InputMask';
import Button from 'components/Button';
import Datepicker from 'components/DatePicker';
import PropTypes from 'prop-types';
import * as S from '../styled';

export default function FormComponent({ onSubmit }) {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required('Insira o email'),
        first_name: Yup.string().required('Insira o primeiro nome'),
        last_name: Yup.string().required('Insira o sobrenome'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      onSubmit({ general: data });
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
        <Grid item xs={12}>
          <S.Title>Informações Gerais</S.Title>
        </Grid>
        <Grid item xs={12} md={6}>
          <Input name="first_name" placeholder="Primeiro nome" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input name="last_name" placeholder="Último nome" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input name="email" placeholder="Email" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Mask name="rg" placeholder="RG" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Mask name="cpf" placeholder="CPF" mask="999.999.999.99" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Datepicker
            dateFormat="dd/MM/yyyy"
            locale="pt-BR"
            name="birth_date"
            placeholder="Data de nascimento"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Mask name="phone" placeholder="Telefone" mask="(99) 9999-9999" />
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
