import React from 'react'

export default function Card({img , title , description , firstLink , secondLink}) {
  return (
    <div>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <a href="#">{firstLink}</a>
        <a href="#">{secondLink}</a>
    </div>
  )
}
