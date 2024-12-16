import React from "react"
import trollFace from "/troll-face.png"
import style from "./Header.module.css"

export default function Header() {
    return (
        <header className={style.header}>
            <img
                src={trollFace}
            />
            <h1>Meme Generator</h1>
        </header>
    )
}