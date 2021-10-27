import React, { useEffect, useState } from 'react';
import {Keyboard} from 'react-native';

// importando instancia de conexão do banco 
import getRealm from './conexaoREALM-DB/realm';
//=========================================
import { Container, Title, Logo, Input, CenterView, Botao, BotaoText, List } from './styles';
import Books from './Books'

export default function App(){
const  [nome, setNome]    = useState('');
const  [preco, setPreco]  = useState('');
const  [books, setBooks]  = useState([]);
const  [idEdit, setEdit ] = useState(null);
const  [ disabledBtn, setDisabledBtn] = useState(false);

useEffect(() => {
    loadBooks = async () => {
    const realm = await getRealm();
    const data = realm.objects('Book');
    setBooks(data);
    }
    loadBooks();
},[]);

// abre conecao trazendo a conexao usando getRealm
saveBook = async (data) => {
    const realm = await getRealm();
    
    // trata a condicao de gerar o audio somando com o id que ja esta na base fazendo isso ele consiste em 
    // nao permitir violaçao de chaves 
    const id = realm.objects('Book').sorted('id', true).length > 0
    ? realm.objects('Book').sorted('id', true)[0].id + 1 : 1;

    const dadosLivro = {
        id : id,
        nome: data.nome,
        preco:data.preco
    }

    realm.write(() => {
    realm.create('Book', dadosLivro)
    });

  }

    addBook  = async () => {
    if(nome === '' || preco === '' ){
        alert('Preencha todas as Informações de Login');
        return;
    }
    // colocando um try cat (para gerar excesao em caso de erro)
    try{
        // Se ele passar a constante recebe esses valores
        const data = { nome: nome, preco:preco };
        await saveBook(data)

        setPreco('');
        setNome('');
        Keyboard.dismiss();

    }catch(err){
        alert(err)
    }

  }
  function editarBook(data){
      setNome(data.nome);
      setPreco(data.preco);
      setEdit(data.id);
      setDisabledBtn(true);
  }

   editBook = async () => {
       if (idEdit === null){
           alert('Voce nao pode editar!');
           return;
        }
     const realm = await getRealm();

     const response ={
        id: idEdit,
        nome:nome,
        preco:preco
      };
      // função edit no RealmDB
      await realm.write(() => {
          realm.create('Book', response, 'modified')
      })

      const dadosAlterados = await realm.objects('Book').sorted('id', false);
      setBooks(dadosAlterados);
      setNome('');
      setPreco('');
      setEdit(null);
      setDisabledBtn(false)
      Keyboard.dismiss();

    }
    //passa a conexao, o await aguarda a conexao 
    apagarBook = async (data) =>  {
       const realm = await getRealm();
       const ID = data.id;

    // ----Procura para pegar o id para ter a certeza  que foi clicado
    // ----funcao de delete no banco realmDB
       realm.write(() => {  
          if(realm.objects('Book').filtered('id = '+ ID).length > 0 ){
              realm.delete(
                  realm.objects('Book').filtered('id =' + ID)
              )    
          } 
       })

       const livrosAtuais = await realm.objects('Book').sorted('id', false);
       setBooks(livrosAtuais);

    }
    
  return(
      <Container>
          <Logo>Proximos livros</Logo>

          <Title>Nome:</Title>
          <Input
           autoCapitalize="none" 
           autoCorrect={false}
           value={nome}
           onChangeText={(text) => setNome(text)}
            /> 

          <Title>Preço:</Title>
          <Input autoCapitalize="none"
           autoCorrect={false} 
           value={preco}
           onChangeText={(preco) => setPreco(preco)}/> 

          <CenterView>
              <Botao
               onPress= {addBook}  
               disabled={disabledBtn} 
               style={{opacity:disabledBtn ? 0.1 : 1 }} >  
                  <BotaoText>Cadastrar</BotaoText>    
              </Botao>      
          </CenterView>

          <CenterView>
              <Botao onPress={ editBook }>
                  <BotaoText>Editar</BotaoText>    
              </Botao>      
          </CenterView>    

 
         <List  showsVerticalScrollIndicator={false}
         keyboardShouldPersistTaps='handled'
         data={books}
         keyExtractor={item => String(item.id)}
         renderItem={({ item }) => (<Books data={item} editar={editarBook} apagar={apagarBook} />) }
         />

       
      </Container>
  ); 
}