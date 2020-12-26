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
  height: 46px;

  svg {
    font-size: 26px;
    color: #adb5bd !important;
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    height: 100%;
    width: 100%;
  }

  input {
    width: 100%;
    height: 100%;
    color: #202020;
    font-size: 20px;
  }

  input::placeholder {
    font-size: 12px;
  }

  .react-datepicker__header {
    background: #5e72e4;
    div {
      color: #fff !important;
      font-size: 12px;
    }
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    width: 25px;
    line-height: 25px;
    font-size: 10px;
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
