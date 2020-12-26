import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import ReactInputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Input({ name, Icon, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <S.Wrapper>
      <S.Input>
        {Icon && <Icon />}
        <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest} />
      </S.Input>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
}

Input.propTypes = {
  Icon: PropTypes.element,
  name: PropTypes.string,
};
