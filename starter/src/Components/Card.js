import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa/'


const Card = (props) => {

    let review = props.review;

  return (

    <div className='flex flex-col md:relative '>

        <div className='absolute top-[-7rem] z-[10] mx-auto '>
            <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={review.image}></img>
            <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-1] left-[6px]'></div>
        </div>

        <div className='text-center mt-7'>
            <p className='text-2xl font-bold capitilize tracking-wider'>{review.name}</p>
        </div>

        <div className='text-center'>
            <p className='text-violet-300 uppercase text-small'>{review.job}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft></FaQuoteLeft>
        </div>

        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight></FaQuoteRight>
        </div>

    </div>
  )
};

export default Card;