import { CustomButton } from '../shared'
import { Forwardarrow } from '../svg'

export default function FortySection() {
    return (
        <div className=' text-[#F0F2FF] !font-bold gap-10 relative rounded-t-[#F0F2FF] w-full flex lg:flex-row flex-col-reverse justify-center py-24 px-6  ' >
            <div className=' max-w-[508px] relative z-10 flex flex-col gap-3 ' >
                <p className=' max-w-[403px] text-3xl lg:text-[50px] lg:leading-[55px] font-black ' >Instant Community Building</p>
                <p className=' lg:text-2xl font-axiformamedium ' >Quickly connect with like-minded individuals and build your community without the usual complexities, allowing you to focus on what truly matters.</p>
                <CustomButton  text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
            </div>
            <div className=' lg:w-[500px] relative z-10 lg:block flex justify-center ' >
                <img alt='two' src='/images/2.png' className=' lg:absolute top-0 ' />
            </div>
            <img alt="bluestroke" src="/images/bluestroke.png" className=" object-cover inset-0 z-0 absolute opacity-5 w-full h-full " />
            <img alt="ellipse2" src="/images/right.png" className=" object-cover lg:w-auto w-[100px]  top-24 z-10 left-0 absolute " />
            <img alt="ellipse2" src="/images/left.png" className=" object-cover lg:w-auto w-[100px]  -bottom-[40%] z-20 right-0 absolute " />
        </div>
    )
}
