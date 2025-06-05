
// import { CustomButton } from '../shared'
// import { Forwardarrow } from '../svg'

import { useState } from "react";
import { CustomButton } from "../shared"; 
import { Forwardarrow, Forwardarrowcolored } from "../svg";
import GetInTouch from "../shared/GetInTouch";

export default function NinethSection({ charity } : {charity?: boolean}) {

    const [ open, setOpen ] = useState(false)

    return (
        <> 
        {!charity && (
            <div className=' py-36 px-6 w-full flex flex-col items-center gap-4 font-bold relative z-10  text-white ' >
                <p className=" text-3xl xl:text-[80px] font-black lg:text-[64px] xl:leading-[110%] lg:leading-[110%] relative z-20 text-center " >GREAT ON THE GO!</p>
                <p className=' xl:text-3xl relative z-20 text-center ' >Discover Unique Adventures and Unforgettable Experiences with Hiroek.</p>
                    {/* <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Sign Up For Free" size={"4"} type="button" className=" !bg-[#B00062] !text-white !relative !z-20 font-bold !w-fit !shadow-lg !mt-8 " icon={
                        <Forwardarrow />
                    } /> */}
                <GetInTouch open={open} setOpen={setOpen} whitebg={true} activatebtn={true} coloredbtn />
                <img alt="discover" src="/images/discover.jpeg" className=" object-cover inset-0 z-0 absolute object-top w-full h-full " />
                <div className=' absolute z-10 bg-black bg-opacity-75 inset-0 ' />
            </div>
        )}
        {charity && (
            <div className=' py-36 px-6 w-full flex flex-col items-center gap-8 font-bold relative z-10  text-white ' >
                <p className=" text-3xl xl:text-[80px] font-black lg:text-[64px] xl:leading-[110%] lg:leading-[110%] relative z-20 text-center " >Activate Your Account</p>
                {/* <p className=' xl:text-2xl lg:max-w-[485px] relative z-20 text-center ' >Discover the unique features of Hiroek</p> */}
                {/* <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Activate Your Account" size={"4"} type="button" className=" !bg-[#fff] !text-[#37137F] !relative !z-20 font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrowcolored />
                } /> */} 
                <GetInTouch open={open} setOpen={setOpen} whitebg={true} activatebtn={true} />
                <img alt="discover" src="/images/discover.jpeg" className=" object-cover inset-0 z-0 absolute object-top w-full h-full " />
                <div className=' absolute z-10 bg-black bg-opacity-75 inset-0 ' />
            </div>
        )}
        </>
    )
}
