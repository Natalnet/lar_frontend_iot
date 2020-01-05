import React, { useState, useEffect } from 'react';
import { IoIosLogOut } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import api from '~/services/api';
import history from '~/services/history';

import { Container, Content, Menu, User } from './styles';

export default function Header() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getInformations() {
      const { data } = await api.get('/account');

      setUser(data);
    }

    getInformations();
  }, []);

  function logout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <Container>
      <Content>
        <Menu>
          <aside>
            <img src={logo} alt="LarIot" />
            <strong>
              L<span>A</span>R IOT
            </strong>
          </aside>
          <div>
            <NavLink to="/dispositivos">Meus dispositivos</NavLink>
            <NavLink to="/dispositivios/adicionar">
              Adicionar Dispositivos
            </NavLink>
            <NavLink to="/usuarios">Usuários</NavLink>
          </div>
        </Menu>
        <User>
          <img
            src="https://api.adorable.io/avatars/36/abott@adorable.png"
            alt="Avatar"
          />
          <div>
            <strong>{user.username}</strong>
            {/* <NavLink to="/perfil">Meu perfil</NavLink> Only in next version */}
          </div>
          <IoIosLogOut size={36} onClick={() => logout()} />
        </User>
      </Content>
    </Container>
  );
}
