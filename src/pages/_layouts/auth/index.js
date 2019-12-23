import React from 'react';

import PropTypes from 'prop-types';

import Logo from '~/assets/logo.svg';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <img src={Logo} alt="Logo Peggy" />
        {children}
      </Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
