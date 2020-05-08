import React, {useState, useLayoutEffect} from 'react';
import Container from '@material-ui/core/Container';
import { Typography, Box} from '@material-ui/core';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';

import DenseTable from './Table';
import DB from './DB';
import Form from './Form';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [data, setData] = useState([])

  useLayoutEffect(() => {
    const readDBData = async() =>{
      await DB.readAll('/datos_personales', res => {
        if (res.length > 0) { // TODO: Add comparison between res and data
          setData(res)
        };
      })
    }
    readDBData();
  }, [data])
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Informacion de Contacto
        </Typography>
        <Form/>
        <DenseTable data={data}/>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
