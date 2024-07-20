import { Tabs, Stack } from "expo-router";
import React, { useEffect, useReducer } from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text } from "react-native";
import {
  SpriteContext,
  initialState,
  spritReducer,
} from "@/SpriteTransformer/context";
import { Action, ISpirteState } from "@/types";
import { SpriteTransFormer } from "@/SpriteTransformer";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [state, dispatch] = useReducer<
    (state: ISpirteState, action: Action) => ISpirteState,
    ISpirteState
  >(
    spritReducer,
    {
      ...initialState,
      // sprites: [new (SpriteTransFormer as any)("sprite-boy", 0, 0, 0)],
      activeSprite: 0,
    },
    (state) => {
      return {
        ...initialState,
        activeSprite: 0,
      };
    }
  );

  return (
    <SpriteContext.Provider value={{ state, dispatch }}>
      <Stack initialRouteName="index">
        <Stack.Screen
          options={{
            headerTitle: (props) => <Text>AlgoMotion</Text>,
          }}
          name="index"
        />
        <Stack.Screen
          options={{
            headerTitle: (props) => <Text>AlgoMotion</Text>,
          }}
          name="actions"
        />
      </Stack>
    </SpriteContext.Provider>
  );
}
