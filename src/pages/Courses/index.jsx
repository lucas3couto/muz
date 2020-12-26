import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Page from 'components/Page';
import Header from 'components/PageHeader';
import Button from 'components/Button';
import { coursesListRequest } from 'store/modules/courses/actions';
import Grid from './Grid';
import Modal from './Add';

export default function Collaborators() {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.data);
  const [open, setOpen] = useState(null);
  const [row, setRow] = useState(null);

  useEffect(() => {
    dispatch(coursesListRequest());
  }, []);

  const handleSubmit = data => {
    setRow(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setRow(null);
  };

  return (
    <>
      <>
        <Header title="Cursos">
          <Button secondary small onClick={() => setOpen(true)}>
            Novo
          </Button>
        </Header>
        <Page>
          {courses.length > 0 ? (
            <Grid handleSubmit={handleSubmit} data={courses} />
          ) : (
            <p>Nenhum curso adicionado</p>
          )}
        </Page>
        <Modal row={row} open={open} handleClose={handleClose} />
      </>
    </>
  );
}
