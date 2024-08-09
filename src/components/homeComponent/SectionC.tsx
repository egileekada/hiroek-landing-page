import { useRef } from "react";
import { CustomButton } from "../shared";
import { Forwardarrow } from "../svg";
import { motion, useInView } from "framer-motion";


export default function ThirdSection() {

    const ref = useRef(null);
    const isInView = useInView(ref); 

    return (
        <div className=" bg-[#F0F2FF] relative text-[#37137F] !font-bold gap-6 rounded-t-3xl lg:rounded-t-[120px] w-full flex lg:flex-row flex-col justify-center pt-24 " >
            <div className="  w-full lg:h-auto h-[250px] relative lg:z-10 flex justify-end lg:px-0 px-6 " >
                <motion.div ref={ref} className="origin-bottom-left absolute top-0 w-[55%] lg:w-[350px]" animate={{
                    rotate: isInView ? -25 : 0
                }}
                    transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                    <img alt="two" src="/images/animation/Event2.png" className=" w-full " />
                </motion.div> 
                <img alt="one" src="/images/animation/Event1.png" className="absolute w-[55%] lg:w-[350px] object-fill ml-auto object-top top-0 z-[2]  " /> 
            </div>
            <div className=" w-full bg-[#F0F2FF] relative lg:z-0 z-[5] lg:px-0  px-6 pt-4 lg:pt-0  " >
                <div className=" max-w-[544px] relative z-10 flex flex-col gap-3 pb-28  " >
                    <p className=" text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black " >Effortless <br /> Event Creation</p>
                    <p className=" xl:text-2xl text-[#424242] !font-axiformamedium " >With Hiroek, planning and organising events is streamlined and intuitive, saving you valuable time.</p>
                    <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !text-white font-bold !w-fit !shadow-lg " icon={
                        <Forwardarrow />
                    } />
                </div>
            </div>

            <img alt="whitestroke" src="/images/whitestroke.png" className=" object-cover inset-0 absolute h-full w-full opacity-5 " />
        </div>
    )
}
