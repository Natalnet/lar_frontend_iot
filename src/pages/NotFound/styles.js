import styled from 'styled-components';

import { BoxShadow, Primary, Type } from '~/utils/pallete';

export const Wrapper = styled.div`
  height: 100vh;
  background: #ff991f;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  background: #dfe1e5;

  border-radius: 9px;

  box-shadow: ${BoxShadow[16]};

  padding: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    max-width: 512px;

    h1 {
      font-size: 100px;
      color: ${Primary[0]};
    }

    > span {
      color: ${Type[200]};
      font-size: 30px;
      text-align: center;
      margin-top: 30px;
      font-weight: bold;
    }

    button {
      margin-top: 30px;
    }
  }
  @media (max-width: 850px) {
    flex-direction: column;

    div {
      h1 {
        font-size: 60px;
      }

      > span {
        font-size: 20px;
        margin-top: 15px;
      }
      button {
        margin-top: 15px;
      }
    }

    > svg {
      width: 180px;
      height: 180px;
    }
  }
`;
