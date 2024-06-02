import { useQuery } from "@tanstack/react-query";
import { getForecastWeather } from "../api/Client";
const useForecastWeather = (city: string) =>
  useQuery({
    queryKey: ["forecastWeather", city],
    queryFn: () => getForecastWeather(city),
  });

export default useForecastWeather;
