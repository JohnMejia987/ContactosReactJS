//@ts-check
import {firebaseVersion} from './init';
import {create} from './CRUD/create';
import {deleteOne} from './CRUD/delete';
import {readOne} from './CRUD/readOne';
import {readAll} from './CRUD/readAll';
import {update} from './CRUD/update';

/**
 * Serves the functions for the database
 */
export default {
    firebaseVersion,
    create,
    deleteOne,
    readAll,
    readOne,
    update
}