# Query String Converter

This project is a script to convert a URL query string into a JSON object and send it to Google Analytics.

## Files

- `index.js`: This is the main script. It imports the `convertToJSON` function from `converter.js` and the `PostAPIData` function from `api.js`. It defines two test URLs and then converts them to JSON and posts the data to Google Analytics.

- `api.js`: This script defines the `PostAPIData` function which posts a JSON object to Google Analytics.

- `converter.js`: This script defines the `convertToJSON` function which converts a URL query string into a JSON object.

## Usage

1. Clone the repository and navigate to its directory.

2. Install the required dependencies with `npm install`.

3. Run the script with `node index.js`.

## Environment Variables

The script requires the following environment variables: 

Please create a new .env file with your credentials

- `MEASUREMENT_ID`: The measurement ID for Google Analytics.

- `API_SECRET`: The API secret for Google Analytics.
