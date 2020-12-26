import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Status = styled.div`
  background: #2dce89;
  width: 7px;
  height: 7px;
  border-radius: 10px;
  margin-right: 7px;

  ${({ active }) =>
    !active &&
    `
    background: #ff5252 !important;
  `}
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
`;
