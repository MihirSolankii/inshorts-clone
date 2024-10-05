import React from 'react'
import "./NewsCard.css"
const NewsCard = ({news}) => {
   
    
  return (
    <div className="newsCard">
      <img
        alt={news.title}
        src={
          news.urlToImage
            ? news.urlToImage
            : "./abc.jpg"
        }
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{news.title}</span>
          <br />
          <span className="author">
            <a href={news.url} target="__blank">
              <b>short </b>
            </a>{" "}
            <span className="muted">
              {" "}
              by {news.author ? news.author : "unknown"}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{news.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={news.url} target="__blank" className="source">
              <b>{news.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}


export default NewsCard;
