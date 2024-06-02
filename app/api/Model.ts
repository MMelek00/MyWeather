// types.ts

type Condition = {
  text: string;
  icon: string;
  code: number;
};

type WeatherAttributes = {
  time: string;
  time_epoch: number;
  temperatureC: number;
  temperatureF: number;
  conditionText: string;
  conditionIcon: string;
  windSpeedMph: number;
  windSpeedKph: number;
  humidity: number;
  uvIndex: number;
};

type HourData = WeatherAttributes;

type Current = WeatherAttributes & {
  lastUpdatedEpoch: number;
  lastUpdated: string;
  isDay: number;
  windDegree: number;
  windDir: string;
  pressureMb: number;
  pressureIn: number;
  precipMm: number;
  precipIn: number;
  cloud: number;
  feelslikeC: number;
  feelslikeF: number;
  windchillC: number;
  windchillF: number;
  heatindexC: number;
  heatindexF: number;
  dewpointC: number;
  dewpointF: number;
  visKm: number;
  visMiles: number;
  gustMph: number;
  gustKph: number;
};
type RawCurrent = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};
type ForecastDay = {
  date: string;
  date_epoch: number;
  hour: HourData[];
};

type Forecast = {
  forecastday: ForecastDay[];
};

type CurrentLocation = {
  name: string;
  region: string;
  country: string;
  localtime_epoch: number;
  localtime: string;
};
type AutocompleteResponse = CurrentLocation & {
  id: string;
};

type WeatherResponse = {
  location: CurrentLocation;
  current: RawCurrent;
  forecast: Forecast;
};
