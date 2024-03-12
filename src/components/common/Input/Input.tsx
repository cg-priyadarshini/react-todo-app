import React from 'react';
import './styles.scss';

interface InputProps {
  checked?: boolean;
  placeholder?: string;
  onChange: (arg: any) => void;
  onBlur?: (arg: any) => void;
  className?: string;
  value?: any;
  type: string;
}

const Input: React.FC<InputProps> = ({
  checked,
  onChange,
  onBlur,
  type,
  placeholder,
  value,
  className = '',
}) => {
  return (
    <input
      className={`${type ==='checkbox' ? 'checkbox': 'input'} ${className}`}
      type={type}
      checked={checked}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
