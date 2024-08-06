import { CustomButton } from "../shared";
import { Forwardarrow } from "../svg";


export default function EightSection() {
    return (
        <div className=" text-[#F0F2FF] bg-[#37137F] relative z-10 overflow-y-hidden lg:px-6 !font-bold gap-10 w-full flex flex-col lg:flex-row-reverse justify-center lg:items-start items-center pt-20 pb-0 lg:py-24 " >
            <div className=" lg:w-[350px] w-[60%] relative z-10 lg:h-auto md:h-[500px] h-[250px] lg:block flex justify-center  " >
                <img alt="one" src="/images/6.png" className=" absolute top-0 " />
            </div>
            <div className=" lg:max-w-[500px] relative z-10 flex lg:px-0 px-6 bg-primary pt-4 lg:h-auto h-[400px] flex-col gap-3 " >
                <p className=" text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black " >AN APP <br /> ON A MISSION! </p>
                <p className=" xl:text-2xl font-axiformamedium ">No longer do you have to jump from app to app. Hiroek is your one stop destination which makes it easier to give, connect,  create and discover events. Providing you with tools to support causes close to your heart. It encourages giving through creative expression.</p>
                <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
            </div>
            <img alt="bluestroke" src="/images/bluestroke.png" className=" object-cover inset-0 z-0 absolute opacity-5 w-full h-full " />
        </div>
    )
}