import { StyleSheet } from "react-native";
import Plane from "@/components/2DPlane";
import Sprite from "@/components/Sprite";
import SpriteList from "@/components/sprite-list";
import { ScrollView } from "react-native";
import React from "react";
import { ISPriteTransformer, ISpirteState } from "@/types";
import { useSpriteContext } from "@/SpriteTransformer/context";
import PlayButton from "../../components/PlayButton";
import { useSpriteAction } from "../../hooks";


export default function HomeScreen() {
  const [{ actionConfig }, { performAction, performAsyncAction }] =
    useSpriteAction();

  const { state, dispatch } = useSpriteContext();

  const { sprites } = state as ISpirteState;

  const dispatchSprites = () => {
    dispatch({
      type: "UPDATE_SPRITE_POSITION",
      payload: sprites,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.titleContainer}>
      <Plane>
        {sprites.map((sprite, ind) => (
          <Sprite
            index={ind}
            position={{ x: sprite.x, y: sprite.y }}
            angle={sprite.angle}
            message={sprite.message}
          />
        ))}
      </Plane>
      <SpriteList sprites={sprites} />
      <PlayButton
        playAction={async () => {
          console.log("action !!", state.actions);
          let timer: null | NodeJS.Timeout = null;
          for (const action of state.actions) {
            for (const sprite of sprites) {
              if (action.metaData.timeout) {
                performAsyncAction(
                  sprite,
                  sprite[
                    actionConfig[
                      action.action as keyof typeof actionConfig
                    ] as keyof ISPriteTransformer
                  ],
                  action.metaData,
                  dispatchSprites
                ) as Promise<void>;
                dispatchSprites();
                console.log("end", timer);
              } else {
                performAction(
                  { sprite, action },
                  sprite[
                    actionConfig[
                      action.action as keyof typeof actionConfig
                    ] as keyof ISPriteTransformer
                  ],
                  action.metaData
                );
              }
              console.log("action !!", sprite.message);
            }
          }
          // state.actions.forEach((action) => {
          //   sprites.forEach((sprite) => {});
          // });
          dispatch({
            type: "UPDATE_SPRITE_POSITION",
            payload: sprites,
          });
        }}
      />
    </ScrollView>
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
