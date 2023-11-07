import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Axios from 'axios';

export default function FormDialog(props) {
    const [editValues, setEditValues] = useState({
        id: props.id,
        name:props.nomel,
        valor:props.valor,
        categoria:props.categoria,
        quantidade: props.quantidade
    });

    const handleEditProduto = () =>{
        Axios.put("http://localhost:3001/edit",{
            id: editValues.id,
            nomel: editValues.nomel,
            valor: editValues.valor,
            categoria: editValues.categoria,
            quantidade: editValues.quantidade
        });
        handleClose();
    };

    const handleClickOpen = () => {
        props.setOpen(true);
      };
    
      const handleClose = () => {
        props.setOpen(false);
      };

    const handleChangeValues = (value) => {
        setEditValues(prevValues =>({
            ...prevValues,
            [value.target.id]: value.target.value,
        }))
    }

  return (
    <React.Fragment>
      <Dialog open={props.open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle>Editar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomel"
            label="Nome do Produto"
            defaultValue={props.nomel}
            onChange={handleChangeValues}
            type="text"
            fullWidth
          />
          <TextField
          autoFocus
          margin="dense"
          id="valor"
          label="Valor"
          defaultValue={props.valor}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          />
          <TextField
          autoFocus
          margin="dense"
          id="categoria"
          label="categoria"
          defaultValue={props.categoria}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          />
          <TextField
          autoFocus
          margin="dense"
          id="quantidade"
          label="quantidade"
          defaultValue={props.quantidade}
          onChange={handleChangeValues}
          type="text"
          fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEditProduto}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
