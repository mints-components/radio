import styled from 'styled-components';

export const Wrapper = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

export const Radio = styled.span<{
  $checked: boolean;
  $disabled: boolean;
  $themeColor: string;
}>`
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

  ${({ $checked, $themeColor }) =>
    $checked && `background-color: ${$themeColor};`}

  ${({ $disabled }) =>
    $disabled &&
    `
      background-color: #f1f1f1;
      border-color: #d9d9d9;
      cursor: not-allowed;
  `}

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

    ${({ $checked }) =>
      $checked &&
      `
        background-color: #fff;
        opacity: 1;
      `}

    ${({ $checked, $disabled }) =>
      $checked && $disabled && 'background-color: #bfbfbf;'}
  }
`;

export const Text = styled.span<{ $disabled: boolean }>`
  margin-left: 4px;
  font-size: 14px;
  ${({ $disabled }) =>
    $disabled &&
    `
    color: #bfbfbf;
    cursor: not-allowed;
  `}
`;
