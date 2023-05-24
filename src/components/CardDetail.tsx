import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FC } from 'react'

interface CardProps {
  id?: number;
  image?: string;
  position?: string;
  content?: string;
  cek?: any;
}

const CardDetail: FC<CardProps> = ({ id, cek, image, position, content }) => {

  const navigate = useNavigate()

  const toDetail = () => {
    navigate(`/detail/${id}`)
  }

  return (
    <motion.div onClick={() => toDetail()} variants={cek} whileHover={{ y: -15 }} className={`card w-64 bg-base-100 shadow-xl hover:cursor-pointer hover:shadow-[0px_15px_20px_-1px_rgba(0,0,0,0.25)]`}>

      <figure className={` px-4 pt-6 w-full h-44 overflow-hidden`}>
        <img src={image} alt="avatar.jpg" className={`rounded-xl w-7/12`} />
      </figure>

      <div className={`card-body px-6 py-4`}>
        <h2 className="card-title text-[16px] font-semibold">{position}</h2>
        <p className='line-clamp-2 text-[14px] text-text leading-5'>{content}</p>

        <p className="items-end card-actions text-[13px] mt-4 text-text">
          click to detail .....
        </p>
      </div>
    </motion.div>
  )
}

export default CardDetail
