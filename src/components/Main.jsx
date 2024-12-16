import React, { useState } from "react"
import style from "./Main.module.css"

export default function Main() {
    /**
     * Challenge: move the hardcoded meme info into React
     * state. Use an object with `topText`, `bottomText`,
     * and `imageUrl` properties, and set the initial values to
     * the ones hardcoded below.
     */

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                topText: event.target.value
            }
        })
        /**
         * Challenge: update the topText value in the meme state
         * object every time the topText input box is changed
         * 
         * Note: don't worry about bottomText at this point.
         */
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
                <img src={meme.imageUrl} />
                <span className={style.top}>{meme.topText}</span>
                <span className={style.bottom}>{meme.bottomText}</span>
            </div>
        </main>
    )
}