
import { CustomButton } from '../shared'
import { Forwardarrow } from '../svg'

export default function NinethSection() {
    return (
        <div className=' py-20 px-6 w-full  flex flex-col items-center gap-4 font-bold relative z-10 bg-[#37137F] text-white ' >
            <p className=" text-3xl lg:text-[80px] text-center lg:leading-[84px] " >GOOD ON THE MOOOOVE!</p>
            <p className=' lg:text-2xl lg:max-w[485px] text-center ' >Discover the unique features of Hiroek. <br/> It's a community for good in your pocket</p>
            <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white font-bold !w-fit !shadow-lg " icon={
                <Forwardarrow />
            } />
        </div>
    )
}
