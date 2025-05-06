import React from 'react';
import { Container, Box } from '@mui/material';
import Theme from '../../context/Theme';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import ToggleButton from '../ToggleButton/ToggleButton';

const App = () => (
  <Theme>
    <Container
      sx={{
        margin: '80px auto',
        maxWidth: '900px',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          p: 4,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <HeaderTitle />
        <ToggleButton />
      </Box>
    </Container>
  </Theme>
);

export default App;
