import { useState } from "react";
// import { CustomButton } from "../shared";
// import { Forwardarrow } from "../svg";
import GetInTouch from "../shared/GetInTouch";


export default function SectionD() {

    const [open, setOpen] = useState(false)

    return (
        <div className=" w-full py-14 px-6 lg:px-12 text-center gap-6 flex relative flex-col items-center text-primary bg-secondary " >
            <p className=" italic text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] relative z-10" >Hiroek is more than an app!</p>
            {/* <div className=" w-fit relative z-10 lg:h-[56px] bg-orangecolor px-7 rounded-3xl py-2 lg:py-0 lg:rounded-full text-white text-xl italic flex justify-center items-center " >
                {`it's a community-driven platform where intentions turn into actions.`}
            </div> */}
            <p className=" relative z-10 text-[28px] leading-[42px] font-axiformamedium italic max-w-[1000px] " >
            We help you carve out a space in real life where your community members feel they belong.
            </p>
            <GetInTouch open={open} setOpen={setOpen} activatebtn={true} />
            {/* <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80", background: "linear-gradient(180deg, #8C43FE 0%, #37137F 81%)" }} text="Activate your account" size={"4"} type="button" className="  cursor-pointer lg:ml-auto !text-white font-bold !w-fit !shadow-lg " icon={
                                        <Forwardarrow />
                                    } /> */}
            <img alt="whitestroke" src="/images/whitestroke.png" className=" object-cover inset-0 absolute opacity-5 w-full h-full " />
        </div>
    )
}
