import React from "react";
import {config} from "../game";
import Phaser from "phaser";

export const Game = () => {
  const ref = React.useRef();
  const createGame = () => {
    new Phaser.Game({
        ...config,
        root: ref.current,
    });
  };
  React.useEffect(() => {
      createGame()
  }, [])
  return<div><div ref={ref} /></div>;
};
