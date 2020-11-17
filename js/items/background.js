class Background extends ObjectCanvasAnimated {
  constructor(canvas, context, image, sizeImage, posX = 0, posY = 0) {
    super(canvas, context, `assets/images/${image}`, sizeImage, posX, posY);
  }
  logical() {
    if (this.posX > this.canvas.width) {
      this.posX = 0;
    } else {
      this.posX += this.speed;
    }
  }
  setSpeed(speed) {
    this.speed = speed;
  }
  draw() {
    this.logical();
    this.context.drawImage(
      this.image,
      this.posX,
      0,
      this.sizeImage.realWidth,
      this.sizeImage.realHeight,
      0,
      this.posY,
      this.sizeImage.showWidth * 2.6,
      400
    );
  }
}
