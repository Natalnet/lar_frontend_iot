import React from 'react';
import { MdKeyboardReturn } from 'react-icons/md';

import history from '~/services/history';

import { Container } from './styles';

export default function Return() {
  return (
    <Container onClick={() => history.goBack()}>
      <MdKeyboardReturn size={24} />
      <span>VOLTAR</span>
    </Container>
  );
}
