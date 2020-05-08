//@ts-check
import { database } from "../init";

/**
 * Update an Item already on the database
 * @param {object} data 
 * @param {string} collection 
 * @param {string} email 
 */
export const update = (data, collection, email) => {
  const ref = database.collection(collection).doc(email);
  return ref
    .update(data)
    .then(res => {
      return {
        success: true,
        message: 'Update on ' + email,
        data: {
          contact: res
        }
      };
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
