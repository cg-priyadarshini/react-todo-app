import React, { useContext } from 'react';
import './styles.scss';
import { ThemeContext } from '../../../context/ThemeContext';
import { SvgIcon } from '../Icon/Icon';

interface ButtonProps {
  label?: string;
  iconId?: string | undefined;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  type: 'outline' | 'primary';
}

export const Button: React.FC<ButtonProps> = ({
  label,
  iconId,
  onClick,
  className = '',
  children,
  type,
}) => {
  const { theme } = useContext(ThemeContext);

  

  return (
    <button
      className={`btn ${className} ${type === 'outline' ? 'btn-outline' : 'btn-primary'}`}
      onClick={onClick}
      style={{ backgroundColor: type === 'primary' ? theme.primaryButtonColor : '' }}
    >
      <SvgIcon iconId={iconId}/>
      {children}
      {label && <span className='btn-label'>{label}</span>}
    </button>
  );
};

export default Button;
