import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#365F62', // Accentfärgen för primära element
        },
        secondary: {
            main: '#f5f5f5', // En ljus sekundärfärg för kontrast
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h6: {
            fontWeight: 500,
        },
        button: {
            textTransform: 'none', // Ta bort versaler från knappar
        },
    },
    shape: {
        borderRadius: 8, // Mjukare hörn på komponenter
    },
});

export default theme;
