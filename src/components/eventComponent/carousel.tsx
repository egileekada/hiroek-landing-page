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
        <div className=" w-full flex flex-row-reverse py-24 gap-8 px-12 bg-secondary text-primary " >
            <div className=" w-full h-[600px] rounded-[120px]  relative " >
                {eventData?.map((item, index: any) => {
                    return (
                        <AnimatePresence key={index} >
                            {index === isShown &&
                                <motion.div {...boxAnimation} style={{ width: "100%", height: "600px", borderRadius: "120px", position: "absolute", inset: "0px", objectFit: "cover" }} className=" flex justify-center items-center " >
                                    <img alt={item?.name} src={item?.img} className=" rounded-[120px] object-cover w-full " />
                                </motion.div>
                            }
                        </AnimatePresence>
                    )
                })}
            </div>
            <div className=" w-full h-[600px] flex relative items-center justify-center flex-col gap-6  " >
                {eventData?.map((item, index) => {
                    if (index === isShown) {
                        return (
                            <div key={index} className=" flex flex-col gap-6 " >
                                <motion.p {...boxAnimation} className=" text-[60px] leading-[60px]" >{item?.name}</motion.p>
                                <motion.p {...boxAnimation} className=" text-[#424242] text-2xl leading-[36px] " >{item?.detail}</motion.p>
                            </div>
                        )
                    }
                })}
                <div className=" w-full flex absolute bottom-0 justify-between items-center " >
                    <div onClick={() => clickHandler(isShown - 1)} role="button" className=" " >
                        <CarouselLeftArrow />
                    </div>
                    <div className=" flex gap-2" >
                        {eventData?.map((item, index) => (
                            <motion.div {...boxAnimation} key={item?.name} className={` bg-[#37137F] ${index === isShown ? " w-[40px] " : " w-[10px] bg-opacity-30"}  h-[10px] rounded-[44px] `} />
                        ))}
                    </div>
                    <div onClick={() => clickHandler(isShown + 1)} role="button" className=" " >
                        <CarouselRightArrow />
                    </div>
                </div>
            </div>
        </div>
    )
}
