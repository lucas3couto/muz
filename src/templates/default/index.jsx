import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';

export default function Template({ children }) {

  const [open, setOpen] = useState(false)

  return (
    <div>
      <Sidebar open={open} />
      <Main>
        <Navbar handleOpen={() => setOpen(!open)} />
        {children}
      </Main>
    </div>
  );
}

export const Main = styled.div`
  transition: all 0.15s ease;

  @media (min-width: 768px) {
    margin-left: 250px;
  }
`;

Template.propTypes = {
  children: PropTypes.element.isRequired,
};
