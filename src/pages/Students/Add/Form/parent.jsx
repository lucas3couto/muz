import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { Grid } from '@material-ui/core';
import Input from 'components/Input';
import Mask from 'components/InputMask';
import Button from 'components/Button';
import Datepicker from 'components/DatePicker';
import PropTypes from 'prop-types';

export default function FormComponent({ onSubmit, needParent }) {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      if (needParent) {
        const schema = Yup.object().shape({
          parent_email: Yup.string()
            .email()
            .required('Insira o email'),
          parent_first_name: Yup.string().required('Insira o primeiro nome'),
          parent_last_name: Yup.string().required('Insira o sobrenome'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
      }

      // Validation passed
      onSubmit({ parent: data });
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
          <h1>Responsável</h1>
          {needParent ? (
            <p>Aluno possúi menos de 18 anos e necessita de um responsável.</p>
          ) : (
            <p>Aluno é maior de idade e não precisa de um responsável.</p>
          )}
        </Grid>
        {needParent && (
          <>
            <Grid item xs={12} md={6}>
              <Input name="parent_first_name" placeholder="Primeiro nome do responsável" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input name="parent_last_name" placeholder="Último nome" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input name="parent_email" placeholder="Email" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Mask name="parent_rg" placeholder="RG" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Mask name="parent_cpf" placeholder="CPF" mask="999.999.999.99" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Datepicker
                dateFormat="dd/MM/yyyy"
                locale="pt-BR"
                name="parent_birth_date"
                placeholder="Data de nascimento"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Mask name="parent_phone" placeholder="Telefone" mask="(99) 9999-9999" />
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <Button primary type="submit">
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Form>
  );
}

FormComponent.propTypes = {
  needParent: PropTypes.bool,
  onSubmit: PropTypes.func,
};
