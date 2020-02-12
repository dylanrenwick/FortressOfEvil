import getChar from "./Characters";
import GameObject from "./GameObjects/GameObject";

export default class Canvas {
    private element: HTMLElement;
    private map: string[][];

    private objects: GameObject[];

    public get width(): number {
        return this.map[0].length;
    }
    public get height(): number {
        return this.map.length;
    }

    public constructor(canvElement: HTMLElement, width: number, height: number) {
        this.element = canvElement;
        this.objects = [];
        this.map = [];
        for (let i = 0; i < height; i++) {
            this.map.push([]);
            for (let j = 0; j < width; j++) {
                this.map[i].push(getChar("empty"));
            }
        }
    }

    public addGameObject(go: GameObject): void {
        this.objects.push(go);
    }

    public draw(): void {
        this.objects.forEach(o => o.draw(this));
        this.updateMap();
    }

    public updateMap(): void {
        this.element.innerHTML = this.map.map(r => r.join("")).join("\n");
    }

    public drawChar(x: number, y: number, c: string, color: string = "white"): void {
        if (y < 0 || x < 0 || y >= this.height || x >= this.width) return;
        c = `<span class='map-char' style='color:${color};'>${c}</span>`;
        this.map[y][x] = c;
    }

    public drawText(x: number, y: number, w: number, t: string, align: TextAlign = TextAlign.Left, color: string = "white"): void {
        switch (align) {
            case TextAlign.Center:
                x = w / 2 - t.length / 2;
                break;
            case TextAlign.Right:
                x = w - t.length;
                break;
        }
        for (let i = 0; i < t.length; i++) {
            this.drawChar(x + i, y, t[i], color);
        }
    }

    public drawHLine(x: number, x2: number, y: number, c: string, color: string = "white"): void {
        this.drawText(x, y, x2 - x, c.repeat(x2 - x), TextAlign.Left, color);
    }

    public drawVLine(x: number, y: number, y2: number, c: string, color: string = "white"): void {
        for (let i = y; i < y2; i++) {
            this.drawChar(x, i, c);
        }
    }

    public fillBox(x: number, y: number, w: number, h: number, c: string, color: string = "white"): void {
        w -= 1;
        h -= 1;
        for (let i = y; i < y + h; i++) {
            this.drawHLine(x, x + w, i, c);
        }
    }

    public drawBox(x: number, y: number, w: number, h: number, c: string, color: string = "white", fill: boolean = false): void {
        w -= 1;
        h -= 1;
        if (fill) this.fillBox(x, y, w, h, getChar("empty"));
        this.drawHLine(x, x + w, y, c);
        this.drawHLine(x, x + w, y + h, c);
        this.drawVLine(x, y, y + h, c);
        this.drawVLine(x + w, y, y + h, c);
    }

    public drawPrettyBox(x: number, y: number, w: number, h: number, corner: string, vert: string, hori: string, color: string = "white", fill: boolean = false): void {
        w -= 1;
        h -= 1;
        if (fill) this.fillBox(x, y, w, h, getChar("empty"));
        this.drawHLine(x, x + w, y, hori);
        this.drawHLine(x, x + w, y + h, hori);
        this.drawVLine(x, y, y + h, vert);
        this.drawVLine(x + w, y, y + h, vert);
        this.drawChar(x, y, corner);
        this.drawChar(x + w, y, corner);
        this.drawChar(x, y + h, corner);
        this.drawChar(x + w, y + h, corner);
    }
}

export enum TextAlign {
    Left = 0,
    Center = 1,
    Right = 2
}