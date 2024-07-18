import { useState } from 'react';
import { useTheme } from '@mints/config-provider';

import * as S from './styles';

interface Props {
  checked?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Radio = ({ disabled = false, children, ...props }: Props) => {
  const [checked, setChecked] = useState(false);

  const { colorPrimary } = useTheme();

  const handleClick = () => {
    if (disabled) {
      return;
    }
    setChecked(true);
  };

  return (
    <S.Wrapper onClick={handleClick}>
      <S.Radio
        $checked={props.checked ?? checked}
        $disabled={disabled}
        $themeColor={colorPrimary}
      />
      {children && <S.Text $disabled={disabled}>{children}</S.Text>}
    </S.Wrapper>
  );
};
