import { IBlock, ISpirteState } from "@/types";
import {
  Text,
  View,
  PanResponder,
  Animated,
  PanResponderInstance,
} from "react-native";
import { styleSheet } from "./styles";
import React, { Reducer, useEffect, useReducer, useState } from "react";
import { spritReducer, useSpriteContext } from "@/SpriteTransformer/context";

// import Animated from "react-native-reanimated";

const Block = ({ block }: { block: IBlock }) => {
  const [showItem, setShowItem] = useState(false);
  const BlockView = Animated.View;

  const pan = React.useRef(new Animated.ValueXY()).current;

  const { state, dispatch } = useSpriteContext();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderStart: () => {
      setShowItem(true);
    },
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (e, gestureState) => {
      const left = gestureState.dx;
      if (Math.floor(left) > 150) {
        dispatch({ type: "UPDATE_ACTIONS", payload: block });
      }
      setShowItem(false);
    },
  });
  const { label } = block || {};
  return (
    <>
      {showItem ? (
        <Animated.View
          style={[
            {
              transform: pan.getTranslateTransform(),
              opacity: 0.8,
            },
          ]}
          {...panResponder.panHandlers}
        >
          <View style={styleSheet.block}>
            <Text style={styleSheet.blockText}>{label}</Text>
          </View>
        </Animated.View>
      ) : (
        <BlockView {...panResponder.panHandlers}>
          <View style={styleSheet.block}>
            <Text style={styleSheet.blockText}>{label}</Text>
          </View>
        </BlockView>
      )}
    </>
  );
};

export default Block;
