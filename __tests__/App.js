import React from 'react';
import { } from 'react-native';

import { Container, Title, Logo, Input } from './styles';

export default function App(){
  return(
      <Container>
          <Logo>Proximos livros</Logo>

          <Title>Nome:</Title>
          <Input autoCapitalize="none" autoCorrect={false} /> 

          <Title>Preço:</Title>
          <Input autoCapitalize="none" autoCorrect={false} /> 
       
      </Container>
  ); 
}