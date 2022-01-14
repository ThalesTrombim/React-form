import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel, Typography } from '@material-ui/core';

function Form() {
    const [ nome, setNome ] = useState('');

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <Typography variant='h3' component='h1' align='center'>Formulário de cadastro</Typography>

            <TextField
                onChange={(e) => {
                    setNome(e.target.value)
                }}
                variant='outlined'
                color='secondary'
                fullWidth margin='normal'
                label='Nome'
                id='nome'
            />

            <TextField 
                variant='outlined' 
                color='secondary' 
                fullWidth 
                margin='normal' 
                label='Sobrenome' 
                id='sobrenome' 
            />

            <TextField 
                variant='outlined' 
                color='secondary' 
                fullWidth 
                margin='normal' 
                label='Cpf' id='cpf' 
            />

            <FormControlLabel label='Promoções' control={
                <Switch
                    name='promocoes' defaultChecked color='secondary'
                />
            } />

            <FormControlLabel label='Novidades' control={
                <Switch
                    name='novidades' defaultChecked color='primary'
                />
            } />

            <Button type='submit' variant='contained' color="primary">
                Cadastrar
            </Button>
        </form>
    )
}

export { Form };