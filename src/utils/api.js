const axios = require("axios");
require("dotenv").config();

const urlMP = `https://www.google-analytics.com/mp/collect?measurement_id=${process.env.MEASUREMENT_ID}&api_secret=${process.env.API_SECRET}`;
/**
 *
 * @param {object} data - this object is generated from the URL and is the payload sent to GA
 */
const PostAPIData = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(urlMP, data);
      console.log(response);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { PostAPIData };
