import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Page({ title, children }) {
  return (
    <Wrapper>
      <div>
        <Title>{title}</Title>
      </div>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 78px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  color: #32325d;
  margin: 0;
  font-size: 1.8rem;
`;

Page.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};
