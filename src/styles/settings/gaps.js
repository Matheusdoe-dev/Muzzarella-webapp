import { createGlobalStyle } from "styled-components";

const Gaps = createGlobalStyle`
    :root {
        --gap: 1rem !important;
        --gap-sm: 1.92rem;
        --gap-md: 2.56rem;
        --gap-lg: 4.18rem;
        --gap-xl: 6.81rem;

        @media (max-width: 767.98px) {
            --gap-sm: 1rem;
            --gap-md: 1.92rem;
            --gap-lg: 2.56rem;
            --gap-xl: 4.18rem;
        }
    }
`;

export default Gaps;
