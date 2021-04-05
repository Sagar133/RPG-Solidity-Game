import Phaser from 'phaser';

export const createflaskAnims = (anims) => {
    // anims.create({
    //     key: 'key-idle',
    //     frames: [{ key: 'key', frame: 'keys_anim_f0.png' }]
    // })

    anims.create({
        key: 'flask-open',
        frames: anims.generateFrameNames('flask', { start: 0, end: 1, prefix: 'flasks_anims_f', suffix: '.png' }),
        repeat: -1,
        frameRate: 8
    })
}