import { Star } from "../star_constructor"

export const animate = (starArray: Star[], context: CanvasRenderingContext2D): void => {
    requestAnimationFrame(() => animate(starArray, context));
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = 0; i < starArray.length; i++) {
        starArray[i].update();
    }
}