import React, { useRef, useEffect } from 'react';
import ReactSelect, { OptionTypeBase } from 'react-select';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';
import * as S from './styled';

const customStyles = {
  control: base => ({
    ...base,
    border: 0,
    outline: 'none',
    boxShadow: 'none',
    background: 'transparent',
    // You can also use state.isFocused to conditionally style based on the focus state
  }),
};

const Select = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <>
      <S.Wrapper>
        <S.Input>
          <ReactSelect
            defaultValue={defaultValue}
            ref={selectRef}
            classNamePrefix="react-select"
            styles={customStyles}
            {...rest}
          />
        </S.Input>
      </S.Wrapper>
      <S.Error>{error}</S.Error>
    </>
  );
};
export default Select;

Select.propTypes = {
  name: PropTypes.string.isRequired,
};
