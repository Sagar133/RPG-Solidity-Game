import Phaser from "phaser";

export const createwizardAnims = (anims) => {
  anims.create({
    key: "wizard-idle",
    frames: anims.generateFrameNames("wizard", {
      start: 0,
      end: 3,
      prefix: "wizzard_f_idle_anim_f",
      suffix: ".png",
    }),
    repeat: -1,
    frameRate: 6,
  });

  // anims.create({
  //     key: 'demon-run',
  //     frames: anims.generateFrameNames('demon', { start: 0, end: 3, prefix: 'big_demon_run_anim_f', suffix: '.png' }),
  //     repeat: -1,
  //     frameRate: 6
  // })
};

// module.exports = createLizardAnims
