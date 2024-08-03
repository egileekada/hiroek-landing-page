import { CustomButton } from "../shared";
import { Forwardarrow } from "../svg";


export default function SixthSection() {
    return (
        <div className=" text-[#F0F2FF] relative z-10 !font-bold gap-10 w-full px-4 flex flex-col lg:flex-row-reverse justify-center py-24 " >
            <div className=" lg:w-[350px] relative z-10 lg:block flex justify-center  " >
                <img alt="one" src="/images/4.png" className=" lg:absolute top-0 z-0  " />
            </div>
            <div className=" max-w-[500px] relative z-10 flex flex-col gap-3 " >
                <p className=" text-3xl lg:text-[50px] lg:leading-[55px] font-black " >SUPPORT <br /> CAUSES <br /> SEAMLESSLY </p>
                <p className=" lg:text-2xl font-axiformamedium "> Advocate for and support your favourite causes with ease, integrating them into your events without additional steps, making the process as smooth and efficient as possible.</p>
                <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
            </div>
            <img alt="bluestroke" src="/images/bluestroke.png" className=" object-cover inset-0 z-[2] absolute opacity-[0.03] w-full h-full " />
            <div className=" w-full absolute inset-0" >
                <img alt="bg1" src="/images/bg1.png" className=" object-cover opacity-10 h-full w-full " />
            </div>
            <div className=" absolute inset-0 z-[1] bg-primary " />
        </div>
    )
}
