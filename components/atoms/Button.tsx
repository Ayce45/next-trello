import plus from 'assets/plus.png'
import plusWhite from 'assets/plus-white.png'
import Image from "next/image";

type Props = {
    type: string,
    children: string,
};

const types: {[key:string]: string} = {
    primary: 'bg-[#5aac44] text-white rounded-[3px] text-[14px] leading-[34px] font-arial px-3 outline-none h-[32px] hover:bg-[#61bd4f]',
    secondary: 'bg-transparent text-[#616161] rounded-[3px] text-sm font-arial w-full text-left flex items-center h-[30px] px-[16px] gap-2 hover:bg-[#091e4214]',
    tertiary: 'bg-transparent text-white rounded-[3px] text-sm font-arial text-left flex items-center px-[16px] gap-2 hover:bg-transparent h-[40px] leading-[32px] w-[272px]'
}

const Button = ({children, type}: Props) => (
    <button className={types[type]}>
        {type === 'secondary' &&
            <Image src={plus} alt="plus"/>
        }
        {type === 'tertiary' &&
            <Image src={plusWhite} alt="plus"/>
        }
        {children}
    </button>
);

export default Button