import React, { useState } from "react"
import style from "./Main.module.css"
import { useEffect } from "react"

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    /**
     * Challenge: Get a random image from the array of
     * allMemes when the user clicks the button. Once
     * you've gotten a random image from the array, make
     * sure to write the code that will display that
     * random meme image to the page.
     */

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const newMemeUrl = allMemes[randomNumber].url
        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                imageUrl: newMemeUrl
            }
        })
    }



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
                <button onClick={getMemeImage}>Get a new meme image 🖼</button>
            </div>
            <div className={style.meme}>
                <img src={meme.imageUrl} />
                <span className={style.top}>{meme.topText}</span>
                <span className={style.bottom}>{meme.bottomText}</span>
            </div>
        </main>
    )
}