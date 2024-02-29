import { StyleSheet } from "react-native";
import { COLORS } from "./constants";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark,
    padding: 12,
  },
  text: {
    fontSize: 23,
    color: COLORS.light,
  },
  heading: {
    fontSize: 32,
    color: COLORS.primary,
  },
  greenbox: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    borderRadius: 10,
  },
});
