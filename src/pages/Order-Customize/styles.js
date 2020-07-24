import styled from "styled-components";

export const OrderCustomizeWrapper = styled.form`
  & {
    padding: var(--gap-xl) 0;

    .row {
      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background: var(--support-color-4);
        opacity: 20%;
      }

      &::before {
        margin: var(--gap-sm) 0;
      }

      &::after {
        margin-top: var(--gap-sm);
      }

      h4 {
        text-align: center;
        margin-bottom: var(--gap-sm);
      }
    }
  }
`;

export const Checkmark = styled.div`
  & {
    label {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      height: 71px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0px;
        width: 0px;
      }

      &:hover input ~ span {
        background-color: var(--support-color-1);
      }

      input:checked ~ span {
        background-color: var(--secondary-color);
      }
      /*
      input:checked ~ span:after {
        display: block;
      }

      span:after {
        left: 9px;
        top: 5px;
        width: 10px;
        height: 20px;
        border: 3px solid var(--base-color);
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      } */
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 71px;
      width: 71px;
      border-radius: 50px;
      border: 3px solid var(--support-color-4);
      background-color: var(--support-color-1);

      &:after {
        content: "";
        position: absolute;
        display: none;
      }
    }

    .checkbox {
      border-radius: 0 !important;
    }

    p {
      position: absolute;
      top: 20px;
      font-size: 1.125rem;
      margin-left: calc(var(--gap-lg) - 12px);
      /* margin-top: var(--gap); */
    }
  }
`;
