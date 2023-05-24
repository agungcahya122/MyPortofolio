import { FC, useState } from 'react'
import { motion } from 'framer-motion';

interface CardProps {
  no?: number
  image?: string;
  position?: string;
  content?: string;
  jobdesc1?: string;
  jobdesc2?: string;
  next?: boolean;
  toDetail?: () => void;
}


export const Card: FC<CardProps> = ({ jobdesc1, jobdesc2, toDetail, image, position, content }) => {
  const [nextJob, setNextJob] = useState<boolean>(false)

  return (

    <motion.div onClick={() => setNextJob(!nextJob)} initial={{ y: 0 }} whileHover={{ y: -15 }} whileInView={{ transition: { duration: 0.4, delay: 0.1 } }} className={`card w-64 bg-base-100 shadow-xl hover:cursor-pointer hover:shadow-[0px_15px_20px_-1px_rgba(0,0,0,0.25)]`}>

      <motion.div animate={{ opacity: nextJob ? 0 : 1, y: nextJob ? 15 : 0, x: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className={`${nextJob ? "hidden" : "flex"}`}>
        <figure className={`${nextJob ? "hidden" : "flex"} px-4 pt-6 w-full h-44 overflow-hidden`}>
          <img src={image} alt="avatar.jpg" className={`${nextJob ? "hidden" : "flex"}  rounded-xl w-7/12`} />
        </figure>
      </motion.div>

      <motion.div animate={{ opacity: nextJob ? 0 : 1, y: nextJob ? 15 : 0, x: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className={`${nextJob ? "hidden" : "flex"} card-body px-6 py-4`}>
        <h2 className="card-title text-[16px] font-semibold">{position}</h2>
        <p className='text-[14px] text-text leading-5'>{content}</p>

        <p onClick={toDetail} className="items-end card-actions text-[13px] mt-4 text-text">
          click to detail .....
        </p>
      </motion.div>

      <motion.div animate={{ opacity: nextJob ? 1 : 0, y: nextJob ? 0 : -15 }} transition={{ duration: 0.4, delay: 0.3 }} className={`${nextJob ? "flex" : "hidden"} card-body px-6 py-[42px]`}>
        <p className='text-[14px] text-text leading-5'>{jobdesc1}</p>
        <p className='text-[14px] text-text leading-5'>{jobdesc2}</p>

        <p className="items-end card-actions text-[13px] mt-4 text-text">
          click to hide .....
        </p>
      </motion.div>
    </motion.div>

  )
}

// export const CardHidden: FC<CardProps> = ({ toDetail, jobdesc1, jobdesc2 }) => {

//   return (
//     <motion.div initial={{ x: -20, opacity: 0, y: 0 }} whileHover={{ y: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="card w-64 bg-base-100 shadow-xl hover:shadow-[0px_15px_20px_-1px_rgba(0,0,0,0.25)] hover:cursor-pointer">
//       <div className="card-body px-6 py-4 ">
//         <p className='text-[14px] text-text leading-5'>{jobdesc1}</p>
//         <p className='text-[14px] text-text leading-5'>{jobdesc2}</p>

//         <p onClick={toDetail} className="items-end card-actions text-[13px] mt-4 text-text">
//           click to hide .....
//         </p>
//       </div>
//     </motion.div>
//   )
// }
