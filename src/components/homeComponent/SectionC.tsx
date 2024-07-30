import { CustomButton } from "../shared";
import { Forwardarrow } from "../svg";


export default function ThirdSection() {
    return (
        <div className=" bg-[#F0F2FF] text-[#37137F] !font-bold gap-10 rounded-t-[120px] w-full flex justify-center pt-24 pb-20 " >
            <div className=" w-[300px] relative " >
                <img alt="one" src="/images/1.png" className=" absolute top-0 " />
            </div>
            <div className=" max-w-[544px] flex flex-col gap-3 " >
                <p className=" text-[64px] leading-[64px] font-black " >Effortless <br/> Event Creation</p>
                <p className=" text-2xl " >With Hiroek, planning and organising events is streamlined and intuitive, saving you valuable time and reducing the hassle of Event management.</p>
                <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
            </div>
        </div>
    )
}
