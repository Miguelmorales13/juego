class ObjectCanvasAnimated {
  canvas;
  context;
  posX = 0;
  posY = 0;
  speed = 2;
  image = new Image();
  sizeImage = {
    realWidth: 0,
    realHeight: 0,
    showWidth: 0,
    showHeight: 0,
  };
  constructor(canvas, context, srcImage, sizeImage, posX = 0, posY = 0) {
    this.posX = posX;
    this.posY = posY;
    this.image.src = srcImage;
    this.canvas = canvas;
    this.context = context;
    this.sizeImage = sizeImage;
  }
  setImage(src) {
    this.image.src = src;
  }
}
