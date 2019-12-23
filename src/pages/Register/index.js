import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import Input from '~/components/Input';
import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  username: Yup.string().required('Insira seu nome'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
  password_confirmation: Yup.string().required('Confirmar senha é obrigatório'),
});

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(results) {
    setLoading(true);
    if (results.password !== results.password_confirmation) {
      return toast.error('Senhas diferentes! Arrume para prosseguir');
    }
    try {
      const { data } = await api.post('users', results);

      setLoading(false);

      const { token } = data;
      localStorage.setItem('access_token', token);
      return history.push('/dispositivos');
    } catch (err) {
      setLoading(false);
      return toast.error(
        'Error ao efetuar cadastramento. Por favor informe ao suporte'
      );
    }
  }

  return (
    <>
      <h1>
        L<span>A</span>R IOT
      </h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>SEU NOME</strong>
        <Input name="username" type="text" placeholder="Exemplo Teste" />

        <strong>SEU E-MAIL</strong>
        <Input name="email" type="email" placeholder="exemplo@gmail.com" />

        <strong>SUA SENHA</strong>
        <Input
          name="password"
          type="password"
          placeholder="******************"
        />

        <strong>CONFIRMAR SENHA</strong>
        <Input
          name="password_confirmation"
          type="password"
          placeholder="******************"
        />

        <button type="submit">
          {loading ? 'Carregando...' : 'Criar conta'}
        </button>
      </Form>
      <Link to="/">Já tenho login</Link>
    </>
  );
}
