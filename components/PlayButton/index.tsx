import * as React from "react";
import { Animated, Pressable } from "react-native";
import Svg, { Path } from "react-native-svg";

function PlayButton({ playAction }: { playAction: () => void }) {
  return (
    <Pressable
      onPress={playAction}
      style={{ position: "absolute", right: 24, top: "58%" }}
    >
      <Animated.View>
        <Svg
          fill="#000"
          width="50px"
          height="50px"
          viewBox="0 0 408.221 408.221"
        >
          <Path d="M204.11 0C91.388 0 0 91.388 0 204.111c0 112.725 91.388 204.11 204.11 204.11 112.729 0 204.11-91.385 204.11-204.11C408.221 91.388 316.839 0 204.11 0zm82.437 229.971l-126.368 72.471c-17.003 9.75-30.781 1.763-30.781-17.834V140.012c0-19.602 13.777-27.575 30.781-17.827l126.368 72.466c17.004 9.752 17.004 25.566 0 35.32z" />
        </Svg>
      </Animated.View>
    </Pressable>
  );
}

export default PlayButton;
