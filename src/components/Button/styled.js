import styled from 'styled-components';

export const Button = styled.button`
  ${({ small }) =>
    small &&
    `
    height: 30px;
  `}

  .MuiCircularProgress-colorPrimary {
    color: #fff;
    font-size: 15px;
  }

  .MuiCircularProgress-root {
    width: 16px !important;
    height: 16px !important;
    margin: 0 20px;
  }

  ${({ primary }) =>
    primary &&
    `
    color: #fff;
    border-color: #5e72e4;
    background-color: #5e72e4;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);

    &:active{
    color: #fff;
    border-color: #5e72e4;
    background-color: #324cdd;
  }
  `}

  ${({ secondary }) =>
    secondary &&
    `
    color: #5e72e4;
    border-color: #fff;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);

    &:active{
    color: #212529 !important;
    border-color: #fff;
    background-color: #e6e6e6;
  }
  `}
`;
