import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    ${reset};
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        border-radius: 0;
        text-decoration: none;
        color:#000000;
        user-select: none;
    }

    html {
        width: 100%;
        height: 100%;
        overflow: scroll;
        background: #ffffff;
        transition: all 0.2s ease;
    }

    body {
      background: #ffffff;
      color: #000000;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      transition: all 0.25s linear;
    }

    #root {
        width: 100%;
        height: 100%;
    }
`;

export default globalStyles;
