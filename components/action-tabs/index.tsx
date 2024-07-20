import { StyleSheet, View, PanResponder, Animated } from "react-native";
import Code from "./code";
import Action from "./action";
import React, { useState } from "react";
import { CODE_BLOCKS } from "@/config";
import { IBlock } from "@/types";

const ActionTab = ({ codeBlocks }: { codeBlocks: typeof CODE_BLOCKS }) => {
  return (
    <View style={styleSheet.actionContainer}>
      <Code codeBlocks={codeBlocks} />
      <Action />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    height: "100%",
  },
});

export default ActionTab;
