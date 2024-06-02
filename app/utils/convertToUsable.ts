// transformWeatherData.ts

export const transformWeatherHoursData = (
  weatherData: WeatherResponse
): HourData[] => {
  return (
    weatherData?.forecast?.forecastday[0]?.hour.map((hour: any) => ({
      time: hour.time,
      time_epoch: hour.time_epoch,
      temperatureC: hour.temp_c,
      temperatureF: hour.temp_f,
      conditionText: hour.condition.text,
      conditionIcon: hour.condition.icon,
      windSpeedMph: hour.wind_mph,
      windSpeedKph: hour.wind_kph,
      humidity: hour.humidity,
      uvIndex: hour.uv,
    })) || []
  );
};

export const transformLocationData = (
  weatherData: WeatherResponse
): CurrentLocation => ({
  name: weatherData?.location.name,
  region: weatherData?.location.region,
  country: weatherData?.location.country,
  localtime: weatherData?.location.localtime,
  localtime_epoch: weatherData?.location.localtime_epoch,
});

export const transformCurrentWeatherData = (
  weatherData: WeatherResponse
): WeatherAttributes => ({
  time: weatherData?.current.last_updated,
  time_epoch: weatherData?.location.localtime_epoch,
  temperatureC: weatherData?.current.temp_c,
  temperatureF: weatherData?.current.temp_f,
  conditionText: weatherData?.current.condition.text,
  conditionIcon: weatherData?.current.condition.icon,
  humidity: weatherData?.current.humidity,
  uvIndex: weatherData?.current.uv,
  windSpeedMph: weatherData?.current.wind_mph,
  windSpeedKph: weatherData?.current.wind_kph,
});
