
import { CustomButton } from '../shared'
import { Forwardarrow } from '../svg'

export default function NinethSection() {
    return (
        <div className=' py-20 px-6 w-full flex flex-col items-center gap-4 font-bold relative z-10  text-white ' >
            <p className=" text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] relative z-20 text-center " >GOOD ON THE MOOOOVE!</p>
            <p className=' xl:text-2xl lg:max-w[485px] relative z-20 text-center ' >Discover the unique features of Hiroek. <br/> It's a community for good in your pocket</p>
            <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white !relative !z-20 font-bold !w-fit !shadow-lg " icon={
                <Forwardarrow />
            } />
            <img alt="discover" src="/images/discover.jpeg" className=" object-cover inset-0 z-0 absolute object-top  w-full h-full " />
            <div className=' absolute z-10 bg-black bg-opacity-75 inset-0 ' />
        </div>
    )
}
