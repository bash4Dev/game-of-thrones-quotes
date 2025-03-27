import React from 'react'

const QuoteCard = ({ quoteData }) => {
  return (
    <div className='quote-card'>
        <p className='quote-text'>{quoteData?.sentence}</p>
        <div className="author-info">
            <img src={quoteData?.authorImg || "Image not found!"} className='author-img' alt="Author Image" />
            <div className='author-details'>
                <div className='author-name'>{quoteData?.character.name}</div>
                <div className="author-house">{quoteData?.character.house.name || "Unknown House"}</div>
            </div>
        </div>
    </div>
  )
}

export default QuoteCard
