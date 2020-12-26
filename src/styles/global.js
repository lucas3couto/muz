import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');

*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  -webkit-font-smoothing: antialiased;
  height: 100%;
}

body {
  font-family: Lato, sans-serif;
  font-size: 16px; /* stylelint-disable unit-blacklist */
  margin: 0;
  min-height: 100vh;
  padding: 0;
  background: #f8f9fe;
  color: #525f7f;
}

img {
  height: auto;
  max-width: 100%;
}

a {
  text-decoration: none;

  &.disabled {
    pointer-events: none;
  }
}

button {
  font-size: 14px;
  position: relative;
  transition: all .15s ease;
  letter-spacing: .025em;
  text-transform: none;
  will-change: transform;
  background: transparent;
  appearance: none;
  border: none;
  font-weight: 600;
  line-height: 1.5;
  display: inline-block;
  padding: .625rem 1.25rem;
  user-select: none;
  border: 1px solid transparent;
  border-radius: .25rem;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }
}

input , textarea{
  border: none;
  outline: none;
  font-weight: 400;
  line-height: 1.5;
  color: #8898aa;
}

textarea{
  font: inherit;
  padding: 10px 0;
}
`;
