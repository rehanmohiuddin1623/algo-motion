import { Pressable, StyleSheet, Text, View } from "react-native";
import BoySvg from "../Sprite/BoySvg";
import SpriteVitals from "./SpriteVitals";
import { Link } from "expo-router";
import { ISPriteTransformer } from "@/types";
const SpriteList = ({ sprites = [] }: { sprites: ISPriteTransformer[] }) => {
  return (
    <View style={styleSheet.container}>
      <SpriteVitals />
      <View style={styleSheet.spriteListContainer}>
        {sprites.map((sp, ind) => (
          <Link key={ind} href={"/actions"} asChild>
            <Pressable key={ind}>
              <View style={styleSheet.spriteItem}>
                <BoySvg width={50} height={50} />
              </View>
            </Pressable>
          </Link>
        ))}
        <View style={styleSheet.spriteItem}>
          <Text style={{ color: "#000" }}>+</Text>
        </View>
      </View>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  spriteItem: {
    backgroundColor: "#fff",
    borderColor: "#f1f1f1",
    borderWidth: 1,
    width: 70,
    alignItems: "center",
    padding: 12,
    height: 70,
    textAlign: "center",
  },
  spriteListContainer: {
    backgroundColor: "#fff",
    width: "100%",
    minHeight: "100%",
    padding: 12,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});

export default SpriteList;
