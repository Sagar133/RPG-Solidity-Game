import Phaser from "phaser";

export const createLizardAnims = (anims) => {
  anims.create({
    key: "lizard-idle",
    frames: anims.generateFrameNames("lizard", {
      start: 0,
      end: 3,
      prefix: "lizard_m_idle_anim_f",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });

  anims.create({
    key: "lizard-run",
    frames: anims.generateFrameNames("lizard", {
      start: 0,
      end: 3,
      prefix: "lizard_m_run_anim_f",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 10,
  });
};

// module.exports = createLizardAnims
