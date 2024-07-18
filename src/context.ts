import { createContext } from 'react';

export const Context = createContext<{
  disabled?: boolean;
  value?: string | number;
  onChange?: (value?: string | number) => void;
} | null>(null);
