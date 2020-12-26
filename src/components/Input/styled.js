import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Input = styled.div`
  transition: box-shadow 0.15s ease;
  border: 0;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  border-radius: 0.25rem;
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  background: #fff;
  padding: 0 5px;

  svg {
    font-size: 24px;
    color: #adb5bd;
    margin-right: 5px;
  }

  input {
    width: 100%;
    height: 46px;
  }
`;

export const Error = styled.div`
  margin-top: 5px;
`;
