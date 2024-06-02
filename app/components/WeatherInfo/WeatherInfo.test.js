// WeatherInfo.test.tsx

import React from "react";
import { Image } from "react-native";
import renderer from "react-test-renderer";
import WeatherInfo from ".";

describe("WeatherInfo Component", () => {
  it("renders correctly", () => {
    const weatherInfo = {
      time: "2024-06-02 12:00",
      conditionText: "Sunny",
      conditionIcon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
      temperatureC: 25,
    };

    const locationInfo = {
      name: "City Name",
    };

    // Render the component
    const component = renderer.create(
      <WeatherInfo weatherInfo={weatherInfo} locationInfo={locationInfo} />
    );
    const instance = component.root;

    // Check if the city name is displayed correctly
    const cityNameText = instance.findByProps({ children: locationInfo.name });
    expect(cityNameText).toBeTruthy();

    // Check if the temperature is displayed correctly
    const temperatureText = instance.findByProps({ testID: "temperature" });
    expect(temperatureText).toBeTruthy();

    // Check if the weather condition text is displayed correctly
    const conditionText = instance.findByProps({
      children: weatherInfo.conditionText,
    });
    expect(conditionText).toBeTruthy();

    // Check if the weather condition icon is displayed correctly
    const conditionIcon = instance.findByType(Image);
    expect(conditionIcon.props.source.uri).toBe(
      `https:${weatherInfo.conditionIcon}`
    );
  });
});
