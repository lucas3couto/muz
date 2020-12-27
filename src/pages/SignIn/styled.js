import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  background: #172b4d;

  padding: 20px;
`;

export const Card = styled.div`
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: #fff;
  border-radius: 0.375rem;
`;

export const CardContent = styled.div`
  padding: 3rem;
`;
