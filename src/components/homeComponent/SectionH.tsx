import { CustomButton } from "../shared";
import { Forwardarrow } from "../svg";


export default function EightSection() {
    return (
        <div className=" text-[#F0F2FF] bg-[#37137F] relative z-10 !font-bold gap-10 w-full flex flex-row-reverse justify-center py-24 " >
            <div className=" w-[350px] relative " >
                <img alt="one" src="/images/6.png" className=" absolute top-0 z-0 " />
            </div>
            <div className=" max-w-[500px] flex flex-col gap-3 " >
                <p className=" text-[64px] leading-[64px] font-black " >AN APP <br /> ON A MISSION! </p>
                <p className=" text-2xl ">No longer do you have to jump from app to app. Hiroek is your one stop destination which makes it easier to give, connect,  create and discover events. Providing you with tools to support causes close to your heart. It encourages giving through creative expression.</p>
                <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
            </div>
        </div>
    )
}