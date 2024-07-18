import { useState, useEffect } from 'react';

import { Context } from './context';
import * as S from './styles';

interface Props {
  children?: React.ReactNode;
  value?: string | number;
  onChange?: (value?: string | number) => void;
}

export const Group = ({ children, value, onChange }: Props) => {
  const [stateVal, setStateVal] = useState<string | number>();

  useEffect(() => {
    setStateVal(value);
  }, [value]);

  const handleChange = (newVal?: string | number) => {
    if (onChange) {
      onChange(newVal);
    } else {
      setStateVal(newVal);
    }
  };

  return (
    <S.GroupWrapper>
      <Context.Provider value={{ value: stateVal, onChange: handleChange }}>
        {children}
      </Context.Provider>
    </S.GroupWrapper>
  );
};
