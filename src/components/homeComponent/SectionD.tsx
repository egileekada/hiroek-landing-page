// import { useRef } from 'react';
// import { CustomButton } from '../shared'
// import { Forwardarrow } from '../svg'
// import { motion, useInView } from 'framer-motion';

export default function FortySection() {

    // const ref = useRef(null);
    // const isInView = useInView(ref);

    return (
        <div className=' text-[#F0F2FF] !font-bold gap-10 relative z-10 rounded-t-[#F0F2FF] w-full flex lg:flex-row bg-primary flex-col-reverse justify-center pt-16 lg:py-24 ' >
            
            <div className=' w-full flex justify-end lg:bg-transparent bg-primary relative lg:z-[15] lg:pt-0 pt-4 z-[15] lg:px-0 lg:h-auto h-[280px]  px-6 ' >
                <div className=' max-w-[508px] relative z-20 flex flex-col gap-3 ' >
                    <p className=' max-w-[403px] text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black ' >Instant Community Building</p>
                    <p className=' xl:text-2xl font-axiformamedium ' >Quickly connect with like-minded individuals and build a community around an event or topic without the usual complexities, allowing you to focus on what truly matters.</p>
                    <p className=' xl:text-2xl font-axiformamedium  ' >Incorporated messaging and interaction features ensures you remain connected on and offline.</p>
                    {/* <CustomButton text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white font-bold !w-fit !shadow-lg " icon={
                        <Forwardarrow />
                    } /> */}
                </div>
            </div> 
            <div className=" w-full flex lg:h-auto md:h-[400px] h-[250px] lg:px-0 px-6 relative lg:pr-6 " >
                <div className=" lg:w-full relative  z-[14] lg:z-0 w-full " >
                    <div className=" lg:w-full md:w-full w-full relative z-10 lg:block flex justify-center  " >
                        <img alt="one" src="/images/sideimg.png" className=" lg:absolute top-0 lg:z-0  " />
                    </div>
                </div>
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