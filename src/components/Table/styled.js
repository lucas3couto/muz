import styled from 'styled-components';

export const Table = styled.div`
  display: block;
  max-width: 100%;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
  background: #fff;
  border-radius: 0.375rem;

  table {
    width: 100%;
    border-spacing: 0;

    thead {
      th {
        color: #8898aa;
        background-color: #f6f9fc;
      }

      tr {
        font-size: 16px;
        text-align: left;
      }
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
    }

    th,
    td {
      margin: 0;
      height: 50px;
      border-bottom: 1px solid #f5f5f5;
      padding: 0 20px;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

export const TableWrap = styled.div`
  display: block;
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;
