import { useEffect, useState } from "react";
import { CarouselLeftArrow, CarouselRightArrow, Forwardarrow, UnderLineIcon } from "../svg";
import { charityData } from "../constant";
import { AnimatePresence, motion } from "framer-motion";
import { CustomButton } from "../shared";


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
            if (isShown === charityData.length - 1) {
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
            setIsShown(charityData.length - 1)
        } else if (item === charityData.length) {
            setIsShown(0)
        } else {
            setIsShown(item)
        }
    }

    return (
        <div className=" w-full relative flex flex-col items-center lg:pt-0 pt-10 bg-secondary text-primary " >
            <div className=" relative text-center flex flex-col items-center w-auto px-6 " >
                <p className=" text-3xl lg:text-[60px] lg:leading-[64px] !capitalize " >KEY FEATURES</p>
                <div className=" lg:-ml-6 w-[60%] flex justify-center " >
                    <UnderLineIcon />
                </div>
            </div>
            <div className=" w-full flex lg:flex-row flex-col relative py-14 gap-8 px-6 lg:px-12  " >
                <div className=" w-full lg:h-[600px] relative lg:pl-0 pl-6 " >
                    {charityData?.map((item, index: any) => {
                        return (
                            <AnimatePresence key={item?.img} >
                                {index === isShown &&
                                    <motion.div {...boxAnimation} style={{ width: "100%", position: "absolute", inset: "0px", objectFit: "cover" }} className=" flex lg:justify-center lg:h-[600px] h-[300px] g:items-center " >
                                        <img alt={item?.name} src={item?.img} className=" lg:object-contain object-fill h-[300px] lg:h-auto lg:w-full " />
                                    </motion.div>
                                }
                            </AnimatePresence>
                        )
                    })}
                </div>
                <div className=" w-full lg:h-[600px] h-fit flex lg:relative lg:items-center lg:justify-center flex-col gap-6  " >
                    {charityData?.map((item, index) => {
                        if (index === isShown) {
                            return (
                                <div key={item?.img} className=" flex flex-col lg:text-right lg:items-end lg:max-w-[80%] gap-6 " >
                                    <motion.p {...boxAnimation} className=" text-3xl lg:text-[50px] lg:leading-[60px]" >{item?.name}</motion.p>
                                    <motion.p {...boxAnimation} className=" whitespace-pre-line text-[#424242] lg:text-2xl lg:leading-[36px] " >{item?.detail}</motion.p>
                                    <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80", background: "linear-gradient(180deg, #8C43FE 0%, #37137F 81%)" }} text="Activate your account" size={"4"} type="button" className="  cursor-pointer lg:ml-auto !text-white font-bold !w-fit !shadow-lg " icon={
                                        <Forwardarrow />
                                    } />
                                </div>
                            )
                        }
                    })}
                    <div className=" w-full hidden lg:flex absolute bottom-0 z-10 justify-between items-center " >
                        <div onClick={() => clickHandler(isShown - 1)} role="button" className=" w-[45px] lg:w-[64px] " >
                            <CarouselLeftArrow />
                        </div>
                        <div className=" hidden lg:flex gap-2" >
                            {charityData?.map((item, index) => (
                                <motion.div {...boxAnimation} key={item?.name} className={` bg-[#37137F] ${index === isShown ? " w-[40px] " : " w-[10px] bg-opacity-30"}  h-[10px] rounded-[44px] `} />
                            ))}
                        </div>
                        <div onClick={() => clickHandler(isShown + 1)} role="button" className=" w-[45px] lg:w-[64px] "  >
                            <CarouselRightArrow />
                        </div>
                    </div>
                </div>
            </div>
            <img alt="whitestroke" src="/images/whitestroke.png" className=" object-cover inset-0 absolute opacity-5 -z-[0] w-full h-full " />
        </div>
    )
}
