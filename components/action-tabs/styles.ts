import { StyleSheet } from "react-native";

export const styleSheet = StyleSheet.create({
  actionContainer: {
    display: "flex",
    flexDirection: "column",
    width: "45%",
    borderColor: "#f1f1f1",
    height: "90%",
    borderWidth: 2,
    margin: 10,

    textAlign: "center",
  },
  headerText: {
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    padding: 8,
  },
  headerContainer: {
    borderBottomColor: "#f1f1f1",
    borderBottomWidth: 1,
  },
  tabBody: {
    padding: 8,
  },
  block: {
    borderColor: "#f1f1f1",
    borderWidth: 1,
    padding: 8,
    textAlign: "center",
    backgroundColor: "#37B7C3",
    color: "#FFFFFF",
  },
  blockText: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
  },
});
