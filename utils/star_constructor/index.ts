export interface  IStarProperties {
    x: number;
    y:number;
    dy: number;
    context: CanvasRenderingContext2D;
    img: HTMLImageElement;
    minX: number;
    maxX: number;
    maxY: number;
    minY: number;
    draw: () => void;
    update: () => void;
}

export class Star implements IStarProperties {
    x: number;
    y: number;
    dy: number;
    context: CanvasRenderingContext2D;
    img: HTMLImageElement;
    minX: number;
    maxX: number;
    maxY: number;
    minY: number;

    constructor(x: number, y: number, dy: number, context: CanvasRenderingContext2D) {
        this.x = x;
        this.y = y;
        this.dy = dy;
        this.img = new Image();
        this.img.src = "/star.png";
        this.context = context;
        this.minX = 0;
        this.maxX = innerWidth * 0.8;
        this.maxY = innerHeight + 700;
        this.minY = innerHeight - 350;
    }

    draw(): void {
        this.context.beginPath();
        this.context.imageSmoothingQuality = "high";
        this.context.drawImage(this.img, this.x, this.y, 300, 200);
    }

    update(): void {
        if (this.y > 1000) {
            this.y = -(Math.floor(Math.random() * (this.maxY - this.minY) + this.minY))
            this.x = Math.floor(Math.random() * (this.maxX - this.minX) + this.minX)
            this.dy = Math.ceil(Math.random() * (5 - 1) + 1)
        }
        this.y += this.dy;
        this.draw();
    }
}