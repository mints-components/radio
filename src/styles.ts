import styled from 'styled-components';

export const Wrapper = styled.label<{
  $themeColor: string;
  $disabled: boolean;
}>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  ${({ $disabled }) => $disabled && 'cursor: not-allowed;'}

  .radio {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 16px;
    height: 16px;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
    box-sizing: border-box;

    &::after {
      content: ' ';
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -3px;
      margin-left: -3px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      opacity: 0;
      transition: all 0.3s ease-in-out;
    }

    &.radio-checked {
      ${({ $themeColor }) => `background-color: ${$themeColor};`}

      &::after {
        background-color: #fff;
        opacity: 1;
        transition: all 0.3s ease-in-out;
      }
    }

    &.radio-disabled {
      background-color: #f1f1f1;
      border-color: #d9d9d9;
      cursor: not-allowed;

      &.radio-checked {
        &::after {
          background-color: #d9d9d9;
        }
      }
    }
  }

  .text {
    margin-left: 4px;
    font-size: 14px;

    ${({ $disabled }) => $disabled && 'color: #bfbfbf;'}
  }
`;
