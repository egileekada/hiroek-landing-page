import { useRef } from "react";
import CustomButton from "../shared/customButton";
import { Forwardarrow } from "../svg";
import { motion, useInView } from "framer-motion";


export default function FifthSection() {

    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div className=" bg-[#F0F2FF] text-[#37137F] relative z-10 !font-bold lg:px-6 gap-10 w-full flex lg:flex-row flex-col justify-center py-24 " >
            <div  ref={ref} />
            <div className=" w-full justify-end lg:flex hidden relative lg:h-auto h-[250px] lg:px-0 px-6 " >
                <motion.div className="origin-bottom-left absolute top-0 w-[50%] lg:w-[350px]" animate={{
                    x: isInView ? -150 : 0
                }}
                    transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                    <img alt="two" src="/images/animation/Event4.png" className=" w-full " />
                </motion.div>
                <div className=" lg:w-[350px] w-[50%] relative z-10 lg:block flex justify-center  " >
                    <img alt="one" src="/images/animation/Event5.png" className=" absolute top-0 lg:w-auto w-full " />
                </div>
            </div>
            <div className=" w-full justify-end flex lg:hidden relative lg:h-auto h-[250px] lg:px-0 px-6 " >
                <motion.div className="origin-bottom-left absolute top-0 w-[60%] z-[2] lg:w-[350px]" animate={{
                    x: isInView ? -80 : 0
                }}
                    transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                    <img alt="two" src="/images/animation/Event4.png" className=" w-full " />
                </motion.div>
                <div className=" lg:w-[350px] w-[60%] relative z-10 lg:block flex justify-center  " >
                    <img alt="one" src="/images/animation/Event5.png" className=" absolute top-0 lg:w-auto w-full " />
                </div>
            </div>
            <div className="  w-full relative z-10 flex bg-[#F0F2FF] lg:h-[350px] pt-6 lg:px-0 px-6 " >
                <div className=" lg:max-w-[500px] lg:relative lg:z-0 z-10 flex flex-col gap-3 " >
                    <p className=" text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black " >Discover <br /> your tribe!</p>
                    <p className=" lg:text-2xl text-[#424242] font-axiformamedium " >Hiroek makes inviting and connecting  your friends to your events easy. </p>
                    <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !text-white font-bold !w-fit !shadow-lg " icon={
                        <Forwardarrow />
                    } />
                </div>
            </div>
            <img alt="whitestroke" src="/images/whitestroke.png" className=" object-cover inset-0 absolute h-full w-full opacity-5 " />
            
        </div>
    )
} 