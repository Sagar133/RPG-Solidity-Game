import Phaser from 'phaser';

export const createReaperAnims = (anims) => {
    anims.create({
        key: 'reaper-run',
        frames: anims.generateFrameNames('reaper', { start: 0, end: 7, prefix: 'reaper_walk_anims_f', suffix: '.png' }),
        repeat: -1,
        frameRate: 6
    })

    // anims.create({
    //     key: 'Knight-run',
    //     frames: anims.generateFrameNames('Knight', { start: 0, end: 3, prefix: 'knight_f_run_anim_f', suffix: '.png' }),
    //     repeat: -1,
    //     frameRate: 9
    // })
}

// module.exports = createLizardAnims