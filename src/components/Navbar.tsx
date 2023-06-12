import { motion } from "framer-motion"
import { useState } from "react"
import { Link } from 'react-scroll'

const Navbar = () => {

  const [bgNavbar, setBgNavbar] = useState<boolean>(false)
  const [position, setPosition] = useState<string>("")

  const styleNav = () => {
    // console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setBgNavbar(true)
    } else {
      setBgNavbar(false)
    }
  }

  window.addEventListener('scroll', styleNav)

  // console.log(bgNavbar)
  console.log(position)

  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1, type: "spring" }} className={bgNavbar ? 'navbar bg-base-100 shadow-[0px_1px_8px_0px_rgba(0,0,0,0.25)] transition py-5 fixed top-0 z-50' : 'navbar bg-base-100 py-5 fixed top-0 z-50 transition '}>
      <div className="navbar-start">
      </div>
      <div className="navbar-center flex">
        <ul className="flex justify-center gap-9 font-medium text-zinc-900 text-[18px] hover:cursor-pointer">
          <li className={position === "aboutme" ? "text-blue-100" : "hover:text-hijau"}><Link onClick={() => setPosition("aboutme")} to="aboutme" spy={true} smooth={true} offset={-80} duration={800} >About me</Link></li>
          <li className={position === "projects" ? "text-hijau" : "hover:text-hijau"}><Link onClick={() => setPosition("projects")} to="projects" spy={true} smooth={true} offset={-80} duration={800} >Projects</Link></li>
          <li className={position === "contact" ? "text-hijau" : "hover:text-hijau"}><Link onClick={() => setPosition("contact")} to="contact" spy={true} smooth={true} offset={-80} duration={800}>Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
      </div>
    </motion.div>
  )
}

export default Navbar
