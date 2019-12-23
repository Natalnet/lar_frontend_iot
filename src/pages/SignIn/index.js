import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import Input from '~/components/Input';
import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(results) {
    setLoading(true);
    try {
      const { data } = await api.post('sessions', results);

      setLoading(false);

      const { token } = data;
      localStorage.setItem('access_token', token);
      return history.push('/dispositivos');
    } catch (err) {
      setLoading(false);
      return toast.error('Falha na autenticação, verifique seus dados');
    }
  }

  return (
    <>
      <h1>
        L<span>A</span>R IOT
      </h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>SEU E-MAIL</strong>
        <Input name="email" type="email" placeholder="exemplo@gmail.com" />
        <strong>SUA SENHA</strong>
        <Input
          name="password"
          type="password"
          placeholder="******************"
        />

        <button type="submit">
          {loading ? 'Carregando...' : 'Entrar no sistema'}
        </button>
      </Form>
      <div>
        <Link to="/register">Criar conta grátis</Link>
        <Link to="/recover-password">Recuperar senha</Link>
      </div>
    </>
  );
}
