//@ts-check
import { database } from "../init";

/**
 * Read one Item by id
 * @param {string} email 
 * @param {string} collection 
 */
export const readOne = (collection, email) => {
  const ref = database.collection(collection).doc(email);
  return ref.get().then(function(doc) {
    if (doc.exists) {
      const data = doc.data()
      return {
        success: true,
        message: 'Read item ' + email,
        data: {
          contact: data
        }
      };
    } else {
      //contact does not exist..
      return {
        success: false,
        message: 'An error while reading item ' + email,
        error: {
          trace: '/src/DB/CRUD/readOne.js',
          message: 'Data not exists'
        }
      };
    }
  })
    .catch(error => {
      return {
        success: false,
        message: 'An error while reading item ' + email,
        error: {
          trace: error.trace,
          message: error.message
        }
      };
    });
};
