import { CODE_BLOCKS } from "@/config";

export interface IBlock {
  label: string;
  id: string;
  action: string;
  metaData: {
    X: number;
    Y: number;
    angle: number;
    timeout: number | null;
    TEXT: string;
  };
}

export interface ISprite {
  id: string;
  x: number;
  y: number;
  angle: number;
  message: string | null;
}

export interface ISPriteTransformer extends ISprite {
  moveX(x: number): this;
  moveY(y: number): this;
  move(x: number, y: number): this;
  rotate(angle: number): this;
  reset(): this;
  setText(text: string): this;
  clearDependency(): this;
}

export interface ISpirteState {
  sprites: ISPriteTransformer[];
  actions: IBlock[];
  activeSprite: number;
  play: boolean;
  codeBlocks: (typeof CODE_BLOCKS)[0][];
}

export interface IUpdateSpriteActionPayload {
  id: string;
  x: number;
  y: number;
  ind: number;
  angle: number;
}

export type Action =
  | {
      type: "ADD_SPRITE";
      payload: ISPriteTransformer;
    }
  | {
      type: "UPDATE_ACTIONS";
      payload: IBlock;
    }
  | {
      type: "SET_ACTIVE_SPRITE";
      payload: number;
    }
  | {
      type: "TOGGLE_PLAY";
      payload: boolean;
    }
  | {
      type: "UPDATE_SPRITE_POSITION";
      payload: IUpdateSpriteActionPayload;
    }
  | {
      type: "UPDATE_SPRITE_CURRENT_POSITION";
      payload: Pick<IUpdateSpriteActionPayload, "y" | "x" | "angle">;
    }
  | {
      type: "RESET_SPRITES";
      payload: null;
    }
  | {
      type: "DELETE_ACTION";
      payload: string;
    };

/*
ADD_SPRITE
UPDATE_ACTIONS
SET_ACTIVE_SPRITE
TOGGLE_PLAY
*/
