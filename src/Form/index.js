import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Create from './create'
import Update from './update';

import DB from '../DB'

const defaultContact = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
}

const Form = ({ type = 'create', email }) => {
    const [open, setOpen] = useState(false)
    const [contact, setContact] = useState(defaultContact)

    const handleButton = (type = null) => {
        setContact(defaultContact)
        setOpen(!open)
    }
    const handleChange = (type, value) => {
        setContact({
            ...contact,
            [type]: value
        })
    }

    const handleErase = async () => {
        console.log(email)
        if (email){
            const res = await DB.deleteOne('/datos_personales', email)
            console.log(res)
        }
    }
    
    useEffect(() => {
        const getContact = async() => {
            const res = await DB.readOne('/datos_personales', email)
            setContact(res.data.contact);
        }
        if (email && contact.email === '' && type === 'update') {
            getContact()
        }
    }, [email, type, contact])
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={type === 'erase' ? handleErase : handleButton}>
                {type === 'create' ? 'Crear' : type === 'update' ? 'Editar' : 'Eliminar'}
            </Button>
            {
                type === 'create' ?
                <Create
                    contact={contact}
                    open={open}
                    handleButton={handleButton}
                    handleChange={handleChange}
                />
                : type === 'update' ?
                <Update
                    contact={contact.email && contact}
                    open={open}
                    handleButton={handleButton}
                    handleChange={handleChange}
                />
                : null
            }
        </div>
    )
}

export default Form;