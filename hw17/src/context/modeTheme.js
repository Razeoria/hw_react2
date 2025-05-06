import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
    mode: 'light',
    primary: {
        main: '#4caf50'
    },
    secondary: {
        main: '#ff9800'
    },
    background: {
        default: '#e8f5e9',
        paper: '#ffffff'
    },
    text: {
        primary: '#212121',
        secondary: '#757575'
    }
    },
    typography: {
    h1: {
        fontSize: '3rem',
        fontWeight: 700
    },
    h2: {
        fontSize: '2.5rem',
        fontWeight: 600
    },
    button: {
        fontSize: '1rem',
        textTransform: 'none'
    }
    }
});

export const darkTheme = createTheme({
    palette: {
    mode: 'dark',
    primary: {
        main: '#2196f3'
    },
    secondary: {
        main: '#ffeb3b'
    },
    background: {
        default: '#121212',
        paper: '#1e1e1e'
    },
    text: {
        primary: '#ffffff',
        secondary: '#bdbdbd'
    }
    },
    typography: {
    h1: {
        fontSize: '3.5rem',
        fontWeight: 700
    },
    h2: {
        fontSize: '2.8rem',
        fontWeight: 600
    },
    button: {
        fontSize: '1.1rem',
        textTransform: 'none'
    }
    }
});