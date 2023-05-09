import { createGlobalStyle } from 'styled-components';
import px2vw from '../../utils/px2vw';

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    border-sizing: border-box;
} : root {
    font-size:${px2vw(24)};
    @media (min-width:768px) {
        font-size:${px2vw(18)};
    }
    @media (min-width:1024px) {
        font-size:${px2vw(216)};
    }
}
`;
