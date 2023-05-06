import { FC, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label: string;
  size: string;
  loading?: boolean;
}

const CustomButton: FC<ButtonProps> = ({ id, label, size, loading, ...props }) => {
  return (
    <button id={id} disabled={loading} className={`rounded-md bg-hijau max-w-full w-${size} px-4 py-2 text-[16px] font-medium text-zinc-50 disabled:cursor-not-allowed disabled:bg-zinc-400 shadow-[6px_12px_24px_-1px_rgba(100,100,100,0.8)] ${loading} `} {...props}>
      {label}
    </button>
  )
}

export default CustomButton
