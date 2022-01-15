import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel, Typography } from '@material-ui/core';

function Form() {
    const [ user, setUser ] = useState({});
    const [ errors, setErrors ] = useState({ cpf:{ valid:true, text: ''} })
    const [ promotions, setPromotions ] = useState(true)
    const [ newsletter, setNewsletter ] = useState(false)

    function validatedCpf(cpf){
        if(cpf.length !== 11){
            return { valid: false, text: 'Cpf inválido'}
        } else {
            return { valid: true, text: ''}
        }
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(user)
        }}>
            <Typography variant='h3' component='h1' align='center'>Formulário de cadastro</Typography>

            <TextField
                onChange={(e) => {
                    user.name = e.target.value
                    setUser(user)
                }}
                variant='outlined'
                color='secondary'
                fullWidth margin='normal'
                label='Nome'
                id='nome'
            />

            <TextField 
                onChange={(e) => {
                    user.sobrenome = e.target.value
                    setUser(user)
                }}
                variant='outlined' 
                color='secondary' 
                fullWidth 
                margin='normal' 
                label='Sobrenome' 
                id='sobrenome' 
            />

            <TextField 
                onBlur={(e) => {
                    const validCpf = validatedCpf(e.target.value);
                    setErrors({ cpf: validCpf })
                    user.cpf = e.target.value
                    setUser(user)
                }}
                error={!errors.cpf.valid}
                helperText={errors.cpf.text}
                variant='outlined' 
                color='secondary' 
                fullWidth 
                margin='normal' 
                label='Cpf' id='cpf' 
            />

            <FormControlLabel label='Promoções' control={
                <Switch
                    checked={promotions}
                    onChange={(e) => {
                        setPromotions(e.target.checked)
                        user.promotions = e.target.checked
                        setUser(user)
                    }}
                    name='promocoes' 
                    color='secondary'
                />
            } />

            <FormControlLabel label='Novidades' control={
                <Switch
                    checked={newsletter}
                    onChange={(e) => {
                        setNewsletter(e.target.checked)
                        user.newsletter = e.target.checked
                        setUser(user)
                    }}
                    name='novidades' 
                    color='primary'
                />
            } />

            <Button type='submit' variant='contained' color="primary">
                Cadastrar
            </Button>
        </form>
    )
}

export { Form };