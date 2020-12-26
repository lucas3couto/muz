import React, { useEffect } from 'react';
import Page from 'components/Page';
import PageHeader from 'components/PageHeader';
import { useSelector, useDispatch } from 'react-redux';
import { collaboratorsListRequest } from 'store/modules/collaborators/actions';
import Table from 'components/Table';
import { MdEdit } from 'react-icons/md';
import Button from 'components/Button';
import history from 'services/history';
import { columns } from './columns';
import * as S from './styled';

const Dashboard = () => {
  const dispatch = useDispatch();
  const collaborators = useSelector(state => state.collaborators.data);

  useEffect(() => {
    dispatch(collaboratorsListRequest());
  }, []);

  function roleCellFunc(data) {
    if (data === 'admin') return 'Administrador';
    if (data === 'instructor') return 'Professor';
    return data;
  }

  columns.forEach(row => {
    if (row.accessor === 'name') {
      row.Cell = prop => (
        <div>{`${prop.row.original.first_name} ${prop.row.original.last_name}`}</div>
      );
    } else if (row.accessor === 'role') {
      row.Cell = prop => <div>{roleCellFunc(prop.row.original.role)}</div>;
    } else if (row.accessor === 'status') {
      row.Cell = prop => (
        <S.StatusWrapper>
          <S.Status />
          {prop.row.original.status ? 'Ativo' : 'Inativo'}
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
      {collaborators.length > 0 && (
        <>
          <PageHeader title="Colaboradores">
            <Button onClick={() => history.push('/colaboradores/adicionar')} secondary>
              Novo
            </Button>
          </PageHeader>
          <Page>
            <Table columns={columns} data={collaborators} />
          </Page>
        </>
      )}
    </>
  );
};

export default Dashboard;
