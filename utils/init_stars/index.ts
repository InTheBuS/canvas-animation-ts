import { Star } from "../star_constructor"


export const initStars = (starArray: Star[], maxX: number,
                     minX: number, maxY: number, minY: number,
                     Star: new(x: number, y: number, dy: number, context: CanvasRenderingContext2D) => Star,
                     context: CanvasRenderingContext2D): void => {
    for (let i: number = 0; i < 8; i++) {
        let x: number = Math.floor(Math.random() * (maxX - minX) + minX);
        let y: number = -(Math.floor(Math.random() * (maxY - minY) + minY));
        let dy: number = Math.ceil(Math.random() * (7 - 1) + 1)
        starArray.push(new Star(x, y, dy, context));
    }
}


