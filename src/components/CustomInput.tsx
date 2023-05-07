import { FC, InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  placeholder: string;
  width: string;
  type: string;
}

const CustomInput: FC<InputProps> = ({ id, placeholder, width, type, ...props }) => {
  return (
    <div className="text-center mt-8">
      <input id={id} type={type} placeholder={placeholder} className={`input w-${width} max-w-full bg-[#D9D9D9]`} {...props} />
    </div>
  )
}

export default CustomInput
