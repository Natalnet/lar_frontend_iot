import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Form } from '@rocketseat/unform';
import * as Yup from 'yup';

import Input from '~/components/Input';
import api from '~/services/api';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
});

export default function SignIn() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(results) {
    setLoading(true);
    results = {
      ...results,
      redirect_url: 'http://localhost:3000/reset-password',
    };
    try {
      await api.post('passwords', results);

      setLoading(false);

      return toast.success(
        'Foi enviado um e-mail contendo o link para recuperar sua senha!'
      );
    } catch (err) {
      setLoading(false);
      return toast.error(err.response.data.error.message);
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

        <button type="submit">
          {loading ? 'Carregando...' : 'Enviar e-mail'}
        </button>
      </Form>
      <Link to="/">Voltar para login</Link>
    </>
  );
}
