/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef} from "react";
import {jsx} from '@emotion/react'
import styles from './index.module.css'
import {initStars} from '@/utils/init_stars'
import {animate} from '@/utils/animate'
import { Star } from "@/utils/star_constructor"

export default function CanvasElement(): JSX.Element {

    let canvas = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const minX = 0
        const maxX = (innerWidth * 0.8)

        const maxY = innerHeight + 700
        const minY = innerHeight - 350

        if (canvas && canvas.current) {
            canvas.current.width = window.innerWidth;
            canvas.current.height = window.innerHeight;
            let context = canvas.current.getContext('2d') as CanvasRenderingContext2D;
            const starArray: (Star[]) = [];
            animate(starArray, context);
            initStars(starArray, maxX, minX, maxY, minY, Star, context);
        }
    }, [])

    return (
        <canvas ref={canvas} id="canvas__animate" className={styles.canvas__container}>
        </canvas>
    )
}