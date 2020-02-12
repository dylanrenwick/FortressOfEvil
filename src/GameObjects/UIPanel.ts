import Canvas from "../Canvas";
import GameObject from "./GameObject";
import getChar from "../Characters";

export default class UIPanel extends GameObject {
    public W: number;
    public H: number;

    public constructor(x: number, y: number, w: number, h: number) {
        super(x, y);
        this.W = w;
        this.H = h;
    }

    public draw(c: Canvas): void {
        c.drawPrettyBox(this.X, this.Y, this.W, this.H, getChar("uicorner"), getChar("uivert"), getChar("uihori"), "white", true);
        super.draw(c);
    }
}