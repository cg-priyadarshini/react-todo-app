import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../types/theme';
import { Button } from '../common';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
  };

  return (
    <Button onClick={toggleTheme} label={theme === lightTheme ? 'Dark Mode' : 'Light Mode'} type='primary' className='theme-switcher'>
        {theme === darkTheme ? '🌞' : '🌙'}
    </Button>
  );
}

export const lightTheme: Theme = {
  backgroundColor: '#ecf0ef',
  textColor: '#000',
  completedTodoColor: '#ccc',
  borderColor: '#ddd',
  primaryButtonColor: '#292c35',
  primaryBtnTextColor:'#fff',
  primaryButtonHoverColor: '#222',
  headerColor:'#3498db',
  secondaryButtonColor:'#3f51b5'
};

export const darkTheme: Theme = {
  backgroundColor: '#292c35',
  textColor: '#fff',
  completedTodoColor: '#888',
  borderColor: '#444',
  primaryButtonColor: '#3498db' ,
  primaryBtnTextColor:'#000',
  primaryButtonHoverColor: '#eee',
  headerColor:'#31333D',
  secondaryButtonColor:'#fff'
};

export default ThemeSwitcher;
