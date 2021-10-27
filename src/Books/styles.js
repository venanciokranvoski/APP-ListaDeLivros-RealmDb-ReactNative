import styled from 'styled-components/native';

export const Container = styled.View`
padding:20px;
border-radius:10px;
background:#FFF;
margin-bottom:35px;
width:380px;
height:100px;
`;

export const Nome = styled.Text`
font-size: 20px;
fontWeight: bold;
color: #000;
`;

export const Preco = styled.Text`
font-size:17px;
font-style: italic;
`;

export const CenterView = styled.View`
flex-direction: row; 
margin:15px 
justify-content:space-around;
paddingRight:20px;

`;

export const Botao = styled.TouchableOpacity`
background-color: #DDD;
margin-rigth: 26px;
border-radius:5px;
`;
export const BotaoText = styled.Text`
color: #000;
font-size:12px;
padding:5px;

`;


