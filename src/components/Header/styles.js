import styled from 'styled-components';

import { Type, Others, BoxShadow, Primary } from '~/utils/pallete';

export const Container = styled.div`
  height: 65px;
  background: #fff;
  border-bottom: 1px solid ${Others.border};
  padding: 0 15px;

  box-shadow: ${BoxShadow[6]};

  display: flex;
  justify-content: center;

  margin-bottom: 30px;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1400px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;

  aside {
    display: flex;
    align-items: center;
    img {
      height: 48px;
      width: 48px;
    }

    strong {
      font-size: 18px;
      color: ${Primary[0]};

      span {
        color: ${Others.A_color};
      }
    }
    padding-right: 30px;
    border-right: 1px solid ${Others.border};
  }

  div {
    margin-left: 30px;

    a {
      color: ${Type.off};
      font-weight: bold;

      transition: color 0.1s linear;

      &[aria-current] {
        color: ${Type.active};
      }

      &:hover {
        color: ${Type.active};
      }

      & + a {
        margin-left: 20px;
      }
    }
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 40px;
  }

  div {
    margin-left: 8px;
    display: flex;
    flex-direction: column;

    strong {
      color: ${Type[0]};
    }

    a {
      font-weight: bold;
      color: ${Type[400]};
      margin-top: 4px;

      transition: color 0.1s linear;

      &[aria-current] {
        color: ${Type[0]};
      }

      &:hover {
        color: ${Type[200]};
      }
    }
  }

  svg {
    margin-left: 32px;
    color: ${Type.off};

    transition: color 0.1s linear;

    cursor: pointer;

    &:hover {
      color: ${Type[0]};
    }
  }
`;
