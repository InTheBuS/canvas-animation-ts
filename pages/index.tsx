/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import styles from './index.module.css'
import {jsx, css} from '@emotion/react'
import CanvasElement from '../components/canvas/index'

export default function Home(): React.ReactNode {

    interface IStyle {
        minHeight: string,
        width: string,
        padding: string,
        display: string,
        flexDirection: string,
        justifyContent: string,
        alignItems: string,
        backgroundSize: string
    }

    const Style: IStyle = {
        minHeight: '100vh',
        width: '100%',
        padding: '0, 0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: '100%'
    }

    return (
        <div className={styles.container}>
            <CanvasElement />
        </div>
    )
}
