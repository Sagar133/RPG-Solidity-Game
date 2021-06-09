import Phaser from 'phaser';
import dungeon from './assests/dungenTileset.png';
import Nature from './assests/Nature.png';
import NatureSnow from './assests/NatureSnow.png';
import logoImg from '../assets/dungenTileset.png';
import levelMapJSON from './assests/dungeon-02.json';
import heroJson from '../assets/hero.json';
import heroPng from '../assets/hero.png'
import lizardPng from '../assets/lizard.png'
import lizardJson from '../assets/lizard.json'
import weapon from '../assets/weapon_knife.png'
import chestPng from '../assets/chest.png'
import chestJson from '../assets/chest.json'
import coinPng from '../assets/coins.png'
import coinJson from '../assets/coins.json'
import doorPng from '../assets/door.png'
import doorJson from '../assets/door.json'
import spikesPng from '../assets/spikes.png'
import spikesJson from '../assets/spikes.json'
import plantZombieJson from '../assets/plantZombie.json'
import plantZombiePng from '../assets/plantZombie.png'
import demonJson from '../assets/demon.json';
import demonPng from '../assets/demon.png'
import knightJson from '../assets/enemyKnight.json'
import knightPng from '../assets/enemyKnight.png'
import newKnightJson from '../assets/newKnight.json'
import newKnightPng from '../assets/newKnight.png'
import wizardJson from '../assets/wizard.json'
import wizardPng from '../assets/wizard.png'
import ghostJson from '../assets/ghost.json'
import ghostPng from '../assets/ghost.png'
import reaperJson from '../assets/reaper.json'
import reaperPng from '../assets/reaper.png'
import rockJson from '../assets/rock.json'
import rockPng from '../assets/rock.png'
import ghoulJson from '../assets/ghoul.json'
import ghoulPng from '../assets/ghoul.png'
import angelJson from '../assets/angel.json'
import angelPng from '../assets/angel.png'



//import animations
import { createLizardAnims } from '../animation/enemiesAnims/lizardAnims'
import { createCharacterAnims } from '../animation/characterAnims/characterAnims'
import { createdZombieAnims } from '../animation/enemiesAnims/plantZombie'
import { createdemonAnims } from '../animation/enemiesAnims/demonAnims'
import { createKnightAnims } from '../animation/enemiesAnims/KnightAnims'
import { createnewKnightAnims } from '../animation/enemiesAnims/newKnightAnims'
import { createChestAnims } from '../animation/treaserAnims/chest'
import { createdoorAnims } from '../animation/doorAnims/door'
import { createspikesAnims } from '../animation/doorAnims/spikes'
import { createwallAnims } from '../animation/doorAnims/wall'
import { createflamethrowAnims } from '../animation/doorAnims/flamethrow'
import { createwizardAnims } from '../animation/characterAnims/wizardAnims'
import { createkeyAnims } from '../animation/doorAnims/keyAnims'
import { createGhostAnims } from '../animation/enemiesAnims/ghostAnims'
import { createReaperAnims } from '../animation/enemiesAnims/reaperAnims'
import { createRockAnims } from '../animation/enemiesAnims/rockAnims'
import { createdoorwoodAnims } from '../animation/doorAnims/doorwoodAnims'
import { createGhoulAnims } from '../animation/enemiesAnims/ghoulAnims'
import { createAngelAnims } from '../animation/enemiesAnims/angelAnims'
import { createflaskAnims } from '../animation/doorAnims/flaskAnims'
import { createtradecompAnims } from '../animation/doorAnims/tradecompanims'
import { createtorchburnAnims } from '../animation/doorAnims/torchburnAnims'
import { createWalltorchAnims } from '../animation/doorAnims/walltorchAnims'


//import event
import sceneEvents from '../events/eventsCenter'
import Treasure from '../treasure/treasure'
import Heart from '../heart'
import Coin from '../coins'



//import enmies
import Lizard from '../enemies/lizard';
import plantZombies from '../enemies/plantZombie'
import demonq from '../enemies/demon';
import Knightz from '../enemies/Knight'
import newKnightz from '../enemies/newKnight'
import doorz from '../treasure/doorr'
import Spike from '../treasure/spikess'
import Wall from '../treasure/walls'
import flamethrowz from '../treasure/flamethrows'
import Wizard from '../hero/wizard'
import Key from '../treasure/key';
import Chainlink from '../enemies/chainlink'
import Ghost from '../enemies/ghost'
import Reaper from '../enemies/reaper'
import Rock from '../enemies/rock'
import DoorWood from '../treasure/doorwood'
import Ghoul from '../enemies/ghoul'
import Angel from '../enemies/angel'
import Flask from '../treasure/flask'
import Tradecomp from '../treasure/tradecomp'
import Torchburn from '../treasure/torchburn'
import Walltorch from '../treasure/walltorch'


//import Sounds
import dungeonsound from '../assets/dungeon_theme_2.mp3'
import femalefaint from '../assets/female-faint.mp3'
import dooropen from '../assets/jail_cell_door.mp3'
import knifesound from '../assets/knifesound.mp3'
import coinsound from '../assets/coins-in-hand.mp3'
import femalehurt from '../assets/female-hurt.mp3'
import demonScream from '../assets/demon-screech.mp3'
import rockdie from '../assets/ConsumeSoul.mp3'
import youdied from '../assets/YouDied.mp3'
import spiketrap from '../assets/spike_trap.mp3'
import ghoulsound from '../assets/ghoul_sound.mp3'
import ghostsound from '../assets/ghost_sound.mp3'

var cursors
var faune, lizard
var hit = 0
var _health = 3
var healthStateDead = 'healthStateDead'
var idleHealthState = 'idleHealthState'
var damageHealthState = 'damageHealthState'
var healthState = idleHealthState
var damageTime = 0
var knives
var knife
var chest
var coin = 0
var wall_health = 4
var keyCount = 0
var chainlink
var keys
var chainlink_count = 0
var ghost_health = 4
var angel_health = 5
var tradecomp

let speed = 150





export default class LevelTwo extends Phaser.Scene{
    constructor(){
        super()
    }

    preload(){
        this.load.image('tiles', logoImg)
        this.load.image('dungeon', dungeon)
        this.load.image('nature', Nature)
        this.load.image('naturesnow', NatureSnow)
        this.load.tilemapTiledJSON('dungeon', levelMapJSON)
        


        //Adding Characters into the Game
        this.load.atlas('faune', heroPng, heroJson)
        this.load.atlas('lizard', lizardPng, lizardJson)
        this.load.atlas('plantZombie', plantZombiePng, plantZombieJson)
        this.load.atlas('demon', demonPng, demonJson)
        this.load.atlas('Knight', knightPng, knightJson)
        this.load.atlas('newKnight', newKnightPng, newKnightJson)
        this.load.atlas('wizard', wizardPng, wizardJson)
        this.load.atlas('ghost', ghostPng, ghostJson)
        this.load.atlas('reaper', reaperPng, reaperJson)
        this.load.atlas('rock', rockPng, rockJson)
        this.load.atlas('ghoul', ghoulPng, ghoulJson)
        this.load.atlas('angel', angelPng, angelJson)



        //Adding Weapons
        this.load.image('knife', weapon)

        //Adding extras
        this.load.atlas('treasure', chestPng, chestJson)
        this.load.atlas('coin', coinPng, coinJson)
        this.load.atlas('door', doorPng, doorJson)
        this.load.atlas('spikes', spikesPng, spikesJson)

        //Adding Audio
        this.load.audio('dungeonsound', dungeonsound)
        this.load.audio('femalefaint', femalefaint)
        this.load.audio('dooropen', dooropen)
        this.load.audio('knifesound', knifesound)
        this.load.audio('coinsound', coinsound)
        this.load.audio('femalehurt', femalehurt)
        this.load.audio('demonscreech', demonScream)
        this.load.audio('rockdie', rockdie)
        this.load.audio('youdied', youdied)
        this.load.audio('spiketrap', spiketrap)
        this.load.audio('ghoulsound', ghoulsound)
        this.load.audio('ghostsound', ghostsound)


        

        cursors = this.input.keyboard.createCursorKeys()

    }

    setKnives(Knives) {
        knife = Knives
    }

    create(){

        //For the Hearts and Coins UI
        this.scene.run('game-ui')
        // this.scene.run('coins')

        //Initializing Character animations
        createCharacterAnims(this.anims)
        createLizardAnims(this.anims)
        createdZombieAnims(this.anims)
        createdemonAnims(this.anims)
        createKnightAnims(this.anims)
        createChestAnims(this.anims)
        createnewKnightAnims(this.anims)
        createdoorAnims(this.anims)
        createspikesAnims(this.anims)
        createwallAnims(this.anims)
        createflamethrowAnims(this.anims)
        createwizardAnims(this.anims)
        createkeyAnims(this.anims)
        createGhostAnims(this.anims)
        createReaperAnims(this.anims)
        createRockAnims(this.anims)
        createdoorwoodAnims(this.anims)
        createGhoulAnims(this.anims)
        createAngelAnims(this.anims)
        createflaskAnims(this.anims)
        createtradecompAnims(this.anims)
        createtorchburnAnims(this.anims)
        createWalltorchAnims(this.anims)


        const map = this.make.tilemap({key: 'dungeon'})
        const tileNature = map.addTilesetImage('Nature', 'nature')
        const tileNatureSnow = map.addTilesetImage('NatureSnow', 'naturesnow')
        const tilesDungeon = map.addTilesetImage('Dungeon', 'dungeon')


        const floorLayer = map.createLayer('Floor', [tileNature,tileNatureSnow,tilesDungeon])
        const wallsLayer = map.createLayer('Walls', [tileNature,tileNatureSnow,tilesDungeon])
        const forestLayer = map.createLayer('Forest', [tileNature,tileNatureSnow,tilesDungeon])
        const stuffLayer = map.createLayer('SurrondingStuffs', [tileNature,tileNatureSnow,tilesDungeon])

        floorLayer.setCollisionByProperty({collide:true})
        wallsLayer.setCollisionByProperty({collide:true})
        forestLayer.setCollisionByProperty({collide:true})
        stuffLayer.setCollisionByProperty({collide: true})

        faune = this.physics.add.sprite(750, 1500, 'faune', 'walk-down-3.png')
        faune.body.setSize(faune.width * 0.5, faune.height * 0.8)

        this.physics.world.setBounds(0, 0, 2000, 2000)
        this.cameras.main.setBounds(0, 0, 2000, 2000)
        this.cameras.main.startFollow(faune, true, 0.5, 0.5);

        knives = this.physics.add.group({
            classType: Phaser.Physics.Arcade.Image
        })

        const spikess = this.physics.add.group({
            classType: Spike,
            createCallback: (go) => {

                /* @type {demon} */
                const spikeh = go;
                spikeh.body.onCollide = true;
            }
        })
        spikess.get(1433,1047)
        spikess.get(1447,1047)
        spikess.get(1463,1157)
        spikess.get(1477,1157)
        spikess.get(1433,1230)
        spikess.get(1447,1230)
        spikess.get(200, 940)


        
        const lizards = this.physics.add.group({
            classType: Lizard,
            createCallback: (go) => {

                /* @type {Lizard} */
                const LizGo = go;
                LizGo.body.onCollide = true;
            }
        })
        lizards.get(256, 256)
        lizards.get(150, 1400)
        lizards.get(200, 1000)
        lizards.get(1250,1050)


        const plantZombie = this.physics.add.group({
            classType: plantZombies,
            createCallback: (go) => {

                /* @type {plantZombie} */
                const zombiego = go;
                zombiego.body.onCollide = true;
            }
        })
        plantZombie.get(130,1400)
        plantZombie.get(1250,1200)
        plantZombie.get(250, 1000)
        plantZombie.get(300, 300)



        const demon = this.physics.add.group({
            classType: demonq,
            createCallback: (go) => {

                /* @type {demon} */
                const demn = go;
                demn.body.onCollide = true;
            }
        })

        demon.get(150,1200)
        demon.get(1550,1150)
        demon.get(300,800)

        const newKnights = this.physics.add.group({
            classType: newKnightz,
            createCallback: (go) => {

                /* @type {Lizard} */
                const knighh = go;
                knighh.body.onCollide = true;
            }
        })
        newKnights.get(1550,1100)
        newKnights.get(240, 800)
        newKnights.get(150, 1000)
        newKnights.get(350, 350)



        const angell = this.physics.add.group({
            classType: Angel,
            createCallback: (go) => {

                /* @type {demon} */
                const angn = go;
                angn.body.onCollide = true;
            }
        })
        angell.get(300,1000)


        const ghostt = this.physics.add.group({
            classType: Ghost,
            createCallback: (go) => {

                /* @type {demon} */
                const ghmn = go;
                ghmn.body.onCollide = true;
            }
        })
        ghostt.get(256, 800)
        ghostt.get(400, 200)


        const ghoult = this.physics.add.group({
            classType: Ghoul,
            createCallback: (go) => {

                /* @type {demon} */
                const ghoun = go;
                ghoun.body.onCollide = true;
            }
        })
        ghoult.get(1350,1050)
        ghoult.get(286, 800)

        const rockk = this.physics.add.group({
            classType: Rock,
            createCallback: (go) => {

                /* @type {demon} */
                const rockmn = go;
                rockmn.body.onCollide = true;
            }
        })
        rockk.get(1450,1050)
        rockk.get(500, 200)


        const reaperr = this.physics.add.group({
            classType: Reaper,
            createCallback: (go) => {

                /* @type {demon} */
                const rhmn = go;
                rhmn.body.onCollide = true;
            }
        })
        reaperr.get(1550, 1050)
        reaperr.get(150,800)


        const Knight = this.physics.add.group({
            classType: Knightz,
            createCallback: (go) => {

                /* @type {Knitghtz} */
                const knigh = go;
                knigh.body.onCollide = true;
            }
        })
        Knight.get(1250,1300)
        Knight.get(206, 800)






        const chests = this.physics.add.group({
            classType: Treasure,
            createCallback: (go) => {

                /* @type {demon} */
                const chest = go;
                chest.body.onCollide = true;
            }
        })
        chests.get(150, 1570, 'treasure').setImmovable();
        chests.get(1550,1000,'treasure').setImmovable()
        chests.get(1250,1000,'treasure').setImmovable()
        chests.get(300,1000,'treasure').setImmovable()
        chests.get(256, 800,'treasure').setImmovable()
        sceneEvents.emit('player-coin-mint', coin)





        //Colliding
        this.physics.add.collider(chests, [lizards,plantZombie,Knight,demon,reaperr,rockk,ghoult,ghostt,angell,newKnights])

        //Colliding Stuff
        this.physics.add.collider(faune, chests, this.handlePlayerTreasureCollide, undefined, this)
        this.physics.add.collider([faune,lizards,plantZombie,Knight,demon,reaperr,rockk,ghoult,ghostt,angell,newKnights], [wallsLayer,forestLayer,stuffLayer,floorLayer])
        this.physics.add.collider(knives, [wallsLayer,forestLayer,stuffLayer,floorLayer])
        this.physics.add.collider(spikess, faune, this.handlePlayerSpikeCollide, undefined, this)


        //Colliding among enmies
        this.physics.add.collider(plantZombie, [demon,lizards,Knight,reaperr,rockk,ghoult,ghostt,angell,newKnights])
        this.physics.add.collider(demon, [plantZombie,lizards,Knight,reaperr,rockk,ghoult,ghostt,angell,newKnights])
        this.physics.add.collider(lizards, [demon,plantZombie,Knight,reaperr,rockk,ghoult,ghostt,angell,newKnights])
        this.physics.add.collider(Knight, [demon,lizards,plantZombie,reaperr,rockk,ghoult,ghostt,angell,newKnights])
        this.physics.add.collider(reaperr, [demon,lizards,Knight,plantZombie,rockk,ghoult,ghostt,angell,newKnights])
        this.physics.add.collider(rockk, [demon,lizards,Knight,reaperr,plantZombie,ghoult,ghostt,angell,newKnights])
        this.physics.add.collider(ghoult, [demon,lizards,Knight,reaperr,rockk,plantZombie,ghostt,angell,newKnights])
        this.physics.add.collider(ghostt, [demon,lizards,Knight,reaperr,rockk,ghoult,plantZombie,angell,newKnights])
        this.physics.add.collider(angell, [demon,lizards,Knight,reaperr,rockk,ghoult,ghostt,plantZombie,newKnights])
        this.physics.add.collider(newKnights, [demon,lizards,Knight,reaperr,rockk,ghoult,ghostt,angell,plantZombie])
    



        //Colliding with knives
        this.physics.add.collider(knives, [lizards,plantZombie,newKnights,reaperr], this.handleKnifeLizardCollision, undefined, this)
        this.physics.add.collider(knives, demon, this.handleKnifeDemonCollision, undefined, this)
        this.physics.add.collider(knives, Knight, this.handleKnifeKnightCollision, undefined, this)
        this.physics.add.collider(knives, rockk, this.handleknifeRockcollide, undefined, this)
        this.physics.add.collider(knives, ghoult, this.handleKnifeghoulCollision, undefined, this)
        this.physics.add.collider(knives, ghostt, this.handleknifeghostcollide, undefined, this)
        this.physics.add.collider(knives, angell, this.handleknifeangelcollide, undefined, this)

        this.physics.add.collider([wallsLayer,forestLayer,stuffLayer,floorLayer], knives, this.handleKnifewallsCollision, undefined, this)
        this.physics.add.collider(knives, [wallsLayer,forestLayer,stuffLayer,floorLayer], this.handleKnifewallsCollision, undefined, this)

        //Colliding with enmies
        // this.physics.add.collider(lizards, faune, this.handlePlayerLizardCollide, undefined, this)
        // this.physics.add.collider(plantZombie, faune, this.handlePlayerPlantZombieCollide, undefined, this)
        // this.physics.add.collider(demon, faune, this.handlePlayerdemonCollide, undefined, this)
        // this.physics.add.collider(faune, ghostt, this.handlePlayerghostCollide, undefined, this)
        // this.physics.add.collider(faune, reaperr, this.handlePlayerreaperCollide, undefined, this)
        // this.physics.add.collider(faune, rockk, this.handlePlayerRockCollide, undefined, this)
        // this.physics.add.collider(faune, ghoult, this.handlePlayerGhoulCollide, undefined, this)
        // this.physics.add.collider(faune, angell, this.handlePlayerangelCollide, undefined, this)
        // this.physics.add.collider(Knight, faune, this.handlePlayerKnightCollide, undefined, this)
        // this.physics.add.collider(newKnights, faune, this.handlePlayernewKnightCollide, undefined, this)


    }

    throwKnife() {
        //console.log('throw');

        if (faune.anims.currentAnim) {
            const parts = faune.anims.currentAnim.key.split('-')
            const direction = parts[2]
            //console.log(parts)

            const vec = new Phaser.Math.Vector2(0, 0)

            switch (direction) {
                case 'up':
                    vec.y = -1
                    break

                case 'down':
                    vec.y = 1
                    break

                default:
                case 'side':
                    //console.log(faune.scaleX);
                    if (faune.scaleX < 0) {
                        vec.x = -1
                    } else {
                        vec.x = 1
                    }
                    break
            }

            const angle = vec.angle()
            //console.log(knives);
            if (knives) {

                this.knifesound = this.sound.add('knifesound')
                this.knifesound.play();

                const k = knives.get(faune.x, faune.y, 'knife')
                k.setRotation(angle)
                k.setVelocity(vec.x * 300, vec.y * 300)
            }
        }
    }

    handleKnifewallsCollision(obj1, obj2) {
        console.log(obj1,obj2);
        obj1.destroy()

    }

    //Knives Collide with Enemies
    handleKnifeLizardCollision(obj1, obj2) {
        console.log(obj1,obj2)
        obj2.destroy()
        obj1.destroy()
    }

    handleKnifeDemonCollision(obj1, obj2) {
        obj2.destroy()
        obj1.destroy()
        this.demonScream = this.sound.add('demonscreech')
        this.demonScream.play();
    }
    handleknifeRockcollide(obj1, obj2) {
        obj2.destroy()
        obj1.destroy()

        this.rockdie = this.sound.add('rockdie')
        this.rockdie.play();
    }

    handleKnifeghoulCollision(obj1, obj2) {
        obj2.destroy()
        obj1.destroy()
        this.ghoulsound = this.sound.add('ghoulsound')
        this.ghoulsound.play();;
    }

    handleKnifeKnightCollision(obj1, obj2) {
        obj1.destroy()
        obj2.destroy()
    }

    handleknifeangelcollide(obj1, obj2) {
        obj1.destroy()

        angel_health--

        if (angel_health === 5) {
            console.log('hit1', angel_health)
        }

        if (angel_health === 4) {
            console.log('hit1', angel_health)
        }

        if (angel_health === 3) {
            console.log('hit2', angel_health)
        }

        if (angel_health === 2) {
            console.log('hit3', angel_health)
        }

        if (angel_health === 1) {
            console.log('hit3', angel_health)

        }

        if (angel_health === 0) {

            obj2.destroy()
            this.ghostsound = this.sound.add('ghostsound')
            this.ghostsound.play();
            keys.get(obj2.x + 18, obj2.y + 18, 'key').setImmovable();
            //keyCount = keyCount + 1
        }

    }

    handleknifeghostcollide(obj1, obj2) {
        obj1.destroy()


        ghost_health--

        if (ghost_health === 4) {
            console.log('hit1', ghost_health)
        }

        if (ghost_health === 3) {
            console.log('hit2', ghost_health)
        }

        if (ghost_health === 2) {
            console.log('hit3', ghost_health)
        }

        if (ghost_health === 1) {
            console.log('hit3', ghost_health)

        }

        if (ghost_health === 0) {


            this.ghostsound = this.sound.add('ghostsound')
            this.ghostsound.play();
            obj2.destroy()
            //keys.get(obj2.x + 18, obj2.y + 18, 'key').setImmovable();
        }
        //obj2.destroy()

    }



    //Player Collide with enmies
    handlePlayerLizardCollide(obj1, obj2) {
        const lizardObj = obj2

        const dx = faune.x - lizardObj.x
        const dy = faune.y - lizardObj.y
        const dir = new Phaser.Math.Vector2(dy, dx).normalize().scale(200)

        this.handleDamage(dir)

        hit = 1
        healthState = damageHealthState

        sceneEvents.emit('player-healt-changed', _health)
    }
    handlePlayerPlantZombieCollide(obj1, obj2) {
        const plantZombieObj = obj2

        const dx = faune.x - plantZombieObj.x
        const dy = faune.y - plantZombieObj.y
        const dir = new Phaser.Math.Vector2(dy, dx).normalize().scale(250)

        this.handleDamage(dir)

        hit = 1
        healthState = damageHealthState

        this.femalehurt = this.sound.add('femalehurt')
        this.femalehurt.play();

        sceneEvents.emit('player-healt-changed', _health)

        faune.setVelocity(dir.y, dir.x)
        faune.setTint(0xff0000)
    }

    handlePlayerdemonCollide(obj1, obj2) {
        const demonObj = obj2

        const dx = faune.x - demonObj.x
        const dy = faune.y - demonObj.y
        const dir = new Phaser.Math.Vector2(dy, dx).normalize().scale(250)

        this.handleDamage(dir)
        hit = 1
        healthState = damageHealthState

        this.femalehurt = this.sound.add('femalehurt')
        this.femalehurt.play();

        sceneEvents.emit('player-healt-changed', _health)

        faune.setVelocity(dir.y, dir.x)
        faune.setTint(0xff0000)
    }

    handlePlayerreaperCollide(obj1, obj2) {
        const reaperObj = obj2

        const dx = faune.x - reaperObj.x
        const dy = faune.y - reaperObj.y
        const dir = new Phaser.Math.Vector2(dy, dx).normalize().scale(250)

        this.handleDamage(dir)
        hit = 1
        healthState = damageHealthState

        this.femalehurt = this.sound.add('femalehurt')
        this.femalehurt.play();

        sceneEvents.emit('player-healt-changed', _health)

        faune.setVelocity(dir.y, dir.x)
        faune.setTint(0xff0000)
    }

    handlePlayerangelCollide(obj1, obj2) {
        const reaperObj = obj2

        const dx = faune.x - reaperObj.x
        const dy = faune.y - reaperObj.y
        const dir = new Phaser.Math.Vector2(dy, dx).normalize().scale(250)

        this.handleDamage(dir)
        hit = 1
        healthState = damageHealthState

        this.femalehurt = this.sound.add('femalehurt')
        this.femalehurt.play();

        sceneEvents.emit('player-healt-changed', _health)

        faune.setVelocity(dir.y, dir.x)
        faune.setTint(0xff0000)
    }

    handlePlayerRockCollide(obj1, obj2) {
        const rockObj = obj2

        const dx = faune.x - rockObj.x
        const dy = faune.y - rockObj.y
        const dir = new Phaser.Math.Vector2(dy, dx).normalize().scale(250)

        this.handleDamage(dir)
        hit = 1
        healthState = damageHealthState

        this.femalehurt = this.sound.add('femalehurt')
        this.femalehurt.play();

        sceneEvents.emit('player-healt-changed', _health)

        faune.setVelocity(dir.y, dir.x)
        faune.setTint(0xff0000)
    }

    handlePlayerKnightCollide(obj1, obj2) {
        const KnightObj = obj2

        const dx = faune.x - KnightObj.x
        const dy = faune.y - KnightObj.y
        const dir = new Phaser.Math.Vector2(dy, dx).normalize().scale(200)

        this.handleDamage(dir)

        hit = 1
        healthState = damageHealthState

        this.femalehurt = this.sound.add('femalehurt')
        this.femalehurt.play();

        sceneEvents.emit('player-healt-changed', _health)

        faune.setVelocity(dir.y, dir.x)
        faune.setTint(0xff0000)
    }

    handlePlayerghostCollide(obj1, obj2) {
        const ghostObj = obj2

        const dx = faune.x - ghostObj.x
        const dy = faune.y - ghostObj.y
        const dir = new Phaser.Math.Vector2(dy, dx).normalize().scale(200)

        this.handleDamage(dir)

        hit = 1
        healthState = damageHealthState

        this.femalehurt = this.sound.add('femalehurt')
        this.femalehurt.play();

        sceneEvents.emit('player-healt-changed', _health)

        faune.setVelocity(dir.y, dir.x)
        faune.setTint(0xff0000)
    }

    handlePlayerGhoulCollide(obj1, obj2) {
        const ghoulObj = obj2

        const dx = faune.x - ghoulObj.x
        const dy = faune.y - ghoulObj.y
        const dir = new Phaser.Math.Vector2(dy, dx).normalize().scale(200)

        this.handleDamage(dir)

        hit = 1
        healthState = damageHealthState

        this.femalehurt = this.sound.add('femalehurt')
        this.femalehurt.play();

        sceneEvents.emit('player-healt-changed', _health)

        faune.setVelocity(dir.y, dir.x)
        faune.setTint(0xff0000)
    }

    handlePlayernewKnightCollide(obj1, obj2) {
        const newKnightObj = obj2

        const dx = faune.x - newKnightObj.x
        const dy = faune.y - newKnightObj.y
        const dir = new Phaser.Math.Vector2(dy, dx).normalize().scale(200)

        this.handleDamage(dir)

        hit = 1
        healthState = damageHealthState

        this.femalehurt = this.sound.add('femalehurt')
        this.femalehurt.play();

        sceneEvents.emit('player-healt-changed', _health)

        faune.setVelocity(dir.y, dir.x)
        faune.setTint(0xff0000)
    }

    handlePlayerSpikeCollide(obj1, obj2) {
        const SpikeObj = obj2

        const dx = faune.x - SpikeObj.x
        const dy = faune.y - SpikeObj.y
        const dir = new Phaser.Math.Vector2(dy, dx).normalize().scale(200)

        this.handleDamage(dir)

        hit = 1

        healthState = damageHealthState

        this.femalehurt = this.sound.add('femalehurt')
        this.femalehurt.play();

        sceneEvents.emit('player-healt-changed', _health)

        faune.setVelocity(dir.y, dir.x)
        faune.setTint(0xff0000)

        this.spiketrap = this.sound.add('spiketrap')
        this.spiketrap.play();
    }


    handlePlayerTreasureCollide(obj1, obj2) {
        this.coinsound = this.sound.add('coinsound')
        this.coinsound.setRate(1.2)
        //rate = coinsound.rate
        this.coinsound.play();

        if (obj2.anims.currentAnim.key !== 'chest-empty-open') {
            coin = coin + 10
            // mintReward()
            console.log('coinCOunt', coin);
            sceneEvents.emit('player-coin-mint', coin)
            obj2.anims.play('chest-empty-open')
        }
    }

    handleDamage(dir) {
        if (healthState === "damageHealthState") {
            return
        }

        faune.setVelocity(dir.x, dir.y)
        faune.setTint(0xff0000)

        _health = _health - 1

        console.log(_health);

        if (_health <= 0) {
            healthState = healthStateDead

            this.femalefaint = this.sound.add('femalefaint')
            this.femalefaint.play();

            this.youdied = this.sound.add('youdied')
            this.youdied.play();
            faune.anims.play('faune-faint', true)

        }
    }

    update(t, dt) {
        if (_health <= 0) {
            faune.setVelocity(0, 0)
            //console.log('player dead');
        } else {
    
        }
    
        if (hit > 0) {
            ++hit
            if (hit > 10) {
                hit = 0
            }
            return
        }
    
        if (!cursors || !faune) {
            //console.log('empty');
        }
        healthState = idleHealthState
        faune.setTint()
    
        if (Phaser.Input.Keyboard.JustDown(cursors.space)) {
            this.throwKnife()
            return
        }
    
        if (_health > 0) {
            speed
            if (cursors.left?.isDown) {
                faune.anims.play('faune-run-side', true)
                faune.setVelocity(-speed, 0)
    
                faune.scaleX = -1
                faune.body.offset.x = 24
    
            } else if (cursors.right?.isDown) {
                faune.anims.play('faune-run-side', true)
                faune.setVelocity(speed, 0)
    
                faune.scaleX = 1
                faune.body.offset.x = 8
    
            } else if (cursors.up?.isDown) {
                faune.anims.play('faune-run-up', true)
                faune.setVelocity(0, -speed)
    
            } else if (cursors.down?.isDown) {
                faune.anims.play('faune-run-down', true)
                faune.setVelocity(0, speed)
    
            } else {
                //const parts = this.anims.currentAnim.split('-')
                faune.anims.play('faune-idel-down', true)
                faune.setVelocity(0, 0)
            }
        }
    }

    
}


const mintReward = () => {
    loadBlockchainData()

    const web3 = window.web3

    const accounts = web3.eth.getAccounts()
    accounts.then(data => {
        console.log('data', data);
        contract.methods.reward(data[0]).send({ from: data[0] })
    })
}


