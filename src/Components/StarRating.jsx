import React from 'react'

const StarRating = ({rating,handleRating}) => {
    console.log(rating);
    function stars(x){
        let star=[];
        for(let i= 1;i<=5;i++){
            if(i<=x){
                star.push(
                    <span onClick={()=> handleRating(i)} style={{color:"gold", fontsize:"20px",cursor:'pointer' }}> ★ </span>
                )
            }
            else star.push(<span onClick={()=> handleRating(i)} style={{color:"black",fontsize:"20px",cursor:'pointer' }}> ★ </span>)
        }
        return star
    }

    return (
        <div>
            {stars(rating)}
        </div>
    )
}
StarRating.defaultProps={
    handleRating : ()=>{}
}

export default StarRating
