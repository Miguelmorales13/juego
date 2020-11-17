class Game {
  canvasWidth = 800;
  canvasHeight = 400;
  canvas;
  floor = 250;
  stopped = false;
  status = 0;
  points = 0;
  speed = 2;
  images = {
    principal: "",
    enemy: "",
    enemyWalk: "",
    background: "",
    cloud: "",
  };
  context;
  principal;
  enemy;
  cloud;
  background;
  constructor(canvas, principal, cloud, enemy, enemyWalk, background) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.images = { principal, enemy, enemyWalk, background, cloud };

    this.setAllObjects();
    this.cloud.setSpeed(1);
  }

  listen() {
    if (this.stopped == true) {
      this.setAllObjects();
    }
    this.stopped = false;
    this.principal.activeJump();
  }
  setSpeed(speed = 2) {
    this.speed = speed;
    this.enemy.setSpeed(speed);
    this.cloud.setSpeed(this.stopped ? 0 : 1);
    this.principal.setSpeed(speed);
    this.background.setSpeed(speed);
  }
  cleanCanvas() {
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
  }
  drawPoints() {
    this.context.font = "30px impact";
    this.context.fillStyle = "#f2f2f2";
    this.context.fillText(`${this.points}`, 750, 50);
    if (this.stopped) {
      this.context.font = "60px impact";
      this.context.fillText(`Perdiste`, 300, 200);
      this.context.font = "20px impact";
      this.context.fillText(`presiona espacio para continuar...`, 270, 250);
    }
  }

  drawn() {
    this.cleanCanvas();
    this.background.draw();
    this.principal.draw();
    this.enemy.draw();
    this.cloud.draw();
    this.drawPoints();
    if (!this.stopped) {
      this.status++;
      if (this.status % 200 == 0) {
        this.points++;
        if (this.points % 10 == 1) {
          this.setSpeed(this.speed + 1);
        }
      }
    }
    let coalition = this.principal.checkCoalition([this.enemy]);
    if (coalition) {
      this.setSpeed(0);
      this.stopped = true;
    }
  }
  setAllObjects() {
    this.status = 0;
    this.points = 0;
    this.background = new Background(
      this.canvas,
      this.context,
      this.images.background,
      {
        realWidth: 1300,
        realHeight: 650,
        showWidth: 800,
        showHeight: 400,
      },
      0,
      0
    );
    this.principal = new Principal(
      this.canvas,
      this.context,
      this.images.principal,
      { realWidth: 810, realHeight: 1320, showWidth: 40, showHeight: 80 },
      40,
      this.floor
    );
    this.enemy = new Enemy(
      this.canvas,
      this.context,
      this.images.enemy,
      this.images.enemyWalk,
      { realWidth: 179, realHeight: 302, showWidth: 50, showHeight: 50 },
      this.canvasWidth + 20,
      this.floor + 40
    );
    this.cloud = new Cloud(
      this.canvas,
      this.context,
      this.images.cloud,
      { realWidth: 800, realHeight: 567, showWidth: 70, showHeight: 50 },
      this.canvasWidth + 100,
      this.floor - 200
    );
  }
}
