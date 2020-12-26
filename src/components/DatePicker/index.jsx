import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useField } from '@unform/core';
import 'react-datepicker/dist/react-datepicker.css';
import { MdDateRange } from 'react-icons/md';
import PropTypes from 'prop-types';
import * as S from './styled';

const DatePicker = ({ name, placeholder, ...rest }) => {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [date, setDate] = useState(defaultValue || null);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      clearValue: (ref: any) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);
  return (
    <>
      <S.Wrapper>
        <S.Input>
          <ReactDatePicker
            className="date"
            ref={datepickerRef}
            selected={date}
            onChange={setDate}
            placeholderText={placeholder}
            {...rest}
          />
          <MdDateRange />
        </S.Input>
      </S.Wrapper>
      <S.Error>{error}</S.Error>
    </>
  );
};
export default DatePicker;

DatePicker.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
};
