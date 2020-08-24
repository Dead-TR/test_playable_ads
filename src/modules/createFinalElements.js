import {config, logo, text_4, play} from '../index';

function createFinalElements (element) {
  const screenWidth = window.screen.width;

  switch (element) {
    case 'logo':
      return(
        this.add.image(
          config.width / 2,
          screenWidth >= 800 ? 50 : 0,
          'logo',
        )
        .setOrigin(0.5, 0)
        .setDisplaySize(363, 200)
        .setAlpha(0)
        .setDepth(1)
      );

    case 'char':
      return(
        this.add.image(
          screenWidth >= 800 ? -30 : config.width / 2,
          screenWidth >= 800
            ? config.height
            : config.height - (config.height - play.y + (play.height / 2 - 20)),
          'char',
        )
        .setOrigin(
          screenWidth >= 800 ? 0 : 0.5,
          1,
        )
        .setFlip(
          screenWidth >= 800 ? false : true,
          false
        )
        .setDisplaySize(
          screenWidth >= 800 ? 294 : 170,
          screenWidth >= 800 ? 520 : 300,
        )
        .setAlpha(0)
        .setDepth(1)
      );

    case 'text_4':
      return(
        this.add.text(
          config.width / 2,
          logo.y + screenWidth >= 800 ? 250 : 330,
          'Great Job',
          {
            fontSize: '70px',
            fill: '#FFC76B',
            fontFamily: 'Arial, sans-serif',
            fontStyle: 'bold',
          },
        )
        .setShadow(1, 1, '#000000', 0)
        .setOrigin(0.5)
        .setDepth(1)
        .setAlpha(0)
      );

    case 'text_5':
      return(
        this.add.text(
          config.width / 2,
          text_4.y + text_4.displayHeight,
          'Can you solve every mystery?',
          {
            fontSize: '40px',
            fill: '#fff',
            fontFamily: 'Arial, sans-serif',
            fontStyle: 'bold',
          },
        )
        .setShadow(1, 1, '#000000', 0)
        .setOrigin(0.5)
        .setWordWrapWidth(350)
        .setDepth(1)
        .setAlign('center')
        .setAlpha(0)
      );

    default:
      return null;
  }
}

export default createFinalElements;
