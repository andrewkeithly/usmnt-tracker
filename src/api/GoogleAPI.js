// Client ID and API key from the Developer Console
import { gapi } from "gapi-script";

const API_KEY = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;
const SHEETS_ID = process.env.REACT_APP_SHEETS_ID;
// const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
// const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

export const getSheet = async () => {
  const results = await gapi.load("client", () =>
    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: null,
        discoveryDocs: [
          "https://sheets.googleapis.com/$discovery/rest?version=v4",
        ],
      })
      .then(function () {
        // Executes an API request, and returns a Promise.
        return gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: SHEETS_ID,
          range: "Sheet1!A2:AL843",
        });
      })
      .then(
        function (response) {
          return response.result.values;
        },
        function (reason) {
          console.log("Error: " + reason.result.error.message);
        }
      )
  );
  return results
};
