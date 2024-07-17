import { useState, useEffect } from 'react';
import classNames from 'classnames';
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

  const radiosCls = classNames('radio', {
    'radio-checked': checked,
    'radio-disabled': disabled,
  });

  const handleClick = () => setChecked(true);

  return (
    <S.Wrapper
      $themeColor={colorPrimary}
      $disabled={disabled}
      onClick={handleClick}
    >
      <span className={radiosCls} />
      {children && <span className="text">{children}</span>}
    </S.Wrapper>
  );
};
