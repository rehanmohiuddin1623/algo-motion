import { Image, View } from "react-native";
import React from "react";
import DialogBubble from "@/components/dialog-bubble";
import SpriteMain from "../../assets/player.png";

interface ISprite {
  position: {
    x: number;
    y: number;
  };
  angle?: number;
  message: string | null;
}

const Sprite = ({
  position,
  angle = 0,
  message,
  index,
}: ISprite & {
  angle?: number;
  index: number;
}) => {
  const { x = 0, y = 0 } = position || {};

  return (
    <View
      key={index}
      style={{
        position: "relative",
        backgroundColor: "#fff",
        width: "100%",
        transform: [
          { translateX: x },
          { translateY: y },
          { rotate: `${angle}deg` },
        ],
      }}
    >
      <Image
        width={10}
        height={10}
        style={{
          height: 100,
          width: 100,
          backgroundColor: "#fff",
          zIndex: 100,
        }}
        source={SpriteMain}
      />
      {message && <DialogBubble message={message} />}
    </View>
  );
};

export default Sprite;
