import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Index = ({ message }: { message: string }) => {
  const bubbleStyle = styles.selfBubble;

  return (
    <View style={[styles.container, bubbleStyle]}>
      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "80%", // Adjust as needed
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    position: "absolute",
    left: 80,
    top: 0,
    zIndex: 100,
  },
  selfBubble: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
  },
  otherBubble: {
    alignSelf: "flex-start",
    backgroundColor: "#E0E0E0",
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
    marginTop: 5,
    textAlign: "right",
  },
});

export default Index;
