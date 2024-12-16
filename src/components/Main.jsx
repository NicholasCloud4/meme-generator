import React from "react"
import style from "./Main.module.css"

export default function Main() {
    return (
        <main>
            <div className={style.form}>
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className={style.meme}>
                <img src="http://i.imgflip.com/1bij.jpg" />
                <span className={style.top}>One does not simply</span>
                <span className={style.bottom}>Walk into Mordor</span>
            </div>
        </main>
    )
}