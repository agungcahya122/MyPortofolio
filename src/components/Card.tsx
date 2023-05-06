import React, { FC } from 'react'

interface CardProps {
  image?: string;
  position?: string;
  content?: string
}

export const Card: FC<CardProps> = ({ image, position, content }) => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl hover:shadow-[0px_15px_20px_-1px_rgba(0,0,0,0.25)] hover:-translate-y-5 hover:cursor-pointer duration-500">
      <figure className="px-4 pt-6 w-full h-44 overflow-hidden">
        <img src={image} alt="avatar.jpg" className="rounded-xl w-7/12" />
      </figure>

      <div className="card-body px-6 py-4 ">
        <h2 className="card-title text-[16px] font-semibold">{position}</h2>
        <p className='text-[14px] text-text leading-5'>{content}</p>

        <p className="items-end card-actions text-[13px] mt-4 text-text">
          click to detail .....
        </p>
      </div>
    </div>
  )
}

