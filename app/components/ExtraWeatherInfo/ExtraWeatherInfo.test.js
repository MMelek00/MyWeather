import React from "react";
import renderer from "react-test-renderer";
import ExtraWeatherInfo from ".";

describe("ExtraWeatherInfo Component", () => {
  it("renders correctly with given wind and humidity", () => {
    const tree = renderer
      .create(<ExtraWeatherInfo wind={10} humidity={50} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders wind and humidity labels correctly", () => {
    const component = renderer.create(
      <ExtraWeatherInfo wind={20} humidity={60} />
    );
    const instance = component.root;

    // Check if the labels are displayed correctly
    const windLabel = instance.findByProps({ children: "Wind" });
    const humidityLabel = instance.findByProps({ children: "Humidity" });

    expect(windLabel).toBeTruthy();
    expect(humidityLabel).toBeTruthy();
  });

  it("renders correct wind and humidity values", () => {
    // Define wind and humidity values
    const wind = 15; // Assuming wind speed is 15 mph
    const humidity = 55; // Assuming humidity is 55%

    // Render the component
    const component = renderer.create(
      <ExtraWeatherInfo wind={wind} humidity={humidity} />
    );
    const instance = component.root;

    // Find the text elements containing wind and humidity values
    const windText = instance.findByProps({ testID: "wind" });
    const humidityText = instance.findByProps({ testID: "humidity" });

    // Extract the text content from the elements
    const windContent = windText.props.children.join(""); // Convert array to string
    const humidityContent = humidityText.props.children.join(""); // Convert array to string

    // Assert wind and humidity values are correct
    expect(windContent).toEqual(`${wind} mph`);
    expect(humidityContent).toEqual(`${humidity} %`);
  });
});
