import Realm from 'realm';
import bookSchema from '../Schemas/BookSchemas';

export default function getRealm(){
    return Realm.open({
        schema: [bookSchema]
    });
}