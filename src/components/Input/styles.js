import styled, { css } from 'styled-components';

import { Red } from '~/utils/pallete';

export const InputStyle = styled.input`
  ${({ error }) =>
    error &&
    css`
      border: 2px solid ${Red[0]} !important;
      margin-bottom: 0 !important;
    `}
`;

export const Span = styled.span`
  color: ${Red[0]};
  font-weight: bold;
  margin: 10px 0;
`;
