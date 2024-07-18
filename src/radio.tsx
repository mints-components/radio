import { useTheme } from '@mints/config-provider';

import * as S from './styles';

interface Props {
  checked?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Radio = ({
  checked = false,
  disabled = false,
  children,
}: Props) => {
  const { colorPrimary } = useTheme();

  return (
    <S.Wrapper>
      <S.Radio
        $checked={checked}
        $disabled={disabled}
        $themeColor={colorPrimary}
      />
      {children && <S.Text $disabled={disabled}>{children}</S.Text>}
    </S.Wrapper>
  );
};
