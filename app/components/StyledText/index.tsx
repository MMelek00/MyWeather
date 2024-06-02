import Colors from "@/constants/Colors";
import { Text, TextProps } from "react-native";

export function MonoText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[props.style, { fontFamily: "PoppinsBold", color: Colors.text }]}
    />
  );
}
