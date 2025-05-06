import React from 'react';
import StyledButton from '../Button/Button';
import { useSwitchTheme } from '../../context/Theme';

const ToggleButton = () => {
    const { nextTheme, toggleTheme } = useSwitchTheme();

    return (
    <StyledButton
        onClick={toggleTheme}
        sx={{
        mt: 3,
        px: 4,
        py: 1,
        bgcolor: theme => theme.palette.secondary.main,
        color: theme => theme.palette.getContrastText(theme.palette.secondary.main),
        fontSize: '1.125rem',
        fontWeight: 600,
        '&:hover': {
            bgcolor: theme => theme.palette.secondary.dark,
        },
        }}
    >
        {nextTheme === 'light' ? 'Light Mode 🌞' : 'Dark Mode 🌙'}
    </StyledButton>
    );
};

export default ToggleButton;

