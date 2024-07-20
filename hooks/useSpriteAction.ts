import { MAX_LIMIT } from "@/config";
import { IBlock, ISPriteTransformer } from "@/types";

const useSpriteAction = () => {
  const actionConfig: { [key: string]: string } = {
    MOVE_X: "moveX",
    MOVE_Y: "moveY",
    TURN_DEG: "rotate",
    MOVE_X_Y: "move",
    RESET_MOVE_X_Y: "reset",
    SPEAK_TEXT: "setText",
  };

  const performAction = (
    { sprite, action }: { sprite: ISPriteTransformer; action: IBlock },
    method: any,
    args: IBlock["metaData"]
  ) => {
    if (args.X > 0 && args.X + sprite.x > MAX_LIMIT.X) {
      args.X = 0;
    } else if (args.Y > 0 && args.Y + sprite.y > MAX_LIMIT.Y) {
      args.Y = 0;
    }

    const newArgs = Object.keys(args).map(
      (key) => args[key as keyof IBlock["metaData"]]
    );
    if (action.id == "RANDOM_MOVE_X_Y") {
      const randomX = Math.floor(Math.random() * (MAX_LIMIT.X - 0) + 0);
      const randomY = Math.floor(Math.random() * (MAX_LIMIT.Y - 0) + 0);
      sprite.move(randomX, randomY);
      return;
    }
    if (action.metaData.timeout) {
      method(...newArgs);
    } else {
      method(...newArgs);
    }
  };

  const performAsyncAction = (
    sprite: ISPriteTransformer,
    method: any,
    args: IBlock["metaData"],
    callBack: Function
  ) => {
    let timer: null | NodeJS.Timeout = null;
    method(args.TEXT);
    return new Promise((resolve, reject) => {
      if (args.timeout) {
        timer = setTimeout(() => {
          console.log("Timeout", args);
          sprite.clearDependency();
          resolve(1);
          callBack();
        }, args.timeout);
      }
    });
  };

  return [{ actionConfig }, { performAction, performAsyncAction }] as const;
};

export default useSpriteAction;
