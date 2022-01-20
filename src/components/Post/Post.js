import React, { useState } from 'react'
import './Post.css'
import { HeartIcon } from '@heroicons/react/solid'

const Post = ({ title, date, description, url, type }) => {
  const [showMore, setShowMore] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="postWrapper">
      {type === 'image' ?
        <img className="postMedia" src={url} alt={title} />   
        :
        <iframe
          className="postMedia"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      }
      
      <h3 className="title">{title}</h3>
      <span>{date}</span>
      <p className={!showMore && 'postDescription'}>{description}</p>

      <div className="btnsWrapper">
        <button className="adjustTextBtn" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show less' : 'Read more'}
        </button>  
        <button onClick={() => setIsLiked(!isLiked)}>
          <div className={`iconWrapper ${isLiked && 'liked'}`}>
            <HeartIcon />
          </div>
        </button>
      </div>
    </div>
  )
}

export default Post