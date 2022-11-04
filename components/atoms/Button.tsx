import plus from 'assets/plus.png'
import plusWhite from 'assets/plus-white.png'
import eyeGray from 'assets/eye-gray.png'
import minus from 'assets/minus.png'
import check from 'assets/check.png'

import Image from "next/image";

type Props = {
    type: string,
    children: string,
    checked?: boolean,
    click?: any
    action?: "button" | "submit" | "reset"
};

const types: {[key:string]: string} = {
    primary: 'relative bg-[#5aac44] text-white rounded-[3px] text-[14px] leading-[34px] font-arial px-3 outline-none h-[32px] hover:bg-[#61bd4f]',
    secondary: 'relative bg-transparent text-[#616161] rounded-[3px] text-sm font-arial w-full text-left flex items-center h-[30px] px-[16px] gap-2 hover:bg-[#091e4214]',
    tertiary: 'relative bg-transparent text-white rounded-[3px] text-sm font-arial text-left flex items-center px-[16px] gap-2 hover:bg-transparent h-[40px] leading-[32px] w-[272px]',
    follow: 'relative bg-[#091e420a] text-[#313131] rounded-[3px] text-sm font-arial text-left flex items-center px-[4px] hover:bg-[#091e4214] w-full hover:text-black leading-[32px] pl-[13px] pr-[4px] gap-[3px]',
    delete: 'relative bg-[#091e420a] text-[#313131] rounded-[3px] text-sm font-arial text-left flex items-center px-[4px] hover:bg-[#091e4214] w-full hover:text-black leading-[32px] pl-[13px] pr-[4px] gap-[3px]'
}

const Button = ({children, type, checked, click, action}: Props) => (
    <button onClick={click} type={action ?? 'button'} className={types[type]}>
        {type === 'secondary' && <Image src={plus} alt="plus"/>}
        {type === 'tertiary' && <Image src={plusWhite} alt="plus"/>}
        {type === 'follow' && <Image src={eyeGray} alt="eye"/>}
        {type === 'delete' && <Image src={minus} alt="minus"/>        }

        {children}

        {checked && <Image src={check} alt="check" className="absolute right-1"/>}
    </button>
);

export default Button