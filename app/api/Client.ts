import ApiConstants from "./ApiConstants";
import RemoteData from "./RemoteData";

export const getCurrentWeather = async (
  city: string
): Promise<WeatherResponse> => {
  const { data } = await RemoteData.get(
    `${ApiConstants.CURRENT}&q=${city}&aqi=no`
  );
  return data;
};
export const getForecastWeather = async (
  city: string,
  days: string = "1"
): Promise<WeatherResponse> => {
  const { data } = await RemoteData.get(
    `${ApiConstants.FORECAST}&q=${city}&days=${days}&aqi=no&alerts=no`
  );

  return data;
};
export const getAutocompleteCities = async (
  city: string
): Promise<AutocompleteResponse[]> => {
  const { data } = await RemoteData.get(
    `${ApiConstants.AUTOCOMPLETE}&q=${city}`
  );

  return data;
};
