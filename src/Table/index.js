import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Form from '../Form';

export default function DenseTable({data=[]}) {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Teléfono</TableCell>
            <TableCell align="right">Dirección</TableCell>
            <TableCell align="right">Correo</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.email}>
              <TableCell component="th" scope="row">
                {`${row.firstName} ${row.lastName}`}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
                <Form type='update' email={row.email} />
                <Form type='erase' email={row.email} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
