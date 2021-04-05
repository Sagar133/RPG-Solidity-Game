import Phaser from 'phaser';

export const createGhostAnims = (anims) => {
    anims.create({
        key: 'ghost-run',
        frames: anims.generateFrameNames('ghost', { start: 0, end: 7, prefix: 'ghost_walk_anims_f', suffix: '.png' }),
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