import React from 'react'
import StarRating from './StarRating'

const Filter = ({text,handleText,rating,handleRating}) => {
    return (
    <div>
        <h1>Our movie app</h1>
        <div className="header-container">
            <input type="text" value={text} onChange={handleText} />
            <StarRating rating={rating} handleRating={handleRating} />
        </div>
    </div>
    )
}

export default Filter
