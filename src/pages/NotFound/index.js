import React, { useMemo } from 'react';

import { ReactComponent as Icon1 } from '~/assets/404_1.svg';
import { ReactComponent as Icon2 } from '~/assets/404_2.svg';
import Return from '~/components/Buttons/Return';

import { Wrapper, Container } from './styles';

export default function NotFound() {
  const icon = useMemo(() => Math.floor(Math.random() * 2), []);

  return (
    <Wrapper>
      <Container>
        {icon === 1 ? (
          <Icon1 width={350} height={350} />
        ) : (
          <Icon2 width={350} height={350} />
        )}
        <div>
          <h1>Oops....</h1>
          <span>
            Não conseguimos encontrar essa página! Pode ser um link antigo ou
            talvez tenha sido movido
          </span>
          <Return />
        </div>
      </Container>
    </Wrapper>
  );
}
