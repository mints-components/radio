import { useState, useEffect } from 'react';
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

  useEffect(() => {
    setChecked(props.checked ?? false);
  }, [props.checked]);

  const handleClick = () => setChecked(true);

  return (
    <S.Wrapper onClick={handleClick}>
      <S.Radio
        $checked={checked}
        $disabled={disabled}
        $themeColor={colorPrimary}
      />
      {children && <S.Text $disabled={disabled}>{children}</S.Text>}
    </S.Wrapper>
  );
};
