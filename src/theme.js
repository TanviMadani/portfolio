// Theme configuration based on the provided color palette
export const theme = {
  light: {
    primary: '#87CEEB',    
    secondary: '#84cdee',   
    accent: '#50b8e7',     
    background: '#edf7fc', 
    text: '#333333',       
    cardBg: '#dcf0fa',      
    border: '#b9e2f5',      
  },
  dark: {
    primary: '#1E90FF',     // Dodger Blue
    secondary: '#4169E1',   // Royal Blue
    accent: '#00008B',      // Dark Blue
    background: '#101010',  
    text: '#FFFFFF',        // White
    cardBg: '#1F2123',      // Darker Navy Blue
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