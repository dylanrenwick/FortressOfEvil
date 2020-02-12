import Canvas from "./Canvas";
import getChar from "./Characters";
import Player from "./GameObjects/Player";
import UIStats from "./GameObjects/UIStats";

export default class Game {
    public constructor(canv: HTMLElement) {
      const canvas = new Canvas(canv, 79, 29);
      canvas.drawPrettyBox(0, 0, 79, 29, getChar("uicorner"), getChar("uivert"), getChar("uihori"));
      let player = new Player(0, 0);
      player.MaxHP = 500;
      player.HP = 500;
      canvas.addGameObject(player);
      let uistats = new UIStats(0, 26, 79, 3, player, 20);
      canvas.addGameObject(uistats);
      canvas.draw();
      /*setInterval(() => {
        player.HP--;
        canvas.draw();
      }, 100);*/
    }
}