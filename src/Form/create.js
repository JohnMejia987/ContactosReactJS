import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import DB from '../DB'

const Create = ({ contact, open, handleButton, handleChange }) => {
    const handleSubmit = async() => {
        await DB.create('/datos_personales', contact)
        handleButton('submit')
    }
    return (
    <Dialog open={open} onClose={handleButton} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Crear Contacto</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Introduce los datos del nuevo Contacto
                </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="firstName"
                label="Nombres"
                type="fname"
                fullWidth
                onChange={e => handleChange('firstName', e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="lastName"
                label="Apellidos"
                type="lname"
                fullWidth
                onChange={e => handleChange('lastName', e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Correo"
                type="email"
                fullWidth
                onChange={e => handleChange('email', e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Teléfono"
                type="phone"
                fullWidth
                onChange={e => handleChange('phone', e.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="address"
                label="Dirección"
                type="address"
                fullWidth
                onChange={e => handleChange('address', e.target.value)}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={_ => handleButton('cancel')}>
                Cancelar
            </Button>
            <Button onClick={handleSubmit} color="primary">
                Subir informacion
            </Button>
        </DialogActions>
    </Dialog>
)
}

export default Create;