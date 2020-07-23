import { createGlobalStyle } from "styled-components";

const Elements = createGlobalStyle`  
    body {
        background: var(--support-color-1);
    }

    img {
        max-width: 100%;
        display: block;
        border-radius: 50px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: var(--font-primary);
        font-weight: 400;
        line-height: 1.15em;
    }

    h1 {
        font-size: 5.93rem;

        @media (max-width: 767.98px) {
            & {
                font-size: 2.875rem;
            }
        }
    }

    h2 {
        font-size: 3.68rem;

        @media (max-width: 767.98px) {
           & {
               font-size: 2.25rem; 
            }
        }
    }

    h3 {
        font-size: 2.25rem;

        @media (max-width: 767.98px) {
           & {
               font-size: 1.5rem; 
            }
        }
    }

    h4 {
        font-size: 1.37rem;

        @media (max-width: 767.98px) {
           & {
               font-size: 1.1.25rem; 
            }
        }
    }

    p, input, label, a, button, textarea, span, li {
        font-family: var(--font-secondary);
        color: var(--support-color-4);
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

        @media (max-width: 767.98px) {
           & {
               font-size: .875rem; 
            }
        }
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
