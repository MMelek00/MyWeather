// ForecastHourCard.tsx

import React from "react";
import Moment from "moment";

import { View, Image, StyleSheet } from "react-native";
import { MonoText } from "../StyledText";

type CardComponentProps = {
  weatherInfo: HourData;
};

const ForecastHourCard: React.FC<CardComponentProps> = ({ weatherInfo }) => {
  return (
    <View style={styles.card}>
      <MonoText>{Moment(weatherInfo.time).format("LT")}</MonoText>
      <View style={styles.rowTimer}>
        <MonoText
          style={styles.weatherCondition}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {weatherInfo.conditionText}
        </MonoText>
        <Image
          source={{ uri: `https:${weatherInfo.conditionIcon}` }}
          style={{ width: 30, height: 30 }}
        />
      </View>
      <MonoText testID="temperature">{weatherInfo.temperatureC}°C</MonoText>
    </View>
  );
};
const styles = StyleSheet.create({
  rowTimer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  weatherCondition: {
    width: "60%",
    alignSelf: "center",
  },
});
export default ForecastHourCard;
