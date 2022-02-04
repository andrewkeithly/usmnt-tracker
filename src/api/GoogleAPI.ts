import { sheets_v4 } from "googleapis";

// Client ID and API key from the Developer Console
const API_KEY = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;
const SHEETS_ID = process.env.REACT_APP_GOOGLE_SHEETS_ID;
const SPREADSHEET_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_ID}`;

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = [
  "https://sheets.googleapis.com/$discovery/rest?version=v4",
];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

/**
 * @description get boss reference and it's name
 * @returns {GaxiosResponse<sheets_v4.Schema$ValueRange>} google sheet api POST response about boss information
 */
export const getPlayers = () => {
  return axios.get(SPREADSHEET_URL, {
    headers: { key: API_KEY },
  });
};
