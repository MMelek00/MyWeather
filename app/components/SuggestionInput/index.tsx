import { getAutocompleteCities } from "@/app/api/Client";
import React, { memo, useCallback, useRef, useState } from "react";
import { Dimensions, Text, View, Platform, StyleSheet } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

type SuggestionInputProps = {
  onchange: (selected: { city: string }) => void;
};

export const SuggestionInput = memo(({ onchange }: SuggestionInputProps) => {
  const [loading, setLoading] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState(null);

  const getSuggestions = useCallback(async (q: string) => {
    if (typeof q !== "string" || q.length < 3) {
      setSuggestionsList(null);
      return;
    }
    setLoading(true);

    const cities = await getAutocompleteCities(q);
    const suggestions = cities.map((item) => ({
      id: item.id as string,
      title: item.name + ", " + item.country,
    }));
    setSuggestionsList(suggestions as any);
    setLoading(false);
  }, []);

  const onClearPress = useCallback(() => {
    setSuggestionsList(null);
  }, []);

  return (
    <View style={[styles.wrapper, Platform.select({ ios: { zIndex: 1 } })]}>
      <AutocompleteDropdown
        direction={Platform.select({ ios: "down" })}
        dataSet={suggestionsList}
        onChangeText={getSuggestions}
        onSelectItem={(item) => {
          item && item.title && onchange({ city: item.title });
        }}
        suggestionsListMaxHeight={Dimensions.get("window").height * 0.4}
        onClear={onClearPress}
        loading={loading}
        useFilter={false} // set false to prevent rerender twice
        textInputProps={{
          placeholder: "Type 3+ letters (Berlin...)",
          autoCorrect: false,
          autoCapitalize: "none",
          style: styles.textInput,
        }}
        inputContainerStyle={styles.inputContainerStyle}
        suggestionsListContainerStyle={styles.suggestionsListContainerStyle}
        containerStyle={{ flexGrow: 1, flexShrink: 1 }}
        renderItem={(item) => <Text style={styles.itemText}>{item.title}</Text>}
        inputHeight={50}
        showChevron={false}
        closeOnBlur={false}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },
  containerStyle: {
    flexGrow: 1,
    flexShrink: 1,
  },
  suggestionsListContainerStyle: {
    backgroundColor: "#383b42",
  },
  itemText: {
    color: "#fff",
    padding: 15,
  },
  inputContainerStyle: {
    backgroundColor: "#383b42",
    borderRadius: 25,
  },
  textInput: {
    borderRadius: 25,
    backgroundColor: "#383b42",
    color: "#fff",
    paddingLeft: 18,
  },
});
