import { Action, ISpirteState } from "@/types";
import React, { createContext, useContext } from "react";
import { SpriteTransFormer } from "..";
import { CODE_BLOCKS } from "@/config";

export const initialState: ISpirteState = {
  sprites: [new (SpriteTransFormer as any)("sprite-boy", 0, 0, 0)],
  actions: [],
  activeSprite: 0,
  play: false,
  codeBlocks: [
    ...CODE_BLOCKS,
    {
      label: "Go To Random Position",
      id: "RANDOM_MOVE_X_Y",
      action: "MOVE_X_Y",
      metaData: {},
    },
  ],
};

export const SpriteContext = createContext<{
  state: ISpirteState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => {} });

export const spritReducer = (
  state: ISpirteState,
  action: Action
): ISpirteState => {
  const { type, payload } = action;
  switch (action.type) {
    case "ADD_SPRITE":
      return { ...state, sprites: [...state.sprites, action.payload] };
    case "UPDATE_ACTIONS":
      return { ...state, actions: [...state.actions, action.payload] };
    case "SET_ACTIVE_SPRITE":
      return { ...state, activeSprite: action.payload };
    case "TOGGLE_PLAY":
      return { ...state, play: !state.play };
    case "UPDATE_SPRITE_POSITION": {
      const spritePayload = payload as any;
      return { ...state, sprites: [...spritePayload] };
    }
    case "DELETE_ACTION": {
      const actionId = payload as string;
      return {
        ...state,
        actions: state.actions.filter((action) => action.id !== actionId),
      };
    }
    case "RESET_SPRITES":
      return initialState;

    default:
      return state;
  }
};

export const useSpriteContext = () => {
  const context = useContext(SpriteContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
