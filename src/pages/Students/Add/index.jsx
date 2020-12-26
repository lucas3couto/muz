import React from 'react';
import Page from 'components/Page';
import Header from 'components/PageHeader';
import Card from 'components/Card';
import Form from './Form';

export default function Collaborators() {
  return (
    <>
      <Header title="Alunos" />
      <Page>
        <Card style={{ padding: 50 }}>
          <Form />
        </Card>
      </Page>
    </>
  );
}
