// WeatherComponent.tsx

import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ForecastHourCard from "./ForecastHourCard";
import { MonoText } from "../StyledText";

type WeatherComponentProps = {
  hoursData: HourData[];
};
const SeparatorComponent = () => <View style={styles.itemSeparator} />;
const HeaderComponent = () => (
  <MonoText style={styles.headerText}>HOURLY FORECAST</MonoText>
);

const ForecastHoursComponent: React.FC<WeatherComponentProps> = ({
  hoursData,
}) => {
  return (
    <FlatList
      data={hoursData}
      keyExtractor={(item) => item.time_epoch.toString()}
      renderItem={({ item }) => <ForecastHourCard weatherInfo={item} />}
      ItemSeparatorComponent={SeparatorComponent}
      ListHeaderComponent={HeaderComponent}
    />
  );
};

const styles = StyleSheet.create({
  itemSeparator: {
    height: 2,
    backgroundColor: "gray",
  },
  headerText: {
    fontSize: 22,
    marginBottom: 12,
  },
});
export default ForecastHoursComponent;
