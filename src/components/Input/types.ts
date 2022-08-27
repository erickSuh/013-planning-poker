import React from 'react';

export default interface Params {
  id: string;
  name?: string;
  type: 'button' | 'text' | 'number' | 'email' | 'password' | 'search' | 'tel' | 'url';
  value?: string;
  placeholder?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  style?: React.CSSProperties;
  maxLength?: number;
  isInvalid?: boolean;
  disabled?: boolean;
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  errorMessage?: string;
}
