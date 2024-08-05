import { CustomButton } from "../shared";
import { Forwardarrow } from "../svg";


export default function ThirdSection() {
    return (
        <div className=" bg-[#F0F2FF] relative text-[#37137F] !font-bold gap-10 rounded-t-3xl lg:rounded-t-[120px] w-full flex px-6 lg:flex-row flex-col justify-center pt-24 " >
            <div className=" lg:w-[350px] relative z-10 lg:block flex justify-center " >
                <img alt="one" src="/images/1.png" className="  " />
            </div>
            <div className=" max-w-[544px] relative z-10 flex flex-col gap-3 pb-28  " >
                <p className=" text-3xl lg:text-[50px] lg:leading-[55px] font-black " >Effortless <br/> Event Creation</p>
                <p className=" lg:text-2xl text-[#424242] font-axiformamedium " >With Hiroek, planning and organising events is streamlined and intuitive, saving you valuable time and reducing the hassle of Event management.</p>
                <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
            </div>

            <img alt="whitestroke" src="/images/whitestroke.png" className=" object-cover inset-0 absolute h-full w-full opacity-5 " />
        </div>
    )
}
