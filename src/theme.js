// Theme configuration based on the provided color palette
export const theme = {
  light: {
    primary: '#DA0000',     // Bright Red
    secondary: '#830F10',   // Dark Red
    accent: '#574D4C',      // Gray
    background: '#FFFFFF',  // White
    text: '#000000',        // Black
    cardBg: '#f5f5f5',
    border: '#e0e0e0',
  },
  dark: {
    primary: '#DA0000',     // Bright Red
    secondary: '#830F10',   // Dark Red
    accent: '#574D4C',      // Gray
    background: '#000000',  // Black
    text: '#FFFFFF',        // White
    cardBg: '#121315',
    border: '#272930',
  }
};

// Helper function to set CSS variables based on theme
export const applyTheme = (mode) => {
  const root = document.documentElement;
  const currentTheme = theme[mode];
  
  Object.keys(currentTheme).forEach(key => {
    root.style.setProperty(`--${key}`, currentTheme[key]);
  });
  
  // Store the user's preference
  localStorage.setItem('theme-mode', mode);
};