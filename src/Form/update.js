import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import DB from '../DB'

const Update = ({ contact, open, handleButton, handleChange }) => {
    const handleSubmit = async () => {
        const res = await DB.update(contact, '/datos_personales', contact.email)
        console.log(res)
        handleButton('submit')
    }
    if (contact.email) {
        return (
            <Dialog open={open} onClose={handleButton} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Editar Contacto</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Cambia los datos del Contacto
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstName"
                        label="Nombres"
                        type="fname"
                        fullWidth
                        defaultValue={contact.firstName}
                        onChange={e => handleChange('firstName', e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lastName"
                        label="Apellidos"
                        type="lname"
                        fullWidth
                        defaultValue={contact.lastName}
                        onChange={e => handleChange('lastName', e.target.value)}
                    />
                    <TextField
                        required
                        autoFocus
                        margin="dense"
                        id="email"
                        label="Correo"
                        type="email"
                        fullWidth
                        defaultValue={contact.email}
                        onChange={e => handleChange('email', e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="Teléfono"
                        type="phone"
                        fullWidth
                        defaultValue={contact.phone}
                        onChange={e => handleChange('phone', e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="address"
                        label="Dirección"
                        type="address"
                        fullWidth
                        defaultValue={contact.address}
                        onChange={e => handleChange('address', e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={_ => handleButton('cancel')}>
                        Cancelar
                </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Actualizar informacion
                </Button>
                </DialogActions>
            </Dialog>
        )
    } else {return (<p>loading...</p>)}
}

export default Update;