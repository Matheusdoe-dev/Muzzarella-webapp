import { createGlobalStyle } from "styled-components";

const Elements = createGlobalStyle`  
    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-primary);
        font-weight: 400;
        line-height: 1.15em;
    }

    h1 {
        font-size: 5.93rem;
    }

    h2 {
        font-size: 3.68rem;
    }

    h3 {
        font-size: 2.25rem;
    }

    h4 {
        font-size: 1.37rem;
    }

    p, input, label, a, button, textarea {
        font-family: var(--font-secondary);
    }

    p, input, label, textarea {
        font-size: .875rem;
        filter: brightness(85%);
    }

    p {
        max-width: 30em;
        line-height: 1.55em;
    }

    a, button {
        font-size: 1.37rem;
        filter: brightness(95%);
    }

    a {
        text-decoration: none;
        color: initial;

        :hover {
            text-decoration: none;
        }
    }
`;

export default Elements;
