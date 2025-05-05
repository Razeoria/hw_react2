import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => (
    <AppBar
    position="static"
    elevation={4}
    sx={{
        bgcolor: '#1976d2',
    }}
    >
    <Toolbar sx={{ justifyContent: 'space-between', px: 3, py: 1 }}>
        <Typography
        variant="h6"
        component="div"
        sx={{ fontWeight: 400 }}
        >
        Приложение с Material UI App
        </Typography>


    </Toolbar>
    </AppBar>
);

export default Header;

