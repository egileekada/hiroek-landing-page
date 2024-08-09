
import { CustomButton } from '../shared'
import { Forwardarrow } from '../svg'

export default function SectionB() {
    return ( 
        <div style={{boxShadow: "0px -15px 30px 0px #37137F26"}} className=' py-20 w-full px-6 flex flex-col items-center gap-4 font-bold relative z-10 bg-secondary text-primary ' >
            <p className=" text-3xl lg:text-[60px] lg:leading-[64px] relative z-10 " >HOW TO GET STARTED</p>
            <p className=' text-lg lg:text-2xl lg:max-w[485px] text-center relative z-10' >Create your event profile and start connecting with your audience. <br/> For any questions or additional information, feel free to reach out to us at <a href="mailto:someone@example.com">info@hiroek.io</a></p>
            <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !relative !z-10 !text-white font-bold !w-fit !shadow-lg " icon={
                <Forwardarrow />
            } />
            <img alt="whitestroke" src="/images/whitestroke.png" className=" object-cover inset-0 absolute opacity-5 w-full h-full " />
        </div>
    )
}
