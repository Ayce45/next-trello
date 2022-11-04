import eye from 'assets/eye.png'
import paragraph from 'assets/paragraph.png'
import Image from "next/image";

type Props = {
    title: string,
    list: string,
    description?: string,
    follow: boolean,
};

const Card = ({title, list, description, follow}: Props) => (
    <button className="shadow-[rgb(9_30_66_/_25%)_0px_1px_0px] h-auto bg-white rounded-[3px] hover:bg-transparent">
        <div className="flex font-sm leading-[20px] h-[32px] m-0 px-[8px] items-center text-[#313131] font-arial w-full">{title}</div>

        {(follow || description) &&
            <div className="px-[13px] pt-[2px] h-[22px] flex items-start gap-[10px]">
                {follow &&
                    <Image src={eye} alt="eye"/>
                }
                {description &&
                    <Image src={paragraph} alt="paragraph" className="pt-[1px]"/>
                }
            </div>
        }
    </button>
);

export default Card