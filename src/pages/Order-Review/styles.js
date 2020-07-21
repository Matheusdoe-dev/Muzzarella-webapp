import styled from "styled-components";

export const ReviewWrapper = styled.section`
  & {
    padding: var(--gap-xl) 0;

    ul {
      list-style: none;
      padding-left: 0;
    }

    p,
    li {
      font-size: 1.125rem;
      line-height: 30px;
    }

    h4 {
      margin-bottom: var(--gap);
    }

    .row {
      padding: var(--gap);

      div[class^="col-"]:last-child {
        li,
        p {
          font-weight: 600;
        }
      }

      &:first-child {
        border-top: 1px solid var(--support-color-2);
        border-bottom: 1px solid var(--support-color-2);

        div[class^="col-"]:nth-child(2) {
          h4,
          p,
          li {
            text-align: right;
          }
        }

        div[class^="col-"]:last-child {
          h4,
          p,
          li {
            text-align: right;
          }
        }
      }

      &:nth-child(2) {
        p {
          margin-bottom: 0;
        }

        div[class^="col"]:first-child p {
          text-align: right;
        }

        div[class^="col"]:last-child p {
          text-align: right;
        }
      }
    }
  }
`;
