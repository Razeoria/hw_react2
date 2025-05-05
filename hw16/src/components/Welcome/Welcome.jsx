import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const Welcome = ({ onOpenDialog }) => (
    <Box
    sx={{
        mt: 4,
        mb: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
    }}
    >
    <Typography
        variant="h5"
        component="h1"
        gutterBottom
        sx={{
        fontWeight: 500,
        }}
    >
        Добро пожаловать в наше приложение!
    </Typography>

    <Button
        variant="contained"
        onClick={onOpenDialog}
        sx={{
        mt: 2,
        px: 3,
        }}
    >
        Открыть диалоговое окно
    </Button>
    </Box>
);

export default Welcome;
