import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#365F62',
        },
        secondary: {
            main: '#f5f5f5',
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
        borderRadius: 8,
    },
});

export default theme;
