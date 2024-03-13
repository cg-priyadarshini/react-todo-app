export interface Theme {
  backgroundColor: string;
  textColor: string;
  completedTodoColor: string;
  borderColor: string;
  primaryButtonColor: string;
  primaryButtonHoverColor: string;
  primaryBtnTextColor:string;
  headerColor:string;
  secondaryButtonColor:string
  // Add more theme properties as needed
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

export interface ThemeProps {
  theme: Theme; 
}
