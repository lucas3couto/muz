import React, { useState } from 'react';
import differenceInYear from 'date-fns/differenceInYears';
import { useDispatch } from 'react-redux';
import { studentsCreateRequest } from 'store/modules/students/actions';
import General from './general';
import Address from './address';
import Parent from './parent';

export default function FormComponent() {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  function needParent(date) {
    const idade = differenceInYear(new Date(), new Date(date));
    if (idade < 18) {
      return true;
    }
    return false;
  }

  function handleData(row) {
    if (needParent(data.general.birth_date)) {
      const r = {
        first_name: row.parent.parent_first_name,
        last_name: row.parent.parent_last_name,
        email: row.parent.parent_email,
        rg: row.parent.parent_rg,
        cpf: row.parent.parent_cpf,
        phone: row.parent.parent_phone,
        birth_date: row.parent.parent_birth_date,
      };

      const nr = { ...data.general, address: data.address, parent: r };
      return nr;
    }
    const n = { ...data.general, address: data.address };
    return n;
  }

  function handleSubmit(row) {
    if (tab < 2) {
      const newData = Object.assign(data, row);
      setData(newData);
      setTab(tab + 1);
    } else {
      const up = handleData(row);
      dispatch(studentsCreateRequest(up));
    }
  }

  function renderForm() {
    if (tab === 0) return <General onSubmit={handleSubmit} />;
    if (tab === 1) return <Address onSubmit={handleSubmit} />;
    if (tab === 2)
      return <Parent needParent={needParent(data.general.birth_date)} onSubmit={handleSubmit} />;
    return <div />;
  }

  return <div>{renderForm()}</div>;
}
