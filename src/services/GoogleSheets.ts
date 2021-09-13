import { google, Auth } from "googleapis";

const oauth2Client: Auth.OAuth2Client = new google.auth.OAuth2(
  process.env.REACT_APP_GOOGLE_SHEETS_OAUTH_CLIENT_ID,
  process.env.REACT_APP_GOOGLE_SHEETS_OAUTH_CLIENT,
  "http://localhost:3000/"
);

const scope = "https://www.googleapis.com/auth/sheets";

const url = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: "offline",

  // If you only need one scope you can pass it as a string
  // 1> scope pass as array<string>
  scope: scope,
});

// This will provide an object with the access_token and refresh_token.
// Save these somewhere safe so they can be used at a later time.
export const authenticateGoogleAPI = async () => {
  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
};

const googleSheets = google.sheets({
  version: "v4",
  auth: "temp",
});

const sheetsParams = {
  sheetsId: "17ED3JuIk1TLJiOo2IMKSAcM6s9ZJG0jS8Z5NMOtMJtA",
};

export const getSheetsURL = async () => {
  const res = await googleSheets.spreadsheets.get(sheetsParams);
  console.log(`The sheets url is ${res.data.url}`);
};
