import styled from "styled-components";

export const CheckoutWrapper = styled.form`
  & {
    padding: var(--gap-xl) 0;

    input,
    label {
      display: block;
    }

    label {
      font-size: 1.375rem;
      margin-bottom: var(-gap);
    }

    input {
      background: var(--support-color-1);
      border-radius: 50px;
      width: 100%;
      padding: var(--gap);
      border: none;
      margin-bottom: var(--gap-sm);

      &:focus {
        outline: none;
        background: var(--support-color-2);
      }
    }

    button {
      margin: var(--gap-sm) auto 0 auto;

      @media (max-width: 767.98px) {
        & {
          width: 247px;
          margin: var(--gap-sm) auto 0 auto;
        }
      }
    }
  }
`;

export const Checkmark = styled.div`
  label {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
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
      height: 0;
      width: 0;
    }

    &:hover input ~ span {
      background-color: var(--support-color-2);
    }

    input:checked ~ span {
      background-color: var(--secondary-color);
    }

    span:after {
      content: "";
      position: absolute;
      display: none;
    }

    input:checked ~ span:after {
      display: block;
    }

    span:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    p {
      margin-right: var(--gap-sm);
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 23px;
    width: 23px;
    background-color: var(--support-color-2);
    border: none;
  }
`;
