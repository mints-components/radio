import { useContext, useMemo } from 'react';
import { useTheme } from '@mints/config-provider';

import { Group } from './group';
import { Context } from './context';
import * as S from './styles';

interface Props {
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Radio = ({
  value,
  checked = false,
  disabled = false,
  children,
}: Props) => {
  const { colorPrimary } = useTheme();

  const context = useContext(Context);

  const [$checked, $disabled] = useMemo(() => {
    if (context) {
      return [context.value === value, disabled ?? context.disabled];
    }
    return [checked, disabled];
  }, [context, value, checked, disabled]);

  const handleClick = () => {
    context?.onChange?.(value);
  };

  return (
    <S.Wrapper onClick={handleClick}>
      <S.Radio
        $checked={$checked}
        $disabled={$disabled}
        $themeColor={colorPrimary}
      />
      {children && <S.Text $disabled={$disabled}>{children}</S.Text>}
    </S.Wrapper>
  );
};

Radio.Group = Group;
