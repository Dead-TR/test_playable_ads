import {config, dogs, text_1, exampleDog, play, } from '../index';

function createBasic (element) {
  const basicTextStyle = {
    fontSize: '30px',
    fill: '#fff',
    fontFamily: 'Arial, sans-serif',
    fontStyle: 'bold',
  }

  switch (element) {
    case 'dimmer':
      return(
        this.add.rectangle(
          0, 0,
          config.width, config.height,
          0x000000,0.85
        )
        .setOrigin(0, 0)
        .setDepth(1)
      );

    case 'text_1':
      return(
        this.add.text(
          (config.width / 2) - 25,
          (config.height / 2) - 100,
          '5 Hidden dogs',
          basicTextStyle,
        )
        .setShadow(1, 1, '#000000', 0)
        .setOrigin(0.5)
        .setDepth(2)
      );

    case 'text_2':
      return(
        this.add.text(
          (config.width / 2),
          (text_1.y + (exampleDog.height/2)),
          'Can you spot them?',
          basicTextStyle,
        )
        .setShadow(1, 1, '#000000', 0)
        .setOrigin(0.5)
        .setDepth(2)
      );

    case 'text_3':
      return(
        this.add.text(
          (play.x),
          (play.y),
          'Play Now',
          {
            fontSize: '40px',
            fill: '#F6FDB3',
            fontFamily: 'Arial, sans-serif',
            fontStyle: 'bold',
          },
        )
        .setShadow(1, 1, '#000000', 0)
        .setOrigin(0.5)
        .setDepth(2)
      );

    case 'exampleDog':
      return(
        dogs.create(
          (text_1.x + (text_1.width / 2)),
          (config.height / 2) - 100,
          'dog',
          )
          .setOrigin(0, 0.5)
          .setScale(0.5)
          .setFlip(true, false)
          .setDepth(2)
      );

    case 'play':
      return(
        this.add.image(
          config.width / 2,
          config.height - 50,
          'btn',
        )
        .setInteractive({ cursor: 'pointer' })
        .setDepth(2)
      );

    default:
      return null;
  }
}

export default createBasic;
