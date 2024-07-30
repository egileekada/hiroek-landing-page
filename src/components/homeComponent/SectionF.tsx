import { CustomButton } from "../shared";
import { Forwardarrow } from "../svg";


export default function SixthSection() {
    return (
        <div className=" text-[#F0F2FF] bg-[#37137F] relative z-10 !font-bold gap-10 w-full flex flex-row-reverse justify-center py-24 " >
            <div className=" w-[350px] relative " >
                <img alt="one" src="/images/4.png" className=" absolute top-0 z-0 " />
            </div>
            <div className=" max-w-[500px] flex flex-col gap-3 " >
                <p className=" text-[64px] leading-[64px] font-black " >SUPPORT <br /> CAUSES <br /> SEAMLESSLY </p>
                <p className=" text-2xl "> Advocate for and support your favourite causes with ease, integrating them into your events without additional steps, making the process as smooth and efficient as possible.</p>
                <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
            </div>
        </div>
    )
}
