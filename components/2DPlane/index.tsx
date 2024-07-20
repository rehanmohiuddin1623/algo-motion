import { useTheme } from "@react-navigation/native";
import { ThemedView } from "../ThemedView";
import { Image, StyleSheet, Platform, ScrollView } from "react-native";

const Plane = ({ children }: { children: JSX.Element[] }) => {
  return <ThemedView style={styles.planeContainer}>{children}</ThemedView>;
};

const styles = StyleSheet.create({
  planeContainer: {
    position: "relative",
    backgroundColor: "#fff",
    borderColor: "#bcbcbc",
    minWidth: "90%",
    top: 0,
    margin: 12,
    zIndex: -1,
    height: "70%",
    // padding: 12,
    overflow: "scroll",
  },
});

export default Plane;
