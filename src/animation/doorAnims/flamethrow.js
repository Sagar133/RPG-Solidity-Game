import Phaser from 'phaser';

export const createflamethrowAnims = (anims) => {
    anims.create({
        key: 'flamethrow-front',
        frames: anims.generateFrameNames('flamethrow', { start: 0, end: 3, prefix: 'flamethrow_anim_f', suffix: '.png' }),
        repeat: -1,
        frameRate: 4
    })

    // anims.create({
    //     key: 'flamethrow-side',
    //     frames: anims.generateFrameNames('flamethrow', { start: 0, end: 2, prefix: 'flamethrow_anim_side_f', suffix: '.png' }),
    //     repeat: -1,
    //     frameRate: 8
    // })
}