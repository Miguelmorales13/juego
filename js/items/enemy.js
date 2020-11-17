class Enemy extends ObjectCanvasAnimated {
  floor = 250;
  state = {
    isWalk: false,
    imageWalk: "src",
    imageNormal: "src",
  };
  constructor(
    canvas,
    context,
    image,
    imageWalk,
    sizeImage,
    posX = 0,
    posY = 0
  ) {
    super(canvas, context, `assets/images/${image}`, sizeImage, posX, posY);
    this.state.imageNormal = image;
    this.state.imageWalk = imageWalk;
  }
  logical() {
    if (this.posX < -50) {
      this.posX = this.canvas.width + 50;
    } else {
      this.posX -= this.speed;
    }
  }
  setSpeed(speed) {
    this.speed = speed;
  }
  draw() {
    this.logical();
    if (this.speed != 0) {
      this.setImage(
        `assets/images/${
          this.state.isWalk ? this.state.imageWalk : this.state.imageNormal
        }`
      );
      this.state.isWalk = !this.state.isWalk;
    }
    this.context.drawImage(
      this.image,
      0,
      0,
      this.sizeImage.realWidth,
      this.sizeImage.realHeight,
      this.posX,
      this.posY,
      this.sizeImage.showWidth,
      this.sizeImage.showHeight
    );
  }
}
