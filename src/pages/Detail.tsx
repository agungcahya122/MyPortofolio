import { useNavigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion as m } from 'framer-motion'
import { useEffect, useState } from 'react'

import "../styles/app.css"

import Layout from '../components/Layout'

import { DataType } from '../utils/DataType'

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"
import { IoArrowBackCircleSharp } from "react-icons/io5"
import { HiBookmark } from "react-icons/hi2"


const Detail = () => {
  const location = useLocation()
  const navigtae = useNavigate()
  const [dataDetail,] = useState<DataType>(location.state.dataDetail)
  const [index, setIndex] = useState<number>(0)
  const [sliding, setSliding] = useState<number>(500)

  const nextSlide = () => {
    setSliding(500)
    if (index >= 2) {
      setIndex(0)
      return
    } else {
      // setSliding(500)
      setIndex(index + 1)
    }
  }

  const prevSlide = () => {
    setSliding(-500)
    if (index <= 0) {
      setIndex(2)
      return
    } else {
      // setSliding(-500)
      setIndex(index - 1)
    }
  }

  // const autoSlide = (index: number) => {
  //   setTimeout(() => {
  //     if (index >= 2) {
  //       setIndex(0)
  //     } else {
  //       setIndex(index + 1)
  //     }
  //   }, 5000);
  // }

  // useEffect(() => {  
  //   autoSlide(index)
  // }, [index])

  const opacityAnimate = {
    offscreen: { opacity: 0, x: -20 },
    onscreen: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  const opacity2Animate = {
    offHover: { opacity: 0 },
    onHover: { opacity: 1, transition: { duration: 0.4 } }
  }

  const variants = {
    offScreen: { x: (sliding), opacity: 0, transition: { x: { type: 'spring', stiffness: 300, damping: 30 } } },
    exit: { x: -(sliding), opacity: 0, transition: { duration: 0.6, x: { type: 'spring', stiffness: 300, damping: 30 } } },
    onScreen: { x: 0, opacity: 1, transition: { duration: 0.6, x: { type: 'spring', stiffness: 300, damping: 30 } } },
  }

  return (
    <Layout>
      <m.h1 variants={opacityAnimate} initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: true }} className='2xl:block lg:block hidden text-hijau TextShadow font-semibold tracking-widest 2xl:px-16 lg:px-16 md:px-10 px-5 2xl:text-[28px] lg:text-[28px] md:text-[28px] text-[20px] mt-6'>| Detail Project</m.h1>

      <h1 className='2xl:hidden lg:hidden md:flex flex gap-2 items-center md:px-10 px-4 mt-8 md:text-[22px] text-[20px] font-medium'><HiBookmark size={25} /> {dataDetail.title} |</h1>

      <m.div initial={"offscreen"} whileInView={"onscreen"} transition={{ staggerChildren: 0.5 }} viewport={{ once: true }} className='flex 2xl:flex-row lg:flex-row flex-col justify-center 2xl:px-10 lg:px-10 md:px-10 px-5 gap-14 mb-10 '>
        <m.div variants={opacityAnimate} className='2xl:w-8/12 lg:w-8/12 w-full mt-7'>
          <div className='relative w-full h-[60%] flex overflow-hidden shadow-[-2px_2px_4px_-1px_rgba(100,100,100,0.5)] rounded-xl'>

            <AnimatePresence initial={false}>
              <m.div
                variants={variants}
                animate={"onScreen"}
                initial={"offScreen"}
                exit={"exit"}
                key={dataDetail.image[index]}
                style={{ backgroundImage: `url(${dataDetail.image[index]})`, aspectRatio: (19 / 8) }} className='w-full h-full bg-cover bg-no-repeat absolute top-0 left-0' >
              </m.div>
            </AnimatePresence>


            {/* <AnimatePresence initial={false}> */}

            {/* <m.img src={dataDetail.image[index]} variants={variants} initial="offScreen" animate="onScreen" exit={"exit"} key={dataDetail.image[index]} alt="gambar dokumentasi" className='w-full' style={{ aspectRatio: (16 / 8) }} /> */}

            {/* <m.div variants={variants} initial="offScreen" animate="onScreen" exit="leftScreen" key={dataDetail.image[index]} className="rounded-xl h-full shadow-[-2px_2px_4px_-1px_rgba(100,100,100,0.5)] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${dataDetail.image[index]})` }}>
            </m.div> */}
            {/* </AnimatePresence> */}

            <m.div variants={opacity2Animate} whileHover={"onHover"} initial={"offHover"} className='absolute inset-2 flex items-center justify-between'>
              <div onClick={() => prevSlide()} className='cursor-pointer bg-black/10 rounded-full hover:bg-black/25'>
                <MdKeyboardArrowLeft size={35} />
              </div>

              <div onClick={() => nextSlide()} className='cursor-pointer bg-black/10 rounded-full hover:bg-black/25'>
                <MdKeyboardArrowRight size={35} className="" />
              </div>
            </m.div>
          </div>

          <p className='text-[18px] text-zinc-800 tracking-wider font-semibold mt-8 '>Author :</p>

          <div className='flex flex-wrap gap-x-6'>
            <div className="flex items-center gap-2 mt-5">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-contain"
                style={{
                  backgroundImage: `URL(${"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"})`,
                }}
              >
                {/* <img src={profil} alt="profil.svg" /> */}
              </div>
              <p className='text-hijau font-semibold tracking-wide text-[14px] leading-5'>Agung Cahya <br /><span className='font-normal'>agungcahya122@gmail.com</span></p>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-contain"
                style={{
                  backgroundImage: `URL(${"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"})`,
                }}
              >
                {/* <img src={profil} alt="profil.svg" /> */}
              </div>
              <p className='text-hijau font-semibold tracking-wide text-[14px] leading-5'>Agung Cahya <br /><span className='font-normal'>agungcahya122@gmail.com</span></p>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-contain"
                style={{
                  backgroundImage: `URL(${"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"})`,
                }}
              >
                {/* <img src={profil} alt="profil.svg" /> */}
              </div>
              <p className='text-hijau font-semibold tracking-wide text-[14px] leading-5'>Agung Cahya <br /><span className='font-normal'>agungcahya122@gmail.com</span></p>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-contain"
                style={{
                  backgroundImage: `URL(${"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"})`,
                }}
              >
                {/* <img src={profil} alt="profil.svg" /> */}
              </div>
              <p className='text-hijau font-semibold tracking-wide text-[14px] leading-5'>Agung Cahya <br /><span className='font-normal'>agungcahya122@gmail.com</span></p>
            </div>
            <div className="flex items-center gap-2 mt-5">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-contain"
                style={{
                  backgroundImage: `URL(${"https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"})`,
                }}
              >
                {/* <img src={profil} alt="profil.svg" /> */}
              </div>
              <p className='text-hijau font-semibold tracking-wide text-[14px] leading-5'>Agung Cahya <br /><span className='font-normal'>agungcahya122@gmail.com</span></p>
            </div>
          </div>
        </m.div>

        <m.div variants={opacityAnimate} className='text-zinc-800 2xl:w-4/12 lg:w-4/12 w-full '>
          <h1 className='2xl:flex lg:flex hidden gap-2 items-center mt-5 text-[20px] font-medium'><HiBookmark size={25} /> {dataDetail.title} |</h1>

          <m.h1 variants={opacityAnimate} initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: true }} className='2xl:hidden lg:hidden block text-zinc-900 font-semibold tracking-normal px-0 md:text-[22px] text-[20px]'>| Detail Project</m.h1>

          <p className='text-justify 2xl:mt-5 lg:mt-5 mt-2 leading-6 text-[14px] pb-3 border-b-[1.6px]'>{dataDetail.description}</p>

          <div className='flex gap-2 text-[14px] text-hijau font-semibold pb-3 border-b-[1.6px] mt-6'> <p className='text-zinc-800 '>Website :</p> <a href={dataDetail.deploy} target='_blank'>{dataDetail.deploy}</a></div>

          <div className='flex gap-2 text-[14px] text-hijau font-semibold pb-3 border-b-[1.6px] mt-6'> <p className='text-zinc-800 '>Design :</p> <a href={dataDetail.figma} target='_blank'>https://www.figma.com</a></div>

          <div className='flex gap-2 text-[14px] text-hijau font-semibold pb-3 border-b-[1.6px] mt-6'> <p className='text-zinc-800 '>Github :</p> <a href={dataDetail.github} target='_blank'>https://github.com</a></div>

          <div className='flex gap-4 text-[14px] text-hijau font-semibold pb-3 border-b-[1.6px] mt-6'> <p className='text-zinc-800 '>Tech : </p> {dataDetail.technology}</div>
        </m.div>
      </m.div>

      <m.div variants={opacityAnimate} initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: true }} className='absolute flex items-end text-hijau hover:text-emerald-500 hover:cursor-pointer gap-1 2xl:top-6 lg:top-6 md:top-7 top-9 2xl:right-12 lg:right-12 md:right-12 right-5'>
        <IoArrowBackCircleSharp size={30} className="2xl:inline lg:inline md:inline hidden shadow-[0px_0px_0px_0px_rgba(4px,5px,10px,0px,0.5)]" />
        <p onClick={() => navigtae(`/`)} className='TextShadow tracking-widest 2xl:text-[18px] lg:text-[18px] md:text-[18px] text-[16px] font-semibold'>Kembali</p>
      </m.div>
    </Layout >
  )
}

export default Detail
