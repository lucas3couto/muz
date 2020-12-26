import React, { useRef } from 'react';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { MdEmail, MdLock } from 'react-icons/md';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styled';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { signInRequest } from '../../store/modules/auth/actions';

export default function Welcome() {
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string()
          .min(6)
          .required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // Validation passed
      dispatch(signInRequest(data));
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
    <S.Wrapper>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <S.Card>
          <S.CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Input Icon={() => <MdEmail />} name="email" type="email" />
              </Grid>
              <Grid item xs={12}>
                <Input Icon={() => <MdLock />} name="password" type="password" />
              </Grid>
              <Grid item xs={12}>
                <Button loading={loading} primary type="submit">
                  Entrar
                </Button>
              </Grid>
            </Grid>
          </S.CardContent>
        </S.Card>
      </Form>
    </S.Wrapper>
  );
}
