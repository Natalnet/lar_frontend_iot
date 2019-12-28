import styled from 'styled-components';

import { Others, BoxShadow } from '~/utils/pallete';

export const Container = styled.button`
  background: ${Others.background};

  padding: 6px 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${BoxShadow[8]};

  color: white;
  font-weight: bold;

  border-radius: 4px;

  svg {
    margin-right: 5px;
  }
`;
