import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
background-color: #373737;
padding-top: 45px;
`;

export const Logo = styled.Text`
font-size:35px;
text-align: center;
color: #FFF;
font-weight: bold;
`;

export const Title  = styled.Text`
font-size:25px;
text-align:center;
color:#FFF;
font-weight: bold;
margin-top:10px;

`;
export const Input  = styled.TextInput`
height: 40px;
margin-left:15px;
margin-bottom:10px;
margin-right:15px;
padding:5px;
border-radius:5px;
background-color:#fff;
`;

export const CenterView = styled.View`
align-items: center;
flex-direction: row;
justify-content: space-around;
`;
export const Botao = styled.TouchableOpacity`
background-color: #FFF;
height:40px;
border-radius:5px;
padding:5px;
margin-bottom:10px;

`;
export const BotaoText = styled.Text`
font-size:23px;
align-items: center;
color: #121212;
`;

export const List = styled.FlatList`
  contentContainerStyle: {paddingHorizontal:20}
  padding: 20px;
`;
