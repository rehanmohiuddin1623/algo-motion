import { Image, StyleSheet, View } from "react-native";
import ActionTab from "@/components/action-tabs";
import { useSpriteContext } from "@/SpriteTransformer/context";

export default function ActionScreen() {
  const { state } = useSpriteContext();
  return (
    <View style={styles.titleContainer}>
      <ActionTab codeBlocks={state.codeBlocks} />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    height: "100%",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
