import { useState } from "react"
import { motion } from 'framer-motion'

import CustomButton from '../components/CustomButton'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

import { DataType } from "../utils/DataType"
import Experience from "../dummy/experience.json"
import Education from "../dummy/education.json"
import Aboutme from "../dummy/about.json"

import Ellpise from "../assets/elipse green.png"
import Rectangle from "../assets/rectangle.png"
import Circle from "../assets/Ellipse 15.png"
import Poltek from "../assets/polinema2.png"
import Overlay from "../assets/overlay.png"
import White from "../assets/white bg.png"
import Green from "../assets/green bg.png"
import Avatar from "../assets/avatar.png"
import Slash from "../assets/garing.png"
import Altera from "../assets/alta.png"
import Plus from "../assets/plus.png"
import Pkk from "../assets/pkk.png"

import { BsGithub, BsWhatsapp } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import { FaLinkedinIn, FaCircle } from "react-icons/fa"
import { Card } from "../components/Card"
import CustomInput from "../components/CustomInput"

const App = () => {

  const [square, setSquare] = useState<boolean>(false)
  const [next, setNext] = useState<boolean>(false)

  const [image] = useState([
    { "image": Altera }, { "image": Poltek }
  ])
  const [edu] = useState<DataType[]>(Education)

  const newEdu = edu.map((item, index) => ({
    ...item, ...image[index]
  }))

  const [imageEx] = useState([
    { "image": Pkk }, { "image": Poltek }
  ])

  const [experience] = useState<DataType[]>(Experience)

  const newExperience = experience.map((item, index) => ({
    ...item, ...imageEx[index]
  }))

  console.log(newExperience)



  // const Detail = (index: number) => {

  // }

  return (
    <Layout>
      <Navbar />
      <div className='flex justify-between p-8 mb-60'>
        <div className='pl-32 relative'>
          <div className='text-zinc-900 space-y-2'>
            <motion.p initial={{ opacity: 0, x: 75 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className='font-medium text-[16px]'>Hello I'm</motion.p>
            <motion.p initial={{ opacity: 0, x: 45 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className='font-semibold text-[20px] text-hijau'>M Agung Cahya D</motion.p>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className='text-[64px] tracking-wider font-bold leading-[4rem]'>Frontend <br /> <span className='pl-12'>Engineer</span></motion.p>
            <motion.p initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className='text-[16px] w-9/12 pt-2'>Fresh graduate in Program Immersive Frontend Alterra Academy.</motion.p>
          </div>

          <div className='flex gap-4 mb-4 mt-10'>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3, type: "spring" }}>
              <FaLinkedinIn size={20} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4, type: "spring" }}>
              <BsGithub size={20} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5, type: "spring" }}>
              <BsWhatsapp size={20} />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6, type: "spring" }}>
              <RiInstagramFill size={22} />
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
            <CustomButton id='btn-cv' size='4/12' label='My Cover Letter' />
          </motion.div>

          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1, scale: [0.8, 1, 1, 0.8], shadow: [Green] }} transition={{ duration: 2, delay: 1, repeat: Infinity }} className='absolute top-[168px] right-[135px] bg-hijau rounded-full shadow-[0px_0px_20px_12px_rgba(89,123,106,0.8)]'>

          </motion.img>
          <motion.img initial={{ opacity: 0 }} animate={{ scale: [0.8, 1, 1, 0.8], opacity: 1, shadow: [Green] }} transition={{ duration: 2, delay: 0.8 }} src={Ellpise} alt="ellpise.jpg" className='absolute w-5 top-40 right-32' />

          <motion.img
            animate={{ x: [0, -1, -3, 3, 1, 0], y: [0, 1, 3, -2, -1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            src={Circle} alt="circle.jpg" className='absolute w-5 top-10 left-10' />
          <motion.img animate={{ x: [0, -2, 2, 0], y: [0, 2, -2, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} src={Circle} alt="circle.jpg" className='absolute w-5 top-12 left-8' />

          <motion.img
            animate={{ x: [0, -1, -2, -3, 2, 3, 1, 0], y: [0, 1, 2, 3, -2, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.3 }} src={Circle} alt="circle.jpg" className='absolute w-5 bottom-10 right-14' />
          <motion.img animate={{ x: [0, -2, 2, 0], y: [0, 2, -2, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} src={Circle} alt="circle.jpg" className='absolute w-5 bottom-12 right-12' />

          <motion.img animate={{ rotate: [0, 90, 180, 270, 360] }} transition={{ duration: 4, delay: 0.3, repeat: Infinity }} src={Plus} alt="plus.jpg" className='absolute w-4 -bottom-[70px] left-14' />
          <motion.img animate={{ rotate: [0, 90, 180, 270, 360] }} transition={{ duration: 4, delay: 0.3, repeat: Infinity }} src={Plus} alt="plus.jpg" className='absolute w-4 -bottom-20 left-10' />
          <motion.img animate={{ rotate: [360, 270, 180, 90, 0] }} transition={{ duration: 4, delay: 0.3, repeat: Infinity }} src={Plus} alt="plus.jpg" className='absolute w-4 -bottom-[90px] left-14' />
        </div>

        <div className='relative flex-1'>
          <motion.img src={White} alt="green.jpg" className='absolute w-6/12 top-24 left-24' />
          <img src={Green} alt="green.jpg" className='absolute w-6/12 top-[105px] left-[105px] z-10' />
          <img src={Avatar} alt="avatar.jpg" className='absolute w-6/12 top-0 left-24 z-10' />
          <img src={Overlay} alt="overlay.jpg" className='absolute w-6/12 top-44 left-28 z-20' />

          <motion.img animate={{ rotate: [0, 90, 180, 270, 360] }} transition={{ duration: 2, delay: 0.3, repeat: Infinity }} src={Plus} alt="plus.jpg" className='absolute w-4 top-[50px] left-14' />
          <motion.img animate={{ rotate: [360, 180, 90, 180, 360] }} transition={{ duration: 2, delay: 0.3, repeat: Infinity }} src={Plus} alt="plus.jpg" className='absolute w-4 top-[60px] left-10' />
          <motion.img animate={{ rotate: [360, 270, 180, 90, 0] }} transition={{ duration: 2, delay: 0.3, repeat: Infinity }} src={Plus} alt="plus.jpg" className='absolute w-4 top-[70px] left-14' />

          <motion.img initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: square ? 1 : 3, repeat: Infinity }} onClick={() => { setSquare(!square) }} src={Rectangle} alt="square.jpg" className='absolute w-7 -bottom-36 left-14 hover:cursor-pointer' />

          <motion.img animate={{ rotate: [0, 360] }} transition={{ duration: 3, delay: 0.3, repeat: Infinity }} src={Rectangle} alt="square.jpg" className='absolute w-7 top-16 right-28' />

          <motion.img animate={{ opacity: [0, 0.3, 0.6, 1, 0.6, 0.3, 0] }} transition={{ duration: 4, delay: 0.3, repeat: Infinity }} src={Slash} alt="slash.jpg" className='absolute w-16 -bottom-20 right-28' />
        </div>
      </div>

      {/* About Me */}

      <div className="relative">
        <h1 className="flex justify-center items-center gap-1 text-[32px] text-zinc-900 font-bold">About me <FaCircle size={10} className='text-hijau mt-4' /></h1>
        <p className="mt-10 mx-auto w-7/12 text-center">{Aboutme.data}</p>

        <div className="w-2 h-2 rounded-full bg-hijau absolute top-[150px] left-10"></div>
        <div className="w-2 h-2 rounded-full bg-hijau absolute top-[180px] left-10"></div>
        <div className="w-2 h-2 rounded-full bg-hijau absolute top-[210px] left-10"></div>
        <div className="w-2 h-2 rounded-full bg-hijau absolute top-[240px] left-10"></div>
        <div className="w-2 h-2 rounded-full bg-hijau absolute top-[270px] left-10"></div>
        <div className="w-2 h-2 rounded-full bg-hijau absolute top-[300px] left-10"></div>

        <div className="w-2 h-2 rounded-full bg-hijau absolute top-[150px] left-16"></div>
        <div className="w-2 h-2 rounded-full bg-hijau absolute top-[180px] left-16"></div>
        <div className="w-2 h-2 rounded-full bg-hijau absolute top-[210px] left-16"></div>
        <div className="w-2 h-2 rounded-full bg-hijau absolute top-[240px] left-16"></div>
        <div className="w-2 h-2 rounded-full bg-hijau absolute top-[270px] left-16"></div>
        <div className="w-2 h-2 rounded-full bg-hijau absolute top-[300px] left-16"></div>
      </div>

      {/* Education */}

      <div className="relative mt-40">
        <h1 className="flex justify-center items-center gap-1 text-[32px] text-zinc-900 font-bold">Education <FaCircle size={10} className='text-hijau mt-4' /></h1>
        {newEdu.map((data, index) => (
          <div className="mt-10 mx-auto flex justify-center gap-10 mb-10">
            <>
              <div key={index} className="w-2/12 text-[16px]">
                <img src={data.image} alt="alta.jpg" className="w-8/12 " />
                <p className="TextShadow mt-4 text-hijau font-semibold">{data.learn}</p>
                <p className="-mt-1 text-zinc-900 TextShadow">{data.date}</p>
              </div>
              <div className="w-6/12 text-[16px]">
                {data.content} <br className="mb-4" /> {data.score}
              </div>
            </>
          </div>
        ))}
      </div>

      {/* Experience */}

      <div className="mt-24 px-16">
        <h1 className="flex justify-center items-center gap-1 text-[32px] text-zinc-900 font-bold">Experience <FaCircle size={10} className='text-hijau mt-4' /></h1>

        <div className="flex flex-wrap justify-center gap-10 mt-14">
          {newExperience.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              content={item.content}
              position={item.position}
              jobdesc1={item.jobdesc1}
              jobdesc2={item.jobdesc2}
            // no={index + 1}
            />
          ))}
        </div>
      </div>

      {/* My Project */}

      <div className="mt-24 px-16">
        <h1 className="text-center text-[28px] text-zinc-900">My Regular Updated</h1>
        <h1 className="flex justify-center items-center gap-1 text-[32px] text-hijau font-semibold">Project <FaCircle size={10} className='text-hijau mt-4' /></h1>

        <div className="flex flex-wrap justify-center gap-10 mt-14">
          {newExperience.map((item) => (
            <Card
              image={item.image}
              content={item.content}
              position={item.position}
            />
          ))}
        </div>
      </div>

      {/* Contact Feature */}

      <div className="mt-24 px-16">
        <h1 className="flex justify-center items-center gap-1 text-[38px] text-hijau font-semibold">Contact <FaCircle size={10} className='text-hijau mt-4 tracking-widest' /></h1>

        <p className="text-center text-[16px] text-zinc-900 w-7/12 mx-auto">I am still new to the technologi information, but I will try my best to fulfil the tasks and responsibilities assigned to me, and always learn things that I don't understand so that I can continue to grow.</p>

        <p className="text-[16px] text-zinc-900 font-semibold text-center mt-16">fill in the form to send an email</p>
        <div className="relative">
          <CustomInput
            id="input-email"
            type="email"
            placeholder="Email"
            width="7/12"
          />
          <CustomInput
            id="input-name"
            type="text"
            placeholder="Full Name"
            width="7/12"
          />
          <CustomInput
            id="input-company"
            type="text"
            placeholder="Company Name"
            width="7/12"
          />

          <div className="mt-8 text-center">
            <textarea
              id="input-message"
              typeof="text"
              placeholder="Your Message"
              className="w-7/12 max-w-full bg-[#D9D9D9] border-none rounded-lg h-36 py-4"
            />
          </div>

          <div className="mt-10 text-center">
            <CustomButton
              id="btn-send"
              label="Send Message"
              size="7/12"
            />
          </div>

          <div className='absolute top-0 right-28 flex flex-col gap-10 mb-4 mt-10'>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3, type: "spring" }}>
              <FaLinkedinIn size={20} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4, type: "spring" }}>
              <BsGithub size={20} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5, type: "spring" }}>
              <BsWhatsapp size={20} />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6, type: "spring" }}>
              <RiInstagramFill size={22} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}

      <div className="relative mt-16">
        <h1 className="flex justify-center items-center gap-1 text-[32px] text-zinc-900 font-semibold ">Technology Stack <FaCircle size={10} className='text-hijau mt-4' /></h1>

        <p>Some of the technologies or frameworks that I use to complete some of my projects</p>
      </div>

    </Layout >
  )
}

export default App
