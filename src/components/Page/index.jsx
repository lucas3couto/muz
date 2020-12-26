import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Page({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.div`
  padding: 30px;
`;

Page.propTypes = {
  children: PropTypes.element.isRequired,
};
