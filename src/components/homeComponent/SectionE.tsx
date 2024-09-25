import { useRef } from "react";
// import CustomButton from "../shared/customButton";
// import { Forwardarrow } from "../svg";
import { motion, useInView } from "framer-motion";


export default function FifthSection() {

    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div className=" bg-[#F0F2FF] text-[#37137F] relative z-10 !font-bold lg:px-6 gap-10 w-full flex lg:flex-row flex-col justify-center pt-14 lg:py-24 " >
            <div  ref={ref} />
            <div className=" w-full justify-end md:flex hidden relative lg:h-auto md:h-[500px] h-[250px] lg:px-0 px-6 " >
                <motion.div className="origin-bottom-left lg:block hidden absolute top-0 w-[50%] lg:w-[350px]" animate={{
                    x: isInView ? -170 : 0
                }}
                    transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                    <img alt="two" src="/images/animation/Eventnew4.png" className=" w-full " />
                </motion.div>
                <motion.div className="origin-bottom-left absolute md:block lg:hidden hidden top-0 w-[50%] md:w-[40%]  lg:w-[350px]" animate={{
                    x: isInView ? -300 : 0
                }}
                    transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                    <img alt="two" src="/images/animation/Eventnew4.png" className=" w-full " />
                </motion.div>
                <div className=" lg:w-[350px] md:w-[50%] w-[70%] relative z-10 lg:flex justify-center  " >
                    <img alt="one" src="/images/animation/Event5.png" className=" absolute top-0 lg:w-auto w-full " />
                </div>
            </div>

            {/* <div className=" w-full justify-end lg:hidden md:flex sm:hidden relative lg:h-auto md:h-[500px] h-[250px] lg:px-0 px-6 " >
                <motion.div className="origin-bottom-left absolute top-0 md:w-[40%] w-[55%] z-[2] lg:w-[350px]" animate={{
                    x: isInView ? -300 : 0
                }}
                    transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                    <img alt="two" src="/images/animation/Eventnew4.png" className=" w-full " />
                </motion.div>
                <div className=" lg:w-[350px] md:w-[50%] w-[70%] relative z-10 lg:hidden md:block sm:hidden  justify-center  " >
                    <img alt="one" src="/images/animation/Event5.png" className=" absolute top-0 lg:w-auto w-full " />
                </div>
            </div> */}

            <div className=" w-full justify-end flex md:hidden relative lg:h-auto md:h-[500px] h-[250px] lg:px-0 px-6 " >
                <motion.div className="origin-bottom-left absolute top-0 md:w-[40%] w-[55%] z-[2] lg:w-[350px]" animate={{
                    x: isInView ? -150 : 0
                }}
                    transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                    <img alt="two" src="/images/animation/Eventnew4.png" className=" w-full " />
                </motion.div>
                <div className=" lg:w-[350px] md:w-[50%] w-[70%] relative z-10 lg:block flex justify-center  " >
                    <img alt="one" src="/images/animation/Event5.png" className=" absolute top-0 lg:w-auto w-full " />
                </div>
            </div>
            <div className="  w-full relative z-10 flex bg-[#F0F2FF] h-[200px] lg:h-[350px] lg:px-0 px-6 " >
                <div className=" lg:max-w-[500px] lg:relative lg:z-0 z-10 flex pt-8 flex-col gap-3 " >
                    <p className=" text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black lg:block hidden " >Discover <br /> your tribe!</p>
                    <p className=" text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black lg:hidden " >Discover your tribe!</p>
                    <p className=" lg:text-2xl text-[#424242] font-axiformamedium " >Hiroek makes inviting and connecting  your friends to your events easy. </p>
                    {/* <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !text-white font-bold !w-fit !shadow-lg " icon={
                        <Forwardarrow />
                    } /> */}
                </div>
            </div>
            <img alt="whitestroke" src="/images/whitestroke.png" className=" object-cover inset-0 absolute h-full w-full opacity-5 " />
            
        </div>
    )
} 