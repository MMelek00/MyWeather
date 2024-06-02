import { ActivityIndicator, Platform, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  transformWeatherHoursData,
  transformCurrentWeatherData,
  transformLocationData,
} from "@/utils/convertToUsable";
import Colors from "@/constants/Colors";
import useForecastWeather from "@/hooks/useForecastWeather";
import ExtraWeatherInfo from "@/components/ExtraWeatherInfo";
import WeatherInfo from "@/components/WeatherInfo";
import { SuggestionInput } from "@/components/SuggestionInput";
import { useState } from "react";
import ForecastHoursComponent from "@/components/ForecastHours";
import { MonoText } from "@/components/StyledText";

function getNext5Hours(hoursData: HourData[]): HourData[] {
  const currentTimeEpoch = Date.now() / 1000; // Current time in seconds
  const next5Hours = hoursData
    .filter((hour) => hour.time_epoch >= currentTimeEpoch)
    .slice(0, 5); // Take only the next 5 hours
  return next5Hours;
}

export default function MainScreen() {
  //TODO set initial location to user current location (request permission to access location.. )
  const [selectedItem, setSelectedItem] = useState("Berlin");

  const { data, isLoading, isSuccess } = useForecastWeather(selectedItem);
  const transformedHoursData = transformWeatherHoursData(
    data as WeatherResponse
  );
  const transformedWeatherData = transformCurrentWeatherData(
    data as WeatherResponse
  );
  const transformedLocationData = transformLocationData(
    data as WeatherResponse
  );
  const onCityChange = ({ city }: { city: string }) => {
    setSelectedItem(city);
  };
  if (!isSuccess) {
    return (
      <View style={styles.container}>
        <SuggestionInput onchange={onCityChange} />

        <MonoText>Something Went Wrong Please Try again new city</MonoText>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <SuggestionInput onchange={onCityChange} />
          <WeatherInfo
            weatherInfo={transformedWeatherData}
            locationInfo={transformedLocationData}
          />
          <ExtraWeatherInfo
            wind={transformedWeatherData.windSpeedMph}
            humidity={transformedWeatherData.humidity}
          />
          <ForecastHoursComponent
            hoursData={getNext5Hours(transformedHoursData)}
          />
        </>
      )}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingTop: 90,
    paddingBottom: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
