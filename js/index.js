class GameDead extends HTMLElement {
  fps = 60;
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: "open" });
    let id = `game${Math.random()}`;
    let canvas = document.createElement("canvas", { id });
    canvas.setAttribute("id", id);
    shadow.appendChild(canvas);
    const game = new Game(
      canvas,
      this.getAttribute("principal"),
      this.getAttribute("cloud"),
      this.getAttribute("enemy"),
      this.getAttribute("enemy-walk"),
      this.getAttribute("background")
    );
    setInterval(function () {
      game.drawn();
    }, 1000 / this.fps);
    document.addEventListener("keydown", function (event) {
      if (event.keyCode == 32) {
        game.listen();
      }
    });
  }
}
customElements.define("game-personal", GameDead);
// "cloud.png", "enemy.png", "enemy_walk.png", "background.jpg";
