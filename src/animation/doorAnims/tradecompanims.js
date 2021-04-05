import Phaser from 'phaser';

export const createtradecompAnims = (anims) => {
    anims.create({
        key: 'tradecomp-idle',
        frames: anims.generateFrameNames('tradecomp', { start: 0, end: 1, prefix: 'tradecomp_anim_f', suffix: '.png' }),
        repeat: -1,
        frameRate: 6
    })

    // anims.create({
    //     key: 'spikes-idle',
    //     frames: [{ key: 'spikes', frame: 'spikes_anim_f0.png' }]
    // })
}