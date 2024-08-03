
import { CustomButton } from '../shared'
import { Forwardarrow } from '../svg'

export default function SeventhSection() {
    return (
        <div className=" bg-[#F0F2FF] text-[#37137F] relative z-10 !font-bold gap-10 w-full flex lg:flex-row flex-col px-6 justify-center pt-24 pb-28 " >
            <div className=" lg:w-[300px] relative z-10 lg:block flex justify-center " >
                <img alt="one" src="/images/5.png" className=" lg:absolute top-0 z-0 " />
            </div>
            <div className=" lg:max-w-[500px] relative z-10 flex flex-col gap-3 " >
                <p className=" text-3xl lg:text-[50px] lg:leading-[55px] font-black " >SMART <br /> PROFILE</p>
                <p className=" lg:text-2xl text-[#424242] font-axiformamedium " >create and support donations for up to 5 charitable causes at once.</p>
                <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
            </div>
            <img alt="whitestroke" src="/images/whitestroke.png" className=" object-cover inset-0 absolute h-full w-full opacity-5 " />
            <img alt="ellipse2" src="/images/left.png" className=" object-cover lg:w-auto w-[100px] -top-[40%] z-30 right-0 absolute " />
        </div>
    )
}
