import styled from 'styled-components';

export const Aside = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  display: block;
  overflow-y: auto;
  width: 100%;
  padding-right: 0;
  padding-left: 0;
  background-color: #fff !important;
  z-index: 1050;
  transition: all 0.4s ease;
  padding-top: 0;
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15);
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 0px;

  @media(max-width: 768px){
    ${({ open }) => open && `
      max-width: 250px;
    `}
  }

  @media (min-width: 768px) {
    max-width: 250px !important;
  }
`;

export const Scroll = styled.div`
  overflow: hidden !important;
  padding: 0 !important;
  display: block;
  box-sizing: border-box;
`;

export const Header = styled.div`
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  box-sizing: border-box;
  display: block;
  display: flex;
  flex-direction: column;
  margin-right: -1.5rem;
  margin-left: -1.5rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  flex: 1 1;
  align-items: stretch;

  ul {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    padding-left: 0;
    list-style: none;

    li {
      margin-top: 2px;
      box-sizing: border-box;
      display: list-item;
      text-align: -webkit-match-parent;
      cursor: pointer;

      a {
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        padding-right: 1rem;
        padding-left: 1rem;
        border-radius: 0.375rem;
        padding: 0.675rem 1.5rem;
        display: flex;
        align-items: center;

        svg {
          font-size: 18px;
          margin-right: 20px;
        }

        span {
          transition: 0.3s ease;
          opacity: 1;
          font-size: 14px;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
`;
