function createInteractive(config, dogs) {
  if (config.width < 800) {
    this.add.image(config.width/2 - 100, config.height/2, 'BG')
    .setDisplaySize(800, 570);

    dogs.create(200, 480, 'dog').setOrigin(0, 1);
    dogs.create(40, 382, 'dog').setOrigin(0, 1).setScale(0.9);
    dogs.create(40, 196, 'dog').setOrigin(0, 1).setScale(0.8).setFlip(true, false);
    dogs.create(200, 315, 'dog').setOrigin(0, 1).setScale(0.7);
    dogs.create(280, 210, 'dog').setOrigin(0, 1).setScale(0.65);
  } else {
    this.add.image(0, 0, 'BG')
    .setOrigin(0, 0)
    .setDisplaySize(800, 570);

    dogs.create(160, 500, 'dog').setOrigin(0, 1);
    dogs.create(690, 460, 'dog').setOrigin(0, 1).setScale(0.9);
    dogs.create(90, 235, 'dog').setOrigin(0, 1).setScale(0.8).setFlip(true, false);
    dogs.create(380, 280, 'dog').setOrigin(0, 1).setScale(0.7);
    dogs.create(705, 230, 'dog').setOrigin(0, 1).setScale(0.7);
  }
}

export default createInteractive;
