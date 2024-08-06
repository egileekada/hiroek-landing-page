import { useRef } from 'react';
import { CustomButton } from '../shared'
import { Forwardarrow } from '../svg'
import { motion, useInView } from 'framer-motion';

export default function FortySection() {

    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div className=' text-[#F0F2FF] !font-bold gap-10 relative z-10 rounded-t-[#F0F2FF] w-full flex lg:flex-row bg-primary flex-col-reverse justify-center py-24 ' >
            <div  ref={ref} />
            <div className=' w-full flex justify-end bg-primary relative lg:z-0 z-[15] lg:px-0  px-6 ' >
                <div className=' max-w-[508px] relative z-10 flex flex-col gap-3 ' >
                    <p className=' max-w-[403px] text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black ' >Instant Community Building</p>
                    <p className=' xl:text-2xl font-axiformamedium ' >Quickly connect with like-minded individuals and build your community without the usual complexities, allowing you to focus on what truly matters.</p>
                    <CustomButton text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white font-bold !w-fit !shadow-lg " icon={
                        <Forwardarrow />
                    } />
                </div>
            </div> 
            <div  className=' w-full lg:flex hidden rotate-[15deg] justify-center lg:px-0 px-6  ' >
                <div className=' lg:w-[350px] relative ' > 
                    <div className=' lg:w-[350px] w-full relative z-20 lg:block flex justify-center lg:absolute top-0  ' >
                        <img alt='three' src='/images/animation/Event3.png' className=' w-full ' />
                    </div>
                    <motion.div className="origin-bottom-left absolute top-0 w-[350px]" 
                    animate={{
                        x: isInView ? -150 : 0
                    }} 
                        transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                        <img alt="two" src="/images/animation/Event2.png" className=" w-full " />
                    </motion.div>
                    <motion.div className="origin-bottom-left absolute top-0 w-[350px]" animate={{
                        x: isInView ? 150 : 0
                    }}
                        transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                        <img alt="four" src="/images/animation/Event4.png" className=" w-full " />
                    </motion.div> 
                </div>
            </div>
            <div className=' h-[200px] w-full flex relative  justify-center lg:hidden '  >
                <div className=' lg:w-[350px] w-[45%] relative z-[12]  ' >
                    <img alt='three' src='/images/animation/Event3.png' className=' w-full ' />
                </div>
                <motion.div className="origin-bottom-left z-[11] absolute top-0  w-[40%]"
                    animate={{
                        x: isInView ? -70 : 0
                    }}
                    transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                    <img alt="two" src="/images/animation/Event2.png" className=" w-full " />
                </motion.div>
                <motion.div className="origin-bottom-left z-[11] absolute top-0  w-[40%]" animate={{
                    x: isInView ? 70 : 0
                }}
                    transition={{ duration: 0.5, delay: isInView ? 0.5 : 0 }} >
                    <img alt="four" src="/images/animation/Event4.png" className=" w-full " />
                </motion.div>
            </div>
            <img alt="bluestroke" src="/images/bluestroke.png" className=" object-cover inset-0 z-0 absolute opacity-5 w-full h-full " />
            <img alt="ellipse2" src="/images/right.png" className=" object-cover lg:w-auto w-[100px]  top-24 z-10 left-0 absolute " />
            <img alt="ellipse2" src="/images/left.png" className=" object-cover lg:w-auto w-[100px]  -bottom-[40%] z-20 right-0 absolute " />
            
        </div>
    )
}


// 1btc = 3usdt

// 1usdt = 4naire

// 3usdt = 12naire

//  1btc = 12naire