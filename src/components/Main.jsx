import React, { useState } from "react"
import style from "./Main.module.css"

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const { value, name } = event.currentTarget
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                [name]: value
                //[event.target.name]: event.target.value
            }
        })
    }

    return (
        <main>
            <div className={style.form}>
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className={style.meme}>
                <img src={meme.imageUrl} />
                <span className={style.top}>{meme.topText}</span>
                <span className={style.bottom}>{meme.bottomText}</span>
            </div>
        </main>
    )
}