import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { useSwitchTheme } from '../../context/Theme';

const HeaderTitle = () => {
    const { currentTheme } = useSwitchTheme();
    const theme = useTheme();

    return (
    <Box sx={{ mt: 3, mb: 3, textAlign: 'center' }}>
        <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{
            fontWeight: 700,
            fontSize: '3rem',
            color: theme.palette.primary.main,
        }}
        >
        {currentTheme === 'light' ? 'Light Mode' : 'Dark Mode'}
        </Typography>
    </Box>
    );
};

export default HeaderTitle;
