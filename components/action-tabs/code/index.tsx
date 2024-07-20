import { View, Text, Animated } from "react-native";
import { styleSheet } from "../styles";
import Block from "../Block";
import { IBlock } from "@/types";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Code = ({ codeBlocks = [] }: { codeBlocks: IBlock[] }) => {
  return (
    <View style={styleSheet.actionContainer}>
      <View style={styleSheet.headerContainer}>
        <Text style={styleSheet.headerText}>CODE</Text>
      </View>
      <GestureHandlerRootView style={styleSheet.tabBody}>
        {codeBlocks.map((block, ind) => (
          <View key={ind}>
            <Block block={block} />
          </View>
        ))}
      </GestureHandlerRootView>
    </View>
  );
};

export default Code;
