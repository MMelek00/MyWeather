// WeatherInfo.tsx

import React from "react";
import Moment from "moment";

import { View, Image, StyleSheet, Text } from "react-native";
import { MonoText } from "../StyledText";

type CardComponentProps = {
  weatherInfo: WeatherAttributes;
  locationInfo: CurrentLocation;
};

const WeatherInfo: React.FC<CardComponentProps> = ({
  weatherInfo,
  locationInfo,
}) => {
  return (
    <View style={styles.container}>
      <MonoText style={styles.textCiy}>{locationInfo.name}</MonoText>
      <MonoText style={styles.textValue}>{Moment().format("LLL")}</MonoText>
      <MonoText style={styles.temperatureC} testID="temperature">
        {weatherInfo.temperatureC}°C
      </MonoText>
      <MonoText style={styles.conditionText}>
        {weatherInfo.conditionText}
      </MonoText>
      <Image
        source={{ uri: `https:${weatherInfo.conditionIcon}` }}
        style={{ width: 120, height: 80 }}
      />
    </View>
  );
};

//TODO add design system for deferent font sizes (Header1,Header2 ,Caption ... )
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 12,
    marginBottom: 26,
  },
  conditionText: {
    fontSize: 18,
  },
  textCiy: {
    fontSize: 22,
  },
  temperatureC: {
    fontSize: 72,
  },
  textValue: {
    fontSize: 16,
  },
});
export default WeatherInfo;
