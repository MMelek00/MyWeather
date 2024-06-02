/* App config for apis */
const APIKEY = "6a2fa4cf67b14fcfa0d205813243105";
const apiBaseUrl = "api.weatherapi.com/v1";

const ApiConstants = {
  BASE_URL_SECURE: `https://${apiBaseUrl}`,
  CURRENT: `/current.json?key=${APIKEY}`,
  FORECAST: `/forecast.json?key=${APIKEY}`,
  AUTOCOMPLETE: `/search.json?key=${APIKEY}`,
};
export default ApiConstants;
