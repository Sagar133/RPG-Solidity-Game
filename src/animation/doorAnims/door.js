import Phaser from 'phaser';

export const createdoorAnims = (anims) => {
    anims.create({
        key: 'door-open',
        frames: anims.generateFrameNames('door', { start: 0, end: 13, prefix: 'door_anim_opening_f', suffix: '.png' }),
        repeat: 0,
        frameRate: 8
    })

    anims.create({
        key: 'door-closed',
        frames: [{ key: 'door', frame: 'door_closed.png' }]
    })

    anims.create({
        key: 'door-full-open',
        frames: [{ key: 'door', frame: 'door_fullyopen.png' }]
    })


//     anims.create({
//         key: 'coins',
//         frames: anims.generateFrameNames('coin', { start: 0, end: 3, prefix: 'coin_anim_f', suffix: '.png' }),
//         repeat: -1,
//         frameRate: 5
//     })

//     anims.create({
//         key: 'chest-closed',
//         frames: [{ key: 'treasure', frame: 'chest_mimic_open_anim_f0.png' }]
//     })
    }

// // module.exports = createLizardAnims
