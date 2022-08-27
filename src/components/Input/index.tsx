import React, { useState, useCallback, useMemo } from 'react';
import { ReportProblemOutlined, Visibility, VisibilityOff } from '@material-ui/icons';

import Params from './types';
import { InputContainer, InputIcon } from './styles';

export const Input: React.FC<Params> = ({
  id,
  name,
  type,
  value,
  placeholder,
  label,
  onChange,
  onBlur,
  onFocus,
  maxLength,
  isInvalid = false,
  disabled,
  inputMode = 'text',
  errorMessage = 'Error',
  ...props
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleToggleVisiblePassword = useCallback(() => {
    if (type !== 'password') return;
    setPasswordVisible((prev) => !prev);
  }, [type]);

  const inputType = useMemo(() => {
    if (type !== 'password') return type;
    return passwordVisible ? 'text' : type;
  }, [type, passwordVisible]);

  return (
    <InputContainer htmlFor={id} isInvalid={isInvalid}>
      {label}
      <input
        id={id}
        name={name}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        maxLength={maxLength}
        disabled={disabled}
        inputMode={inputMode}
        {...props}
      />
      {type === 'password' && (
        <InputIcon type="button" onClick={handleToggleVisiblePassword}>
          {inputType === 'password' ? (
            <Visibility className="eks-input-icon" />
          ) : (
            <VisibilityOff className="eks-input-icon" />
          )}
        </InputIcon>
      )}
      <div>
        <ReportProblemOutlined />
        <span hidden={!isInvalid}>{errorMessage}</span>
      </div>
    </InputContainer>
  );
};
