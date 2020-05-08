//@ts-check
import { database } from "../init";

/**
 * Add a new item on the reference
 * @param {object} data 
 * @param {string} collection 
 */
export const create = async (collection, data) => {
  try {
    let current_datetime = new Date();
    let formatted_date =
      current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();

    const ref = database.collection(collection).doc(data.email);
    await ref
      .set({
        ...data,
        dateUTC: current_datetime,
        date: formatted_date
      })
      .then(res => {
        return {
          success: true,
          message: 'Data saved successfully."',
          data: {
            contact: res
          }
        };
      })
      .catch(error => {
        return {
          success: false,
          message: "An error while saving a item",
          error: {
            trace: error.trace,
            message: error.message
          }
        };
      });
  } catch (error) {
    console.error("Error:", error);
  }
};
