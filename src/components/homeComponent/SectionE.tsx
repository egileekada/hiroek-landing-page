import CustomButton from "../shared/customButton";
import { Forwardarrow } from "../svg";


export default function FifthSection() {
    return (
        <div className=" bg-[#F0F2FF] text-[#37137F] relative z-10 !font-bold px-6 gap-10 w-full flex lg:flex-row flex-col justify-center py-24 " >
            <div className=" lg:w-[400px] relative z-10 lg:block flex justify-center  " >
                <img alt="one" src="/images/3.png" className=" lg:absolute top-0 lg:w-auto w-full " />
            </div>
            <div className=" lg:max-w-[500px] relative z-10 flex flex-col gap-3 " >
                <p className=" text-3xl lg:text-[50px] lg:leading-[55px] font-black " >Discover <br /> your tribe!</p>
                <p className=" lg:text-2xl text-[#424242] font-axiformamedium " >Hiroek makes inviting and connecting with your friends easy. Incorporated messaging and interaction features ensuring you remain connected to your existing network on and offline.</p>
                <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
            </div>
            <img alt="whitestroke" src="/images/whitestroke.png" className=" object-cover inset-0 absolute h-full w-full opacity-5 " />
            
        </div>
    )
} 