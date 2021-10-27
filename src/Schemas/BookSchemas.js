   //  =========================================
   //  Criando a base de Dados no Realm-DB .....
   //  =========================================
export default class bookSchema{
    static schema = {
        name:'Book',
        primaryKey:'id',
        properties:{
            id: { type: 'int', indexed: true  },
            nome: 'string',
            preco: 'string'
            }
       }
   }