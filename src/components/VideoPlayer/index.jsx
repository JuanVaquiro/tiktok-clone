import clsx from "clsx"
import { useRef, useState } from "react"
import styles from "./styles.module.css"

const SRC = "https://v16-webapp.tiktok.com/51aea86a3b34d711443feb8d48bc512a/62f97b5c/video/tos/useast2a/tos-useast2a-pve-0068/3a487c23d7f94a9a9056689a125b1b69/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2510&bt=1255&cs=0&ds=3&ft=eXd.6HHMMyq8ZJU1Awe2NweTyl7Gb&mime_type=video_mp4&qs=0&rc=NThkZ2Y8OmY2OTpkaTZnO0Bpamk2bzY6Zml2PDMzNzczM0BjNmMzYWAxXy8xMy8zYDEzYSNlM2xqcjRfYXFgLS1kMTZzcw%3D%3D&l=2022081416463401019205514626F3BADB&btag=80000"


const VideoPlayer = () => {
    const [playing, setplaying] = useState(false)
    const video = useRef(null)

    const handlePlay = () => {
        // if (playing) {
        //     video.current.pause()
        // } else {
        //     video.current.play()
        // }
        const { current: videoEl } = video
        playing
        ? videoEl.pause()
        : videoEl.play()

        setplaying(!playing)
    }

    const playerClassName = clsx( styles.player, {
        [styles.hidden]: playing
    })

  return (  
    <div>
        <video 
        className={styles.video}
        src={SRC}  
        controls={false} 
        ref={video}
        onClick={handlePlay}
        />
        <i className={playerClassName} />
    </div>
  )
}

export default VideoPlayer