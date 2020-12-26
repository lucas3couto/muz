import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

export default function Template({ children }) {
  return (
    <div>
      <Sidebar />
      <Main>
        <Navbar />
        {children}
      </Main>
    </div>
  );
}

export const Main = styled.div`
  margin-left: 250px;
  transition: all 0.15s ease;
`;

Template.propTypes = {
  children: PropTypes.element.isRequired,
};
