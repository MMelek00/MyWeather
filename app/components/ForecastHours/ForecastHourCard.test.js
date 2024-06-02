import React from "react";
import renderer from "react-test-renderer";
import Moment from "moment";
import ForecastHourCard from "./ForecastHourCard";

describe("ForecastHourCard Component", () => {
  it("renders correctly", () => {
    const weatherInfo = {
      time: Moment().format(), // Set the time to the current time
      conditionText: "Sunny",
      conditionIcon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
      temperatureC: 25,
    };

    // Render the component
    const component = renderer.create(
      <ForecastHourCard weatherInfo={weatherInfo} />
    );
    const instance = component.root;

    // Check if the time is displayed correctly
    const timeText = instance.findByProps({
      children: Moment(weatherInfo.time).format("LT"),
    });
    expect(timeText).toBeTruthy();

    // Check if the weather condition text is displayed correctly
    const conditionText = instance.findByProps({
      children: weatherInfo.conditionText,
    });
    expect(conditionText).toBeTruthy();

    // Check if the temperature is displayed correctly
    const temperatureText = instance.findByProps({ testID: "temperature" });
    expect(temperatureText).toBeTruthy();

    // Check if the weather condition icon is displayed correctly
    const conditionIcon = instance.findByType("Image");
    expect(conditionIcon.props.source.uri).toBe(
      `https:${weatherInfo.conditionIcon}`
    );
  });
});
