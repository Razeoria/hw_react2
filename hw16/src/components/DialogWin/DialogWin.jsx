import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
} from '@mui/material';

const DialogWin = ({ open, onClose }) => (
    <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
    >
    <DialogTitle id="dialog-title">
        Использовать Material UI?
    </DialogTitle>
    <DialogContent>
        <DialogContentText id="dialog-description">
        Это простое React приложение с использованием Material UI. Вы можете настроить его по своему усмотрению
        </DialogContentText>
    </DialogContent>
    <DialogActions>
        <Button onClick={onClose}>Отмена</Button>
        <Button variant="contained" onClick={onClose} autoFocus>
        Согласен
        </Button>
    </DialogActions>
    </Dialog>
);

export default DialogWin;
