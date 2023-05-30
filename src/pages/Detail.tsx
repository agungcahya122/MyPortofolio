import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { motion as m } from 'framer-motion'

import "../styles/app.css"

import Layout from '../components/Layout'

import { DataType } from '../utils/DataType'
import projects from "../dummy/projects.json"

import lapak1 from "../assets/lapak1.png"
import lapak2 from "../assets/lapak2.png"
import lapak3 from "../assets/lapak3.png"

import { IoArrowBackCircleSharp } from "react-icons/io5"
import { HiBookmark } from "react-icons/hi2"


const Detail = () => {
  const { id } = useParams()
  const [data,] = useState<DataType[]>(projects)
  const [dataDetail, setDataDetail] = useState<DataType>({})

  const imagePj = [
    { "id": 1, "image": [{ lapak1 }, { lapak2 }, { lapak3 }] },
    { "id": 2, "image": [{ lapak1 }, { lapak2 }, { lapak3 }] },
    { "id": 3, "image": [{ lapak1 }, { lapak2 }, { lapak3 }] },
    { "id": 4, "image": [{ lapak1 }, { lapak2 }, { lapak3 }] },
    { "id": 5, "image": [{ lapak1 }, { lapak2 }, { lapak3 }] },
    { "id": 6, "image": [{ lapak1 }, { lapak2 }, { lapak3 }] }
  ]

  const newData = (id: string) => {
    const dataDetails = data.map((item, index) => ({
      ...item, ...imagePj[index]
    }))
    const newDataDetails = dataDetails.filter((item) => item.id === parseInt(id))
    setDataDetail(newDataDetails[0])
  }

  useEffect(() => {
    if (id) {
      newData(id)
    }
  }, [id])

  console.log(dataDetail)
  const opacityAnimate = {
    offscreen: { opacity: 0, x: -20 },
    onscreen: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  return (
    <Layout>
      <m.h1 variants={opacityAnimate} initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 0.2 }} className='text-hijau TextShadow font-semibold tracking-widest px-16 text-[28px] mt-6'>| Detail Project</m.h1>

      <m.div variants={opacityAnimate} initial={"offscreen"} whileInView={"onscreen"} className='absolute flex items-end text-hijau hover:text-green-300 hover:cursor-pointer gap-1 top-6 right-12'>
        <IoArrowBackCircleSharp size={30} className="shadow-[0px_0px_0px_0px_rgba(4px,5px,10px,0px,0.5)]" />
        <p className='TextShadow tracking-widest text-[18px] font-semibold'>Kembali</p>
      </m.div>

      <m.div initial={"offscreen"} whileInView={"onscreen"} transition={{ staggerChildren: 0.5 }} viewport={{ once: false, amount: 0.2 }} className='flex justify-center px-10 gap-14 mb-10 '>
        <m.div variants={opacityAnimate} className='w-8/12'>
          <div className="mt-6 flex justify-center rounded-xl h-[60%] overflow-hidden shadow-[-2px_2px_4px_-1px_rgba(100,100,100,0.5)]">
            <img src={lapak1} alt="image.png" className='' />
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

        <m.div variants={opacityAnimate} className='text-zinc-800 w-4/12 '>
          <h1 className='flex gap-2 items-center mt-5 text-[20px] font-medium'><HiBookmark size={25} /> {dataDetail.title} |</h1>
          <p className='text-justify mt-5 leading-6 text-[14px] pb-3 border-b-[1.6px]'>{dataDetail.description}</p>

          <div className='flex gap-2 text-[14px] text-hijau font-semibold pb-3 border-b-[1.6px] mt-6'> <p className='text-zinc-800 '>Website :</p> <a href={dataDetail.deploy} target='_blank'>{dataDetail.deploy}</a></div>

          <div className='flex gap-2 text-[14px] text-hijau font-semibold pb-3 border-b-[1.6px] mt-6'> <p className='text-zinc-800 '>Design :</p> <a href={dataDetail.figma} target='_blank'>https://www.figma.com</a></div>

          <div className='flex gap-2 text-[14px] text-hijau font-semibold pb-3 border-b-[1.6px] mt-6'> <p className='text-zinc-800 '>Github :</p> <a href={dataDetail.github} target='_blank'>https://github.com</a></div>

          <div className='flex gap-4 text-[14px] text-hijau font-semibold pb-3 border-b-[1.6px] mt-6'> <p className='text-zinc-800 '>Tech : </p> {dataDetail.technology}</div>
        </m.div>
      </m.div>

    </Layout >
  )
}

export default Detail
