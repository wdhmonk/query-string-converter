/**
 * This function will convert the existing Data object into a new object with no nulls
 * @param {object} data - this object is generated from the URL and is the payload sent to GA
 *
 * @returns {object} - will return the converted data in an object format
 */
const nullChecker = ({ data }) => {
  const parsedData = JSON.parse(data, (key, value) => {
    if (value === null) {
      // if the value is null
      return "not set"; // return undefined so the key-value pair is deleted
    }
    return value; // otherwise, return the value as is
  });
  return parsedData;
};

module.exports = { nullChecker };
