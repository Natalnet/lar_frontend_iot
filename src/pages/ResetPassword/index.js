import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import Input from '~/components/Input';
import api from '~/services/api';
import history from '~/services/history';

const schema = Yup.object().shape({
  password: Yup.string().required('A senha é obrigatória'),
  password_confirmation: Yup.string().required('Confirmar senha é obrigatório'),
});

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(results) {
    setLoading(true);

    const tokenQuery = window.location.search.split('=');

    if (!tokenQuery[1]) {
      return toast.error('Você não tem um token para prosseguir');
    }

    if (results.password !== results.password_confirmation) {
      return toast.error('Senhas diferentes! Arrume para prosseguir');
    }

    results = {
      ...results,
      token: tokenQuery[1],
    };
    try {
      const { data } = await api.put('passwords', results);

      setLoading(false);

      const { token } = data;
      localStorage.setItem('access_token', token);
      toast.success('Senha alterada com sucesso!');
      return history.push('/dispositivos');
    } catch (err) {
      setLoading(false);
      return toast.error(err.response.data[0].message);
    }
  }

  return (
    <>
      <h1>
        L<span>A</span>R IOT
      </h1>
      <Form schema={schema} onSubmit={handleSubmit}>
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
          {loading ? 'Carregando...' : 'Salvar senha'}
        </button>
      </Form>
    </>
  );
}
