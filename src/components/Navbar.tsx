import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, type: "spring" }} className="navbar bg-base-100 py-5 sticky top-0 z-50 ">
      <div className="navbar-start">
      </div>
      <div className="navbar-center flex">
        <ul className="flex justify-center gap-9 font-medium text-zinc-900 text-[18px] hover:cursor-pointer">
          <li className=" hover:text-hijau"><a>Aboutme</a></li>
          <li className=" hover:text-hijau">
            <a>Projects</a>
          </li>
          <li className=" hover:text-hijau"><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
      </div>
    </motion.div>
  )
}

export default Navbar
