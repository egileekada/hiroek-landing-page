import { CustomButton } from '../shared'
import { Forwardarrow } from '../svg'

export default function FortySection() {
    return (
        <div className=' text-[#F0F2FF] !font-bold gap-10 rounded-t-[#F0F2FF] w-full flex justify-center py-24  ' >
            <div className=' max-w-[508px] flex flex-col gap-3 ' >
                <p className=' max-w-[403px] text-[64px] leading-[64px] font-black ' >Instant Community Building</p>
                <p className=' text-2xl font-axiformamedium ' >Quickly connect with like-minded individuals and build your community without the usual complexities, allowing you to focus on what truly matters.</p>
                <CustomButton  text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
            </div>
            <div className=' relative w-[500px] ' >
                <img alt='two' src='/images/2.png' className=' absolute top-0 ' />
            </div>
        </div>
    )
}
