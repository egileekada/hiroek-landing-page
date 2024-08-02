
import { CustomButton } from '../shared'
import { Forwardarrow } from '../svg'

export default function SectionB() {
    return ( 
        <div className=' py-20 w-full px-6 flex flex-col items-center gap-4 font-bold relative z-10 bg-secondary text-primary ' >
            <p className=" text-3xl lg:text-[80px] lg:leading-[84px] " >HOW TO GET STARTED</p>
            <p className=' text-lg lg:text-2xl lg:max-w[485px] text-center ' >Create your event profile and start connecting with your audience. <br/> For any questions or additional information, feel free to reach out to us at [ADD SUPPORT EMAIL].</p>
            <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white font-bold !w-fit !shadow-lg " icon={
                <Forwardarrow />
            } />
        </div>
    )
}
