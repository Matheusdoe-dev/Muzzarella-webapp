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

    input[type="checkbox"] {
      display: inline-block;
      width: 43px;
      height: 43px;
      margin-right: var(--gap);
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

    & input:checked ~ span {
      background-color: var(--secondary-color);
    }

    & span:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 43px;
    width: 43px;
    background-color: var(--support-color-2);
    border: none;
  }
`;
