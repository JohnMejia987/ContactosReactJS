//@ts-check
import { database } from "../init";

/**
 * Delete the Item on the reference's location
 * @param {string} collection 
 * @param {string} email 
 */
export const deleteOne = (collection, email) => {
  const ref = database.collection(collection).doc(email);
  return ref
    .delete()
    .then(res => {
      console.log(res);
      return {
        success: true,
        message: "Item deleted",
        data: {
          deleted: email
        }
      };
    })
    .catch(error => {
      return {
        success: false,
        message: "Error while deleteing item " + email,
        error: {
          trace: error.trace,
          message: error.message
        }
      };
    });
};
