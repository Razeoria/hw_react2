import React, { useState } from 'react';
import { Container } from '@mui/material';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import DialogWin from '../DialogWin/DialogWin';
import '../../styles/style.css';

const App = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Welcome onOpenDialog={handleOpenDialog} />
        <DialogWin open={openDialog} onClose={handleCloseDialog} />
      </Container>
    </>
  );
};

export default App;

