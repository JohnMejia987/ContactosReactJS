//@ts-check
import { database } from "../init";

/**
 * Read all the Items under certain reference
 * @param {string} collection 
 * @param {function} callback 
 */
export const readAll = (collection, callback) => {
  const ref = database.collection(collection);
  return ref.get()
  .then((snapshot) => {
    const contacts = []
    snapshot.forEach((doc) => {
      contacts.push({...doc.data()})
    });
    callback(contacts);
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
};
