import { getRandomPosition } from "../SpriteTransformer/util";

export const CODE_BLOCKS = [
  {
    label: "Move X By 50",
    id: "MOVE_X",
    action: "MOVE_X",
    metaData: { X: 50 },
  },
  {
    label: "Move Y By 50",
    id: "MOVE_Y",
    action: "MOVE_Y",
    metaData: { Y: 50 },
  },
  {
    label: "Rotate 360",
    id: "TURN_DEG",
    action: "TURN_DEG",
    metaData: { angle: 60 },
  },
  {
    label: "Go To (0,0)",
    id: "MOVE_X_Y",
    action: "RESET_MOVE_X_Y",
    metaData: { x: 0, y: 0 },
  },
  {
    label: "Go To (50,50)",
    id: "MOVE_X_Y",
    action: "MOVE_X_Y",
    metaData: { x: 50, y: 50 },
  },
  {
    label: "Say Hello For 1 Sec",
    id: "SPEAK",
    action: "SPEAK_TEXT",
    metaData: { TEXT: "Hi", timeout: 1000 },
  },
];

export const MAX_LIMIT = {
  X: 250,
  Y: 350,
};
