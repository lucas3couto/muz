import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdEdit } from 'react-icons/md';
import Page from 'components/Page';
import Header from 'components/PageHeader';
import Button from 'components/Button';
import history from 'services/history';
import Table from 'components/Table';
import { studentsListRequest } from 'store/modules/students/actions';
import { columns } from './columns';
import * as S from './styled';

export default function Students() {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students.data);

  useEffect(() => {
    dispatch(studentsListRequest());
  }, []);

  function roleCellFunc(data) {
    if (data === 'admin') return 'Administrador';
    if (data === 'instructor') return 'Professor';
    return data;
  }

  columns.forEach(row => {
    if (row.accessor === 'name') {
      row.Cell = r => <div>{`${r.row.original.first_name} ${r.row.original.last_name}`}</div>;
    } else if (row.accessor === 'role') {
      row.Cell = r => <div>{roleCellFunc(r.row.original.role)}</div>;
    } else if (row.accessor === 'status') {
      row.Cell = r => (
        <S.StatusWrapper>
          <S.Status active={r.row.original.status} />
          {r.row.original.status ? 'Ativo' : 'Inativo'}
        </S.StatusWrapper>
      );
    } else if (row.accessor === 'action') {
      row.Cell = () => (
        <div style={{ cursor: 'pointer' }}>
          <MdEdit color="#adb5bd" />
        </div>
      );
    }
  });

  return (
    <>
      <Header title="Alunos">
        <Button secondary small onClick={() => history.push('/alunos/adicionar')}>
          Novo
        </Button>
      </Header>
      <Page>{students.length > 0 && <Table columns={columns} data={students} />}</Page>
    </>
  );
}
