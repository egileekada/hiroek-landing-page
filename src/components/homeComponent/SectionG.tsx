
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
// import { CustomButton } from '../shared'
// import { Forwardarrow } from '../svg'

export default function SeventhSection() {

    const ref = useRef(null);
    const isInView = useInView(ref);
    
    return (
        <div className=" bg-[#F0F2FF] text-[#37137F] relative z-10 !font-bold gap-10 w-full flex lg:flex-row flex-col lg:px-6 justify-center lg:pt-24 pt-16 lg:pb-28 " >
            <div ref={ref} />
            <div className=' w-full lg:flex hidden justify-end relative lg:h-full h-[250px] lg:px-0 px-6 ' >
                <motion.div className="origin-bottom-left absolute top-0 w-[60%] lg:w-[350px]" animate={{
                    x: isInView ? -150 : 0
                }}
                    transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                    <img alt="two" src="/images/animation/Event4.png" className=" w-full " />
                </motion.div>
                <div className=" lg:w-[350px] w-[60%] relative z-10 lg:block flex justify-center " >
                    <img alt="one" src="/images/animation/Event8.png" className=" absolute top-0 z-0 " />
                </div>
            </div>
            <div className=' w-full lg:hidden flex justify-end relative lg:h-full md:h-[500px] h-[250px] lg:px-0 px-6 ' >
                <motion.div className="origin-bottom-left absolute top-0 w-[60%] md:w-[50%] lg:w-[350px]" animate={{
                    x: isInView ? -80 : 0
                }}
                    transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                    <img alt="two" src="/images/animation/Event4.png" className=" w-full " />
                </motion.div>
                <div className=" lg:w-[350px]  md:w-[50%] w-[60%] relative z-10 lg:block flex justify-center " >
                    <img alt="one" src="/images/animation/Event8.png" className=" absolute w-full top-0 z-0 " />
                </div>
            </div>
            <div className=' w-full h-[280px] lg:h-[350px] lg:bg-transparent bg-secondary relative z-10 lg:px-0 px-6 pt-4 ' > 
                <div className=" lg:max-w-[500px] relative z-10 flex flex-col gap-3 " >
                    <p className=" text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black " >SMART <br /> PROFILE</p>
                    <p className=" xl:text-2xl text-[#424242] font-axiformamedium " >create and support donations for up to 5 charitable causes at once.</p>
                    {/* <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !text-white font-bold !w-fit !shadow-lg " icon={
                        <Forwardarrow />
                    } /> */}
                </div>
            </div>
            <img alt="whitestroke" src="/images/whitestroke.png" className=" object-cover inset-0 absolute h-full w-full opacity-5 " />
            <img alt="ellipse2" src="/images/left.png" className=" object-cover lg:w-auto w-[100px] -top-[40%] z-30 right-0 absolute " />
        </div>
    )
}
