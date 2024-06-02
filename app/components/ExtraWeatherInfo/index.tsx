// ExtraWeatherInfo.tsx

import React from "react";

import { View, StyleSheet, Text } from "react-native";
import { MonoText } from "../StyledText";

type CardComponentProps = {
  wind: number;
  humidity: number;
};

const ExtraWeatherInfo: React.FC<CardComponentProps> = ({ wind, humidity }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.textLabel}>Wind</Text>
        <MonoText style={styles.textValue} testID="wind">
          {wind} mph
        </MonoText>
      </View>
      <View style={styles.card}>
        <Text style={styles.textLabel}>Humidity</Text>
        <MonoText style={styles.textValue} testID="humidity">
          {humidity} %
        </MonoText>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomColor: "gray",
    borderTopColor: "gray",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 12,
    marginBottom: 18,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  textLabel: {
    color: "white",
  },
  textValue: {
    fontSize: 16,
  },
});
export default ExtraWeatherInfo;
