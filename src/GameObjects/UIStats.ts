import Canvas from "../Canvas";
import { TextAlign } from "../Canvas";
import Player from "./Player";
import UIPanel from "./UIPanel";

export default class UIStats extends UIPanel {
    private player: Player;
    private barLength: number;

    public constructor(x: number, y: number, w: number, h: number, player: Player, barLength: number) {
        super(x, y, w, h);
        this.player = player;
        this.barLength = barLength;
    }

    public draw(c: Canvas): void {
        super.draw(c);
        let fullBars = Math.floor(this.player.HP / this.player.MaxHP * this.barLength);
        let barString = "█".repeat(fullBars);
        if (fullBars < this.barLength) {
            let partBlocks = "▏▎▍▌▋▊▉";
            let partBar = Math.floor((this.player.HP / this.player.MaxHP * this.barLength - fullBars) / this.barLength * 70);
            barString += partBlocks[partBar];
        }
        c.drawText(this.X + 2, this.Y + 1, 4, "HP: ");
        c.drawText(this.X + 6, this.Y + 1, this.barLength, barString.padEnd(this.barLength), TextAlign.Left, "#f00");
    }
}