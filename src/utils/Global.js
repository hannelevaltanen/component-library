import { createGlobalStyle } from 'styled-components';
import { primaryFont } from './typography'
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
    ${normalize()}

    html {
        font-size: 100%;
        box-sizing: border-box;
    }

    *, *:::before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-family: ${primaryFont}
    }

    main {
        width: 90%;
        margin: 0 auto;
    }
`;
