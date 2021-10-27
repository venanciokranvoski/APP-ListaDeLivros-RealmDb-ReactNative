import React from 'react';
import { Text, View} from 'react-native';

import { Container, Nome, Preco, CenterView, Botao, BotaoText } from './styles'

export default function Books({data, editar, apagar}) {
 return (
  <Container>
      <Nome>{data.id} - {data.nome}</Nome>
      <Preco> R$:  {data.preco}</Preco>

      <CenterView>
           <Botao onPress={()=> editar(data)}>
           <BotaoText>Editar</BotaoText>
           </Botao>

          <Botao onPress={()=> apagar(data)}>
          <BotaoText>Excluir</BotaoText>
          </Botao>
      </CenterView>
  </Container> 
 );
}