import { motion, useInView } from "framer-motion"; 
import { useRef } from "react";

export default function SixthSection() { 
    

    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div className=" text-[#F0F2FF] relative z-10 !font-bold gap-10 w-full  flex flex-col lg:flex-row-reverse justify-center pt-20 pb-0 " >
           <div className=" w-full flex lg:h-auto md:h-[400px] h-[250px] lg:px-0 px-6 relative " >
                <div className=" lg:w-[350px] relative w-full " >
                    <motion.div ref={ref} className="origin-bottom-right absolute z-10 top-0 lg:w-[350px] md:w-[50%] w-[60%]" animate={{
                       rotate: isInView ? 30 : 0
                    }}
                        transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                        <img alt="two" src="/images/animation/Event10.png" className=" w-full  " />
                    </motion.div>
                    <div className=" lg:w-[350px] md:w-[50%] w-[60%] relative z-10 lg:block flex justify-center  " >
                        <img alt="one" src="/images/animation/Event6.png" className=" lg:absolute top-0 z-0  " />
                    </div>
                </div>
            </div>
            <div className=" w-full flex lg:h-auto h-[270px] lg:justify-end lg:px-0 lg:py-24 px-6 py-8 lg:bg-transparent bg-primary z-10 " >
                <div className=" lg:max-w-[500px] relative z-10 flex flex-col gap-3 " >
                    <p className=" text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black lg:block hidden " >SUPPORT <br /> CAUSES <br /> SEAMLESSLY </p>
                    <p className=" text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black lg:hidden " >SUPPORT CAUSES SEAMLESSLY </p>
                    <p className=" xl:text-2xl font-axiformamedium ">Advocate for and support your favourite causes with ease, integrating them into your events without additional steps, making the process as smooth and efficient as possible.</p>
                    {/* <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white font-bold !w-fit !shadow-lg " icon={
                        <Forwardarrow />
                    } /> */}
                </div>
            </div>
            <img alt="bluestroke" src="/images/bluestroke.png" className=" object-cover inset-0 z-[2] absolute opacity-[0.03] w-full h-full " />
            <div className=" w-full absolute inset-0" >
                <img alt="bg1" src="/images/bg1.png" className=" object-cover opacity-10 h-full w-full " />
            </div>
            <div className=" absolute inset-0 z-[1] bg-primary " />
        </div>
    )
}
