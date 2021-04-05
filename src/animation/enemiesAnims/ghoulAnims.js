import Phaser from 'phaser';

export const createGhoulAnims = (anims) => {
    anims.create({
        key: 'ghoul-run',
        frames: anims.generateFrameNames('ghoul', { start: 0, end: 7, prefix: 'burning-ghoul_anims_f', suffix: '.png' }),
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