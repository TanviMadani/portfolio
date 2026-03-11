// Theme configuration based on the provided color palette
export const theme = {
  light: {
    primary: '#1E90FF',    
    secondary: '#4169E1',   
    accent: '#00008B',     
    background: '#edf7fc', 
    text: '#333333',       
    cardBg: '#dcf0fa',      
    border: '#191970',      
  },
  dark: {
    primary: '#1E90FF',     
    secondary: '#4169E1', 
    accent: '#50b8e7',     
    background: '#101010',  
    text: '#FFFFFF',        
    cardBg: '#1F2123',     
    border: '#191970',      
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