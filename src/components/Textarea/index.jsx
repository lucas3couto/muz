import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
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
    });
  }, [fieldName, registerField]);

  return (
    <S.Wrapper>
      <S.Input>
        {Icon && <Icon />}
        <textarea ref={inputRef} defaultValue={defaultValue} {...rest} />
      </S.Input>
      {error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  );
}

Input.propTypes = {
  Icon: PropTypes.element,
  name: PropTypes.string,
};
