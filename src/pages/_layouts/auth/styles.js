import { darken } from 'polished';
import styled from 'styled-components';

import { Primary, Type, Others, BoxShadow } from '~/utils/pallete';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${Primary[0]};
`;

export const Content = styled.div`
  background: #fff;

  border: 1px solid #dfdfdf;
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  box-shadow: ${BoxShadow[8]};

  padding: 33px 30px;

  > h1 {
    color: ${Primary[0]};

    font-weight: bold;
    font-size: 28px;
    text-align: center;

    span {
      color: ${Others.A_color};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    width: 300px;

    strong {
      color: ${Type[0]};
      margin-bottom: 8px;
    }

    input {
      padding: 13px 15px;

      border: 1px solid ${Others.border};
      border-radius: 4px;

      & + strong {
        margin-top: 20px;
      }
    }

    button {
      color: white;
      font-weight: bold;
      font-size: 16px;

      background-color: ${Primary[0]};

      margin-top: 16px;
      padding: 13px 0;

      border-radius: 4px;
      box-shadow: ${BoxShadow[4]};

      transition: background 0.2s linear;
      &:hover {
        background-color: ${darken(0.1, Primary[0])};
      }
    }
  }

  form + div {
    display: flex;
    justify-content: space-between;
  }

  a {
    display: flex;
    justify-content: center;

    margin-top: 20px;

    color: ${Type.off};
    font-weight: bold;

    transition: color 0.1s linear;
    &:hover {
      color: ${Type[0]};
    }
  }
`;
