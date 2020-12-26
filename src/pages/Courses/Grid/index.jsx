import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import * as S from './styled';

export default function GridComponent({ data, handleSubmit }) {
  return (
    <Grid container spacing={3}>
      {data.map(({ name, _id, description }) => (
        <Grid key={_id} item xs={12} md={4}>
          <Card>
            <S.Title>{name}</S.Title>
            <S.Description>{description}</S.Description>
            <Button
              onClick={() => handleSubmit({ _id, name, description })}
              style={{ width: '40%' }}
              primary
            >
              Exibir
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

GridComponent.propTypes = {
  data: PropTypes.array,
  handleSubmit: PropTypes.func,
};
