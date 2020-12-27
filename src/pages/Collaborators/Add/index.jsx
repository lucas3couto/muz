import React from 'react';
import Page from 'components/Page';
import Header from 'components/PageHeader';
import Card from 'components/Card';
import styled from 'styled-components';
import Form from './Form';

export default function Collaborators() {
  return (
    <>
      <Header title="Colaboradores" />
      <Page>
        <CardComp>
          <Form />
        </CardComp>
      </Page>
    </>
  );
}

const CardComp = styled(Card)`
  padding: 20px;

  @media (min-width: 768px) {
    padding: 50px;
  }
`;
