import Canvas from "../Canvas";

export default abstract class GameObject {
    private children: GameObject[];

    public X: number;
    public Y: number;

    public constructor(x: number, y: number) {
        this.X = x;
        this.Y = y;
        this.children = [];
    }

    public addGameObject(go: GameObject): void {
        this.children.push(go);
    }

    public draw(c: Canvas): void {
        this.children.forEach(go => go.draw(c));
    }

    public update(): void {
        this.children.forEach(go => go.update());
    }
}