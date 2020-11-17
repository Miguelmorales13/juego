class Cloud extends ObjectCanvasAnimated {
  floor = 250;
  state = {
    isFinished: false,
  };
  constructor(canvas, context, image, sizeImage, posX = 0, posY = 0) {
    super(canvas, context, `assets/images/${image}`, sizeImage, posX, posY);
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
