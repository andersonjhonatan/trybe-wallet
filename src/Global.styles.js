import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background-color: #e9f3f1fa;
    margin: 0;
    padding: 0;
    max-width: 100vw;
  }

  :root {
  --primary-color: #432c5b;
  --secondary-color: #6c757d;
  --primary-hover: #30ffd6
  --primary-focus: #d4d4d449
  --color-primary: #ffe261
}
`;
