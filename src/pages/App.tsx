import { ToastContainer, toast } from "react-toastify"
import { useState, useRef, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { motion } from 'framer-motion'

import 'react-toastify/dist/ReactToastify.css'

import CustomButton from '../components/CustomButton'
import CustomInput from "../components/CustomInput"
import CardDetail from "../components/CardDetail"
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import { Card } from "../components/Card"

import { DataType } from "../utils/DataType"
import Experience from "../dummy/experience.json"
import Education from "../dummy/education.json"
import Projects from "../dummy/projects.json"
import Aboutme from "../dummy/about.json"

import Ellpise from "../assets/elipse green.png"
import Rectangle from "../assets/rectangle.png"
import Circle from "../assets/Ellipse 15.png"
import Tailwind from "../assets/tailwind.png"
import Poltek from "../assets/polinema2.png"
import Overlay from "../assets/overlay.png"
import lapakUmkm from "../assets/lapak.png"
import Sabilun from "../assets/sabilun.png"
import Dribble from "../assets/dribble.png"
import Behance from "../assets/behance.png"
import White from "../assets/white bg.png"
import Green from "../assets/green bg.png"
import Google from "../assets/google.png"
import Vercel from "../assets/vercel.png"
import goHome from "../assets/gohome.png"
import Gurumu from "../assets/gurumu.png"
import Avatar from "../assets/avatar.png"
import Slash from "../assets/garing.png"
import Altera from "../assets/alta.png"
import Figma from "../assets/figma.png"
import react from "../assets/react.png"
import Plus from "../assets/plus.png"
import Pkk from "../assets/pkk.png"

import { BsGithub, BsWhatsapp } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import { FaLinkedinIn, FaCircle } from "react-icons/fa"


const App = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [square, setSquare] = useState<boolean>(false)
  const [disable, setDisable] = useState<boolean>(true)

  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [edu] = useState<DataType[]>(Education)
  const [experience] = useState<DataType[]>(Experience)
  const [projects] = useState<DataType[]>(Projects)

  const [image] = useState([
    { "image": Altera }, { "image": Poltek }
  ])
  const [imageEx] = useState([
    { "image": Pkk }, { "image": Poltek }
  ])
  const [imagePj] = useState([
    { "icon": lapakUmkm, "image": [{ Poltek }, { Figma }, { Tailwind }, { Vercel }] },
    { "icon": Sabilun, "image": [{ Poltek }, { Figma }, { Tailwind }, { Vercel }] },
    { "icon": goHome, "image": [{ Poltek }, { Figma }, { Tailwind }, { Vercel }] },
    { "icon": Gurumu, "image": [{ Poltek }, { Figma }, { Tailwind }, { Vercel }] },
    { "icon": Poltek, "image": [{ Poltek }, { Figma }, { Tailwind }, { Vercel }] },
    { "icon": Poltek, "image": [{ Poltek }, { Figma }, { Tailwind }, { Vercel }, { react }] }
  ])

  const newEdu = edu.map((item, index) => ({
    ...item, ...image[index]
  }))

  const newExperience = experience.map((item, index) => ({
    ...item, ...imageEx[index]
  }))

  const newProject = projects.map((item, index) => ({
    ...item, ...imagePj[index]
  }))

  const linkedIn = "https://www.linkedin.com/in/agung-cahya/";
  const gitHub = "https://github.com/agungcahya122";
  const whatsApp = "https://api.whatsapp.com/send/?phone=089523894186&text&type=phone_number&app_absent=0";
  const instagram = "https://www.instagram.com/agungcahya_di/";

  const changeName = (e: any) => {
    setFullName(e.target.value)
  }
  const changeEmail = (e: any) => {
    setEmail(e.target.value)
  }
  const changeCompany = (e: any) => {
    setCompany(e.target.value)
  }
  const changeMessgae = (e: any) => {
    setMessage(e.target.value)
  }

  useEffect(() => {
    fullName && email && company && message !== "" ? setDisable(false) : setDisable(true)
  }, [fullName, email, company, message])

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setDisable(true)

    if (form.current) {
      emailjs.sendForm(`${import.meta.env.YOUR_SERVICE_ID}`, `${import.meta.env.YOUR_TEMPLATE_ID}`, form.current, `${import.meta.env.YOUR_PUBLIC_KEY}`)
        .then((result) => {
          toast.success("Berhasil mengirimkan email")
          console.log(result.text);
          Array.from(document.querySelectorAll("input")).forEach(
            (input) => (input.value = "")
          );
          Array.from(document.querySelectorAll("textarea")).forEach(
            (textarea) => (textarea.value = "")
          );
        }, (error) => {
          console.log(error.text);
        })
        .finally(() => setDisable(false));
    }
  }

  //pdf download
  const pdfDownload = () => {
    fetch('CV-M Agung Cahya D.pdf')
      .then(response => {
        response.blob()
          .then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let link = document.createElement('a');
            link.href = fileURL;
            link.download = 'CV_M Agung Cahya D.pdf';
            link.click();
          })
      })
  }

  // Animation

  const nameAnimate = {
    offscreen: { opacity: 0, x: 40 },
    onscreen: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  const nameAnimate2 = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }
  }

  const iconAnimate = {
    offscreen: { opacity: 0, x: 30 },
    onscreen: { opacity: 1, x: 0, transiiton: { duration: 0.8, type: "spring", bounce: 0.3 } }
  }

  const iconYAnimate = {
    offscreen: { opacity: 0, y: 30 },
    onscreen: { opacity: 1, y: 0, transiiton: { duration: 0.8, type: "spring", bounce: 0.3 } }
  }

  const circleTopAnimate = {
    offscreen: { x: 0 },
    onscreen: { x: [0, -3, -5, 0], y: [0, 1, 2, 0], transition: { duration: 2, repeat: Infinity, delay: 0.3 } }
  }

  const circleBottomAnimate = {
    offscreen: { x: 0 },
    onscreen: { x: [0, 3, 5, 0], y: [0, -1, -2, 0], transition: { duration: 2, repeat: Infinity, delay: 0.3 } }
  }

  const textAnimate = {
    offscreen: { opacity: 0, y: 20 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 1, type: "spring" } }
  }

  const aboutmeAnimate = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1, transition: { duration: 1 } }
  }

  const educationAnimate = {
    offscreen: { opacity: 0, x: -20 },
    onscreen: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", bounce: 0.4 } }
  }

  const experienceAnimate = {
    offscreen: { opacity: 0, y: -20 },
    onscreen: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.3, delay: 0.4 } }
  }

  return (
    <Layout>
      <Navbar />
      <div className='flex justify-between p-8 2xl:mb-60 lg:mb-60 mb-32'>
        {/* left */}
        <div className='2xl:pl-32 lg:pl-32 md:pl-8 pl-0 relative'>
          <motion.div transition={{ staggerChildren: 0.2 }} initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 0.5 }} className='text-zinc-900 space-y-2'>
            <motion.p variants={nameAnimate} className='font-medium text-[16px]'>Hello I'm</motion.p>
            <motion.p variants={nameAnimate} className='font-semibold text-[20px] text-hijau'>M Agung Cahya D</motion.p>
            <motion.p variants={nameAnimate2} className='2xl:text-[64px] lg:text-[64px] md:text-[64px] text-[48px] tracking-wider font-bold leading-[4rem]'>Frontend <br /> <span className='pl-12'>Engineer</span></motion.p>
            <motion.p variants={nameAnimate} className='text-[16px] w-9/12 pt-2'>Fresh graduate in Program Immersive Frontend Alterra Academy.</motion.p>
          </motion.div>

          <motion.div transition={{ staggerChildren: 0.2, delayChildren: 0.5 }} initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 0.5 }} className='flex gap-4 mb-4 mt-10'>
            <motion.a href={linkedIn} target="_blank" variants={iconAnimate}>
              <FaLinkedinIn size={20} />
            </motion.a>
            <motion.a href={gitHub} target="_blank" variants={iconAnimate}>
              <BsGithub size={20} />
            </motion.a>
            <motion.a href={whatsApp} target="_blank" variants={iconAnimate}>
              <BsWhatsapp size={20} />
            </motion.a>
            <motion.a href={instagram} target="_blank" variants={iconAnimate}>
              <RiInstagramFill size={22} />
            </motion.a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }} viewport={{ once: false, amount: 0.5 }}>
            <CustomButton onClick={pdfDownload} id='btn-cv' size='4/12' label='My Cover Letter' />
          </motion.div>

          <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1, scale: [0.8, 1, 1, 0.8], transition: { duration: 2, delay: 1, repeat: Infinity } }} viewport={{ once: false, amount: 0.5 }} className='absolute 2xl:top-[168px] lg:top-[168px] md:top-[168px] top-[150px] 2xl:right-[135px] lg:right-[135px] md:right-[135px] right-[20px] bg-hijau rounded-full shadow-[0px_0px_20px_12px_rgba(89,123,106,0.8)]'></motion.img>

          <motion.img initial={{ opacity: 0 }} whileInView={{ scale: [0.8, 1, 1, 0.8], opacity: 1, transition: { duration: 2, delay: 0.8 } }} src={Ellpise} alt="ellpise.jpg" className='absolute w-5 2xl:top-40 lg:top-40 md:top-40 top-36 2xl:right-32 lg:right-32 md:right-32 right-3' />

          <motion.div initial={"offscreen"} animate={"onscreen"} className="2xl:flex lg:flex hidden">
            <motion.img variants={circleTopAnimate} src={Circle} alt="circle.jpg" className='absolute w-5 top-10 left-11' />
            <motion.img variants={circleBottomAnimate} src={Circle} alt="circle.jpg" className='absolute w-5 top-12 left-8' />
          </motion.div>

          <motion.div initial={"offscreen"} animate={"onscreen"}>
            <motion.img variants={circleTopAnimate} src={Circle} alt="circle.jpg" className='absolute w-5 bottom-12 right-11' />
            <motion.img variants={circleBottomAnimate} src={Circle} alt="circle.jpg" className='absolute w-5 bottom-10 right-14' />
          </motion.div>

          <div className="2xl:flex lg:flex md:hidden flex ">
            <motion.img animate={{ rotate: [0, 90, 180, 270, 360] }} transition={{ duration: 4, delay: 0.3, repeat: Infinity }} src={Plus} alt="plus.jpg" className='absolute w-4 2xl:-bottom-[70px] lg:-bottom-[70px] bottom-[400px] 2xl:left-14 lg:left-14 left-[310px]' />
            <motion.img animate={{ rotate: [0, 90, 180, 270, 360] }} transition={{ duration: 4, delay: 0.3, repeat: Infinity }} src={Plus} alt="plus.jpg" className='absolute w-4 2xl:-bottom-20 lg:-bottom-20 bottom-[390px] 2xl:left-10 lg:left-10 left-[294px] ' />
            <motion.img animate={{ rotate: [360, 270, 180, 90, 0] }} transition={{ duration: 4, delay: 0.3, repeat: Infinity }} src={Plus} alt="plus.jpg" className='absolute w-4 2xl:-bottom-[90px] lg:-bottom-[90px] bottom-[380px] 2xl:left-14 lg:left-14 left-[310px]' />
          </div>
        </div>

        {/* right */}
        <motion.div viewport={{ once: false, amount: 0.3 }} transition={{ staggerChildren: 0.2, delayChildren: 0.2 }} initial={"offscreen"} whileInView={"onscreen"} className='relative 2xl:flex-1 lg:flex-1 md:flex-1 flex'>
          <motion.img variants={aboutmeAnimate} src={White} alt="green.jpg" className='absolute 2xl:w-6/12 lg:w-6/12 w-11/12 2xl:top-24 lg:top-24 top-20 2xl:left-24 lg:left-24 left-2' />
          <motion.img variants={aboutmeAnimate} src={Green} alt="green.jpg" className='absolute 2xl:w-6/12 lg:w-6/12 w-11/12 2xl:top-[105px] lg:top-[105px] top-[86px] 2xl:left-[105px] lg:left-20 z-10' />
          <motion.img variants={textAnimate} src={Avatar} alt="avatar.jpg" className='absolute 2xl:w-6/12 lg:w-6/12 w-11/12 2xl:top-0 lg:top-2 top-5 2xl:left-24 lg:left-24 left-0 z-10' />
          <motion.img variants={experienceAnimate} src={Overlay} alt="overlay.jpg" className='absolute 2xl:w-6/12 lg:w-7/12 w-11/12 2xl:top-44 lg:top-40 top-[130px] 2xl:left-28 lg:left-24 left-1 z-20' />

          <motion.img animate={{ rotate: [0, 90, 180, 270, 360] }} transition={{ duration: 2, delay: 0.3, repeat: Infinity }} src={Plus} alt="plus.jpg" className='absolute w-4 2xl:top-[50px] lg:top-[50px] top-[60px] 2xl:left-14 lg:left-14 -left-16' />
          <motion.img animate={{ rotate: [360, 180, 90, 180, 360] }} transition={{ duration: 2, delay: 0.3, repeat: Infinity }} src={Plus} alt="plus.jpg" className='absolute w-4 2xl:top-[60px] lg:top-[60px] top-[70px] 2xl:left-10 lg:left-10 -left-12' />
          <motion.img animate={{ rotate: [360, 270, 180, 90, 0] }} transition={{ duration: 2, delay: 0.3, repeat: Infinity }} src={Plus} alt="plus.jpg" className='absolute w-4 2xl:top-[70px] lg:top-[70px] top-[80px] 2x:left-14 lg:left-14 -left-16' />

          <motion.img initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: square ? 1 : 3, repeat: Infinity }} onClick={() => { setSquare(!square) }} src={Rectangle} alt="square.jpg" className='absolute 2xl:flex lg:flex hidden w-7 -bottom-36 left-14 hover:cursor-pointer' />

          <motion.img animate={{ rotate: [0, 360] }} transition={{ duration: 3, delay: 0.3, repeat: Infinity }} src={Rectangle} alt="square.jpg" className='absolute 2xl:flex lg:flex hidden w-7 top-16 right-28' />

          <motion.img animate={{ opacity: [0, 0.3, 0.6, 1, 0.6, 0.3, 0] }} transition={{ duration: 4, delay: 0.3, repeat: Infinity }} src={Slash} alt="slash.jpg" className='absolute w-16 2xl:-bottom-20 lg:-bottom-20 bottom-0 right-28' />
        </motion.div>
      </div>

      {/* About Me */}

      <motion.div transition={{ staggerChildren: 0.3 }} initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 0.3 }} className="relative">
        <motion.h1 variants={textAnimate} className="flex justify-center items-center gap-1 text-[32px] text-zinc-900 font-bold">About me <FaCircle size={10} className='text-hijau mt-4' /></motion.h1>
        <motion.p variants={textAnimate} className="2xl:mt-10 lg:mt-10 md:mt-10 mt-5 mx-auto 2xl:w-7/12 lg:w-7/12 md:w-8/12 w-10/12 text-center">{Aboutme.data}</motion.p>

        <motion.div initial={"offscreen"} whileInView={"onscreen"} className="2xl:flex lg:flex md:flex hidden">
          <motion.div variants={aboutmeAnimate} className="w-2 h-2 rounded-full bg-hijau absolute top-[150px] left-10"></motion.div>
          <motion.div variants={aboutmeAnimate} className="w-2 h-2 rounded-full bg-hijau absolute top-[180px] left-10"></motion.div>
          <motion.div variants={aboutmeAnimate} className="w-2 h-2 rounded-full bg-hijau absolute top-[210px] left-10"></motion.div>
          <motion.div variants={aboutmeAnimate} className="w-2 h-2 rounded-full bg-hijau absolute top-[240px] left-10"></motion.div>
          <motion.div variants={aboutmeAnimate} className="w-2 h-2 rounded-full bg-hijau absolute top-[270px] left-10"></motion.div>
          <motion.div variants={aboutmeAnimate} className="w-2 h-2 rounded-full bg-hijau absolute top-[300px] left-10"></motion.div>

          <motion.div variants={aboutmeAnimate} className="w-2 h-2 rounded-full bg-hijau absolute top-[150px] left-16"></motion.div>
          <motion.div variants={aboutmeAnimate} className="w-2 h-2 rounded-full bg-hijau absolute top-[180px] left-16"></motion.div>
          <motion.div variants={aboutmeAnimate} className="w-2 h-2 rounded-full bg-hijau absolute top-[210px] left-16"></motion.div>
          <motion.div variants={aboutmeAnimate} className="w-2 h-2 rounded-full bg-hijau absolute top-[240px] left-16"></motion.div>
          <motion.div variants={aboutmeAnimate} className="w-2 h-2 rounded-full bg-hijau absolute top-[270px] left-16"></motion.div>
          <motion.div variants={aboutmeAnimate} className="w-2 h-2 rounded-full bg-hijau absolute top-[300px] left-16"></motion.div>
        </motion.div>
      </motion.div>

      {/* Education */}

      <motion.div transition={{ staggerChildren: 0.3 }} initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 0.2 }} className="relative 2xl:mt-40 lg:mt-40 md:mt-40 mt-28">
        <motion.h1 variants={textAnimate} className="flex justify-center items-center gap-1 text-[32px] text-zinc-900 font-bold">Education <FaCircle size={10} className='text-hijau mt-4' /></motion.h1>
        {newEdu.map((data, index) => (
          <motion.div transition={{ staggerChildren: 0.3 }} viewport={{ once: false, amount: 0.2 }} initial={"offscreen"} whileInView={"onscreen"} className="mt-10 2xl:mx-auto lg:mx-auto md:mx-auto mx-14 flex 2xl:flex-row lg:flex-row md:flex-row flex-col justify-center 2xl:gap-10 lg:gap-10 md:gap-6 gap-5 mb-10">
            <>
              <motion.div variants={educationAnimate} key={index} className="2xl:w-2/12 lg:w-2/12 md:w-3/12 text-[16px]">
                <img src={data.image} alt="alta.jpg" className="2xl:w-8/12 lg:w-8/12 md:w-7/12 w-6/12" />
                <p className="TextShadow mt-4 text-hijau font-semibold">{data.learn}</p>
                <p className="-mt-1 text-zinc-900 TextShadow">{data.date}</p>
              </motion.div>
              <motion.div variants={educationAnimate} className="2xl:w-6/12 lg:w-6/12 md:w-7/12 w-11/12 text-[16px]">
                {data.content} <br className="mb-4" /> {data.score}
              </motion.div>
            </>
          </motion.div>
        ))}
      </motion.div>

      {/* Experience */}

      <motion.div initial={"offscreen"} whileInView={"onscreen"} viewport={{ once: false, amount: 0.2 }} className="mt-24 px-16">
        <motion.h1 variants={textAnimate} className="flex justify-center items-center gap-1 text-[32px] text-zinc-900 font-bold">Experience <FaCircle size={10} className='text-hijau mt-4' /></motion.h1>

        <motion.div variants={experienceAnimate} className="flex flex-wrap justify-center gap-10 mt-14">
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
        </motion.div>
      </motion.div>

      {/* My Project */}

      <motion.div transition={{ staggerChildren: 0.2 }} viewport={{ once: false, amount: 0.2 }} initial={"offscreen"} whileInView={"onscreen"} className="mt-24 px-16">
        <motion.h1 variants={textAnimate} className="text-center text-[28px] text-zinc-900">My Regular Updated</motion.h1>
        <motion.h1 variants={textAnimate} className="flex justify-center items-center gap-1 text-[32px] text-hijau font-semibold">Project <FaCircle size={10} className='text-hijau mt-4' /></motion.h1>

        <motion.div transition={{ staggerChildren: 0.3 }} viewport={{ once: false, amount: 0.2 }} initial={"offscreen"} whileInView={"onscreen"} className="flex flex-wrap justify-center gap-10 mt-14">
          {newProject.map((item) => (
            <CardDetail
              id={item.id}
              image={item.icon}
              content={item.description}
              position={item.title}
              cek={educationAnimate}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Contact Feature */}

      <motion.div transition={{ staggerChildren: 0.3 }} viewport={{ once: false, amount: 0.1 }} initial={"offscreen"} whileInView={"onscreen"} className="mt-24 2xl:px-16 lg:px-16 md:px-16 px-0">
        <motion.h1 variants={textAnimate} className="flex justify-center items-center gap-1 text-[38px] text-hijau font-semibold">Contact <FaCircle size={10} className='text-hijau mt-4 tracking-widest' /></motion.h1>

        <motion.p variants={nameAnimate2} className="text-center text-[16px] text-zinc-900 2xl:w-7/12 lg:w-7/12 md:w-10/12 w-11/12 mx-auto">I am still new to the technologi information, but I will try my best to fulfil the tasks and responsibilities assigned to me, and always learn things that I don't understand so that I can continue to grow.</motion.p>

        <motion.p variants={nameAnimate} className="text-[16px] text-zinc-900 font-semibold text-center mt-16">fill in the form to send an email</motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 0.4 } }} className="relative">
          <form ref={form} onSubmit={sendEmail}>
            <CustomInput
              id="input-email"
              name="user_email"
              type="email"
              placeholder="Email"
              width="2xl:w-7/12 lg:w-7/12 md:w-9/12 w-10/12 "
              onChange={changeName}
            />
            <CustomInput
              id="input-name"
              name="user_fullname"
              type="text"
              placeholder="Full Name"
              width="2xl:w-7/12 lg:w-7/12 md:w-9/12 w-10/12"
              onChange={changeEmail}
            />
            <CustomInput
              id="input-company"
              name="user_company"
              type="text"
              placeholder="Company Name"
              width="2xl:w-7/12 lg:w-7/12 md:w-9/12 w-10/12"
              onChange={changeCompany}
            />

            <div className="mt-8 text-center">
              <textarea
                id="input-message"
                name="message"
                typeof="text"
                placeholder="Your Message"
                className="2xl:w-7/12 lg:w-7/12 md:w-9/12 w-10/12 max-w-full bg-[#D9D9D9] border-none rounded-lg h-36 py-4"
                onChange={changeMessgae}
              />
            </div>

            <motion.div className="mt-10 text-center">
              <CustomButton
                id="btn-send"
                label="Send Message"
                size="7/12"
                loading={disable}
              />

              <ToastContainer />
            </motion.div>
          </form>

          <motion.div initial={"offscreen"} whileInView={"onscreen"} transition={{ staggerChildren: 0.3, delayChildren: 0.3 }} className='absolute top-0 2xl:right-28 lg:right-28 right-0 2xl:flex lg:flex md:flex hidden flex-col gap-10 mb-4 mt-10'>
            <motion.a href={linkedIn} target="_blank" variants={iconYAnimate} >
              <FaLinkedinIn size={20} />
            </motion.a>
            <motion.a href={gitHub} target="_blank" variants={iconYAnimate}>
              <BsGithub size={20} />
            </motion.a>
            <motion.a href={whatsApp} target="_blank" variants={iconYAnimate}>
              <BsWhatsapp size={20} />
            </motion.a>
            <motion.a href={instagram} variants={iconYAnimate}>
              <RiInstagramFill size={22} />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Tech Stack */}

      <motion.div transition={{ staggerChildren: 0.2 }} viewport={{ once: false, amount: 0.2 }} initial={"offscreen"} whileInView={"onscreen"} className="relative mt-32">
        <motion.h1 variants={textAnimate} className="flex justify-center items-center gap-1 text-[32px] text-zinc-900 font-semibold ">Technology Stack <FaCircle size={10} className='text-hijau mt-4' /></motion.h1>

        <motion.p variants={nameAnimate} className="text-center">Some of the technologies or frameworks that I use to complete some of my projects</motion.p>
        <motion.div transition={{ staggerChildren: 0.1 }} initial={"offscreen"} whileInView={"onscreen"} className="flex flex-row flex-wrap gap-10 justify-center mt-10 px-32">
          <motion.div variants={aboutmeAnimate} className="w-44">
            <img src={react} alt="react.png" />
          </motion.div>
          <motion.div variants={aboutmeAnimate} className="w-40 -mt-4">
            <img src={Figma} alt="react.png" />
          </motion.div>
          <motion.div variants={aboutmeAnimate} className="w-64 -mt-10">
            <img src={Tailwind} alt="react.png" />
          </motion.div>
          <motion.div variants={aboutmeAnimate} className="w-52 -mt-12 -z-40">
            <img src={Vercel} alt="react.png" />
          </motion.div>
          <motion.div variants={aboutmeAnimate} className="w-40">
            <img src={Dribble} alt="react.png" />
          </motion.div>
          <motion.div variants={aboutmeAnimate} className="w-40">
            <img src={Google} alt="react.png" />
          </motion.div>
          <motion.div variants={aboutmeAnimate} className="w-40 -mt-1">
            <img src={Behance} alt="react.png" />
          </motion.div>
        </motion.div>
        <motion.p variants={aboutmeAnimate} className="text-zinc-900 text-center py-16">© May, 2023 - 03 with Love</motion.p>
      </motion.div>
    </Layout >
  )
}

export default App
