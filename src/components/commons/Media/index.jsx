import React, { useMemo, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import ReactPlayer from "react-player/lazy"
import { getFileExt } from "helper/getExt"
import IconCirPlay from "../Icons/IconCirPlay"
import IconCirPause from "../Icons/IconCirPause"
import "./styles.scss"

const isVideo = (url) => url.match(/\.(jpeg|jpg|gif|png)$/) === null

const MediaCard = ({
  url = "",
  previewUrl = "",
  playing = false,
  preview = true,
  frame = false,
  className,
  ...rest
}) => {
  const [isPlaying, setPlay] = useState(playing)
  const [isPreview, setLoadVideo] = useState(preview)

  const getAbsoluteUrl = (link = "") => {
    if (!link) {
      return `${process.env.REACT_APP_IMAGEHOST}/coming-soon.gif`
    }
    if (link?.match(/^\.|^(http)/)) {
      return url
    }
    return `${process.env.REACT_APP_IMAGEHOST}/${link}`
  }

  const getImgUrl = (imgUrl) => {
    if (previewUrl) return getAbsoluteUrl(previewUrl)
    const ext = getFileExt(imgUrl)
    if (!ext || ext === "mp4") {
      return `${imgUrl}.png`
    }
    return imgUrl
  }

  const setPlayMovie = (status) => {
    setPlay(status)
    if (preview) {
      setLoadVideo(false)
    }
  }

  const uri = useMemo(() => getAbsoluteUrl(url), [url])

  return (
    <div
      className={`player-wrapper ${className} ${frame && "frame"}`}
      {...rest}
    >
      {(isPreview && !playing) || !isVideo(uri) ? (
        <div className="video-card">
          <LazyLoadImage
            alt="lazy-loading-card"
            src={getImgUrl(uri)}
            width="100%"
            height="auto"
            effect="blur"
            threshold={1800}
            className={className}
            {...rest}
          />
        </div>
      ) : (
        <ReactPlayer
          className="video-card"
          url={uri}
          playing={isPlaying}
          muted
          loop
          width="100%"
          height="auto"
          onClickPreview={() => setPlay(true)}
        />
      )}

      {/* when it is only a video section */}
      {isVideo(getAbsoluteUrl(url)) && !playing && (
        <div className="videoControlButton">
          {isPlaying ? (
            <IconCirPause onClick={() => setPlayMovie(false)} />
          ) : (
            <IconCirPlay onClick={() => setPlayMovie(true)} />
          )}
        </div>
      )}
    </div>
  )
}

export default MediaCard
