import { useEffect, useState } from "react";
import { CarouselLeftArrow, CarouselRightArrow } from "../svg";
import { eventData } from "../constant";
import { AnimatePresence, motion } from "framer-motion";


export default function Carousel() {

    const [isShown, setIsShown] = useState(0)

    const boxAnimation = {
        key: "box",
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
        },
        exit: {
            opacity: 0,
        },
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    }


    useEffect(() => {
        const t1 = setTimeout(() => {
            if (isShown === eventData.length - 1) {
                setIsShown(0)
            } else {
                setIsShown(prev => prev + 1)
            }
        }, 5000);
        return () => {
            clearTimeout(t1);
        }
    }, [isShown])

    const clickHandler = (item: number) => {
        if (item < 0) {
            setIsShown(eventData.length - 1)
        } else if (item === eventData.length) {
            setIsShown(0)
        } else {
            setIsShown(item)
        }
    }

    return (
        <div className=" relative w-full flex flex-col lg:flex-row-reverse  py-24 gap-8 px-6 lg:px-12 bg-secondary text-primary " >
            <div className=" w-full lg:h-[600px] h-[300px] relative z-10 lg:rounded-[120px] " >
                {eventData?.map((item, index: any) => {
                    return (
                        <AnimatePresence key={item?.img} >
                            {index === isShown &&
                                <motion.div {...boxAnimation} style={{ width: "100%",position: "absolute", inset: "0px", objectFit: "cover" }} className=" flex lg:justify-center lg:h-[600px] h-[300px] lg:rounded-[120px] lg:items-center " >
                                    <img alt={item?.name} src={item?.img} className=" lg:rounded-[120px] lg:object-cover object-fill h-[300px] lg:h-auto lg:w-full " />
                                </motion.div>
                            }
                        </AnimatePresence>
                    )
                })}
            </div>
            <div className=" w-full lg:h-[600px] h-auto flex relative  lg:items-center lg:justify-center flex-col gap-6  " >
                {eventData?.map((item, index) => {
                    if (index === isShown) {
                        return (
                            <div key={index} className=" flex flex-col gap-6 " >
                                <motion.p {...boxAnimation} className=" text-3xl lg:text-[55px] lg:leading-[60px]" >{item?.name}</motion.p>
                                <motion.p {...boxAnimation} className=" text-[#424242] text-lg lg:text-2xl lg:leading-[36px] " >{item?.detail}</motion.p>
                            </div>
                        )
                    }
                })}
                <div className=" w-full  hidden lg:flex  absolute bottom-0 justify-between z-[12] items-center " >
                    <div  onClick={() => clickHandler(isShown - 1)} role="button" className="  w-[45px] lg:w-[64px]  relative -z2 " >
                        <CarouselLeftArrow />
                    </div>
                    <div className=" flex gap-2" >
                        {eventData?.map((item, index) => (
                            <motion.div {...boxAnimation} key={item?.name} className={` bg-[#37137F] ${index === isShown ? " w-[40px] " : " w-[10px] bg-opacity-30"}  h-[10px] rounded-[44px] `} />
                        ))}
                    </div>
                    <div  onClick={() => clickHandler(isShown + 1)} role="button" className=" w-[45px] lg:w-[64px] " >
                        <CarouselRightArrow />
                    </div>
                </div>
            </div>
            {/* <img alt="whitestroke" src="/images/whitestroke.png" className=" object-cover inset-0 absolute opacity-5 w-full h-full " /> */}
        </div>
    )
}
