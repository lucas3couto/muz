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

  .css-2b097c-container {
    width: 100%;
  }

  .css-yk16xz-control {
    border: none;
    background: transparent;
  }

  .styled__control-is-focused {
    &:focus {
      border: 0;
      box-shadow: none;
      background: transparent;
      outline: none;
    }
  }

  svg {
    font-size: 26px;
    color: #202020 !important;
  }
`;

export const Label = styled.div`
  margin-bottom: 15px;
  color: #c7c7c7;
`;

export const Error = styled.div`
  color: #f44336;
  font-size: 12px;
  margin-top: 5px;
`;
