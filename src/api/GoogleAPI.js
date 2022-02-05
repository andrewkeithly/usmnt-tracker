// Client ID and API key from the Developer Console
import axios from "axios";

const API_KEY = process.env.REACT_APP_GOOGLE_SHEETS_API_KEY;
const SHEETS_ID = process.env.REACT_APP_SHEETS_ID;
const SERVICE_ENDPOINT = "https://sheets.googleapis.com";

export const getSheetAxios = () => {
  const range = "Sheet1!A2:AL843";
  return axios.get(
    `${SERVICE_ENDPOINT}/v4/spreadsheets/${SHEETS_ID}/values/${range}`,
    { params: { key: API_KEY } }
  );
};
