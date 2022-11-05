import plus from 'assets/plus.png';
import plusWhite from 'assets/plus-white.png';
import eyeGray from 'assets/eye-gray.png';
import minus from 'assets/minus.png';
import check from 'assets/check.png';

import Image from 'next/image';

type Props = {
  id: string;
  type: string;
  children: string;
  checked?: boolean;
  click?: any;
  action?: 'button' | 'submit' | 'reset';
};

const types: { [key: string]: string } = {
  primary:
    'font-arial relative h-[32px] rounded-[3px] bg-[#5aac44] px-3 text-[14px] leading-[34px] text-white outline-none hover:bg-[#61bd4f]',
  secondary:
    'font-arial relative flex h-[30px] w-full items-center gap-2 rounded-[3px] bg-transparent px-[16px] text-left text-sm text-[#616161] hover:bg-[#091e4214]',
  tertiary:
    'font-arial relative flex h-[40px] w-[272px] items-center gap-2 rounded-[3px] bg-transparent px-[16px] text-left text-sm leading-[32px] text-white hover:bg-transparent',
  follow:
    'font-arial relative flex w-full items-center gap-[3px] rounded-[3px] bg-[#091e420a] px-[4px] pl-[13px] pr-[4px] text-left text-sm leading-[32px] text-[#313131] hover:bg-[#091e4214] hover:text-black',
  delete:
    'font-arial relative flex w-full items-center gap-[3px] rounded-[3px] bg-[#091e420a] px-[4px] pl-[13px] pr-[4px] text-left text-sm leading-[32px] text-[#313131] hover:bg-[#091e4214] hover:text-black',
};

const Button = ({ id, children, type, checked, click, action }: Props) => (
  <button
    id={id}
    onClick={click}
    type={action ?? 'button'}
    className={types[type]}
  >
    {type === 'secondary' && <Image src={plus} alt="plus" />}
    {type === 'tertiary' && <Image src={plusWhite} alt="plus" />}
    {type === 'follow' && <Image src={eyeGray} alt="eye" />}
    {type === 'delete' && <Image src={minus} alt="minus" />}

    {children}

    {checked && (
      <div className="absolute right-1 flex items-center justify-center">
        <Image src={check} alt="check" />
      </div>
    )}
  </button>
);

export default Button;
