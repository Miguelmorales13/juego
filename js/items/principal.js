class Principal extends ObjectCanvasAnimated {
  state = {
    isJumping: false,
    isUp: false,
  };
  floor = 250;
  maxJump = 150;

  constructor(canvas, context, image, sizeImage, posX = 0, posY = 0) {
    super(canvas, context, `assets/images/${image}`, sizeImage, posX, posY);
  }
  activeJump() {
    if (!this.state.isJumping) {
      this.state = {
        isJumping: true,
        isUp: true,
      };
    }
  }
  setSpeed(speed) {
    this.speed = speed;
  }
  checkCoalition(objects) {
    let isCoalition = objects.find((item) => {
      if (
        item.posX <= this.posX + this.sizeImage.showWidth &&
        item.posX >= this.posX
      ) {
        if (this.posY >= item.posY - item.sizeImage.showHeight) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    return isCoalition;
  }
  logical() {
    if (this.state.isJumping) {
      if (this.state.isUp) {
        if (this.posY < this.maxJump) {
          this.state = {
            isJumping: true,
            isUp: false,
          };
          this.posY = this.maxJump;
        } else {
          this.posY -= this.speed;
        }
      } else {
        if (this.posY > this.floor) {
          this.state = {
            isJumping: false,
            isUp: false,
          };
          this.posY = this.floor;
        } else {
          this.posY += this.speed;
        }
      }
    }
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
