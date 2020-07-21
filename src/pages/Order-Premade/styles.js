import styled from "styled-components";

export const ChoosePremadeWrapper = styled.section`
  & {
    padding: var(--gap-xl) 0;

    .row {
      margin-bottom: var(--gap-lg);

      :last-child {
        margin-bottom: 0;
      }
    }
  }
`;

export const PremadeOption = styled.div`
  & {
    display: flex;
    align-items: center;

    img {
      display: inline;
      border-radius: 50%;
    }

    label {
      display: block;
      position: relative;
      cursor: pointer;
      margin: 0 var(--gap);
    }

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    span {
      position: absolute;
      top: -11px;
      left: 0;
      width: 27px;
      height: 27px;
      border: 3px solid var(--support-color-4);
      background: none;
      border-radius: 50%;
    }

    label:hover input ~ span {
      background-color: var(--support-color-6);
    }

    label input:checked ~ span {
      background-color: var(--secondary-color);
    }

    span:after {
      content: "";
      position: absolute;
      display: none;
    }

    label input:checked ~ span:after {
      display: block;
    }

    label span:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid var(--base-color);
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    div {
      display: inline;
      margin-left: var(--gap-sm);

      p {
        margin-bottom: 0;
      }
    }
  }
`;
