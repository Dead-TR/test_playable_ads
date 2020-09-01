import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'phaser';

import createInteractive from './modules/createInteractive';
import createFinalElements from './modules/createFinalElements';
import createBasic from './modules/createBasic';
import mainScale from './modules/mainScale';

export const config = {
  type: Phaser.AUTO,
  width: mainScale('width'),
  height: 570,
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
  "scale": {
    "mode": mainScale('scale'),
    "autoCenter": 2
  }
};

const game = new Phaser.Game(config);
let counter = 0;
let act = 'start';
let show = false;
export let circles, dimmer, textStyle, text_1, text_2, text_3, text_4, text_5, dogs, exampleDog, logo, char, play;

function preload (){
  this.load.image('BG', 'assets/img/back_five_dogs.jpg');
  this.load.image('dog', 'assets/img/doggy.png');
  this.load.image('btn', 'assets/img/btn.png');
  this.load.image('logo', 'assets/img/logo.png');
  this.load.image('char', 'assets/img/char.png');
  this.load.spritesheet(
    'circle',
    'assets/img/circle_animation.png',
    {
      frameWidth: 165,
      frameHeight: 184,
    }
  )
}

function create (){
  dogs = this.add.group();
  createInteractive.bind(this)(config, dogs);

  for(const dog of [...dogs.children.entries]) {
    dog.scale -= 0.25;
    dog.setInteractive();
    dog.type = 'dog';
  }

  circles = this.add.group();
  this.anims.create({
    key: 'check',
    frames: this.anims.generateFrameNumbers(
      'circle',
      {
        start: 0,
        end: 7,
      }
    ),
    frameRate: 20,
    repeat: 0,
  })

  dimmer = createBasic.bind(this)('dimmer');
  text_1 = createBasic.bind(this)('text_1');
  exampleDog = createBasic.bind(this)('exampleDog');
  text_2 = createBasic.bind(this)('text_2');
  play = createBasic.bind(this)('play');
    play.zoomed = false;
  text_3 = createBasic.bind(this)('text_3');

  logo = createFinalElements.bind(this)('logo');
  char = createFinalElements.bind(this)('char');
  text_4 = createFinalElements.bind(this)('text_4');
  text_5 = createFinalElements.bind(this)('text_5');

  this.input.on('gameobjectup', ((pointer, gameObject) => {
    console.log("create -> gameObject", gameObject.texture.key)
    if (act === 'middle') {
      if ('checked' in gameObject === false && gameObject.type === 'dog') {
        circles.create(gameObject.x, gameObject.y, 'circle')
          .setOrigin(0.2, 0.9)
          .setScale(gameObject.scale)
          .anims.play('check', true);

        gameObject.checked = true;
        counter++;
      }

      if (gameObject.texture.key === 'btn') {
        show = true;
      }
    }
  }));
}

function update() {

  switch (act) {
    case 'start':
      dimmer.fillAlpha -= 0.01;
      text_1.scale += 0.001;
      text_2.scale += 0.001;
      exampleDog.scale += 0.001;

      if (dimmer.fillAlpha <= 0) {
        act = 'transitionToMiddle';
      };
      break;

    case 'transitionToMiddle':
      text_1.alpha -= 0.01;
      text_2.alpha -= 0.01;
      exampleDog.alpha -= 0.01;

      if (exampleDog.alpha === 0) {
        act = 'middle';
      }
      break;

    case 'transitionToMiddle':
      text_1.alpha -= 0.01;
      text_2.alpha -= 0.01;
      exampleDog.alpha -= 0.01;

      if (exampleDog.alpha === 0) {
        act = 'middle';
      }
      break;

    case 'middle':
      if (counter === 5) {
        act = 'end';
      };
      break;

    case 'end':
      logo.alpha += 0.015;
      char.alpha += 0.015;
      dimmer.fillAlpha += 0.01;
      text_4.alpha += 0.015;
      text_5.alpha += 0.015;

      if (dimmer.fillAlpha >= 0.8) {
        act = 'finish';
      }
      break;

    default:
      break;
  }

  if (act === 'end' || act === 'finish') {
    switch (play.zoomed) {
      case false:
        play.scale += 0.001;
        text_3.scale += 0.001;

        if (play.scale >= 1.04) {
          play.zoomed = true;
        }
        break;

      case true:
        play.scale -= 0.001;
        text_3.scale -= 0.001;

        if (play.scale <= 1) {
          play.zoomed = false;
        }
        break;

      default:
        break;
    }
  }

  if (show) {
    if (dimmer.fillAlpha < 0.8) {
      dimmer.fillAlpha += 0.01;
      text_1.alpha += 0.01; text_1.setDepth(2).setScale(1);
      text_2.alpha += 0.01; text_2.setDepth(2).setScale(1);
      exampleDog.alpha += 0.01; exampleDog.setDepth(2).setScale(0.5);
    }

    if (dimmer.fillAlpha > 0.8) {
      show = false;
    }

    if (!show) {
      this.time.addEvent({
        delay: 2000,
        callback: () => {
          act = 'start';
        },
        callbackScope: this,
        loop: false,
        repeat: 0,
      });
    }
  }
}
