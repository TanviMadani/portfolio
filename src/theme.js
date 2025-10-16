// Theme configuration based on the provided color palette
export const theme = {
  light: {
    primary: '#87CEEB',     // Sky Blue
    secondary: '#5F9EA0',   // Cadet Blue
    accent: '#B0E0E6',      // Powder Blue
    background: '#FFFAF0',  // Whitish Cream (Floral White)
    text: '#333333',        // Dark Gray
    cardBg: '#FFF8DC',      // Cornsilk (Cream)
    border: '#E6E6FA',      // Lavender
  },
  dark: {
    primary: '#1E90FF',     // Dodger Blue
    secondary: '#4169E1',   // Royal Blue
    accent: '#00008B',      // Dark Blue
    background: '#000033',  // Navy Blue (Dark)
    text: '#FFFFFF',        // White
    cardBg: '#000055',      // Darker Navy Blue
    border: '#191970',      // Midnight Blue
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