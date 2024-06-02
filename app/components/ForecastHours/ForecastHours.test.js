import React from "react";
import renderer from "react-test-renderer";
import ForecastHoursComponent from ".";
import ForecastHourCard from "./ForecastHourCard";
import { FlatList } from "react-native"; // Import FlatList from react-native

describe("ForecastHoursComponent Component", () => {
  it("renders correctly", () => {
    const hoursData = [
      {
        time_epoch: 1622700000,
        time: "2022-06-03 00:00",
        conditionText: "Sunny",
        conditionIcon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        temperatureC: 25,
      },
      {
        time_epoch: 1622703600,
        time: "2022-06-03 01:00",
        conditionText: "Cloudy",
        conditionIcon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
        temperatureC: 24,
      },
    ];

    const component = renderer.create(
      <ForecastHoursComponent hoursData={hoursData} />
    );
    const instance = component.root;

    // Check if the FlatList component is rendered correctly
    const flatList = instance.findByType(FlatList); // Use FlatList from react-native
    expect(flatList).toBeTruthy();

    // Check if the ListHeaderComponent is rendered correctly
    const headerText = instance.findByProps({ children: "HOURLY FORECAST" });
    expect(headerText).toBeTruthy();

    // Check if the ForecastHourCard components are rendered correctly
    const forecastHourCards = instance.findAllByType(ForecastHourCard);
    expect(forecastHourCards.length).toEqual(hoursData.length);
  });
});
