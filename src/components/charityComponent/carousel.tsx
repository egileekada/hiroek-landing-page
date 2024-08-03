import { useEffect, useState } from "react";
import { CarouselLeftArrow, CarouselRightArrow, Forwardarrow, UnderLineIcon } from "../svg";
import { charityData } from "../constant";
import { motion } from "framer-motion";
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
                <div className=" w-full lg:h-[600px] " >
                    <img alt={"carousel"} src={"/images/laptop.png"} className="lg:absolute object-cover bottom-10 lg:max-w-[900px] " />
                </div>
                <div className=" w-full lg:h-[600px] h-[400px] flex relative lg:items-center lg:justify-center flex-col gap-6  " >
                    {charityData?.map((item, index) => {
                        if (index === isShown) {
                            return (
                                <div key={index} className=" flex flex-col lg:text-right lg:items-end lg:max-w-[80%] gap-6 " >
                                    <motion.p {...boxAnimation} className=" text-3xl lg:text-[50px] lg:leading-[60px]" >{item?.name}</motion.p>
                                    <motion.p {...boxAnimation} className=" text-[#424242] lg:text-2xl lg:leading-[36px] " >{item?.detail}</motion.p>
                                    <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80", background: "linear-gradient(180deg, #8C43FE 0%, #37137F 81%)" }} text="Get Started" size={"4"} type="button" className="  cursor-pointer lg:ml-auto !text-white font-bold !w-fit !shadow-lg " icon={
                                        <Forwardarrow />
                                    } />
                                </div>
                            )
                        }
                    })}
                    <div className=" w-full flex absolute bottom-0 justify-between items-center " >
                        <div onClick={() => clickHandler(isShown - 1)} role="button" className=" " >
                            <CarouselLeftArrow />
                        </div>
                        <div className=" flex gap-2" >
                            {charityData?.map((item, index) => (
                                <motion.div {...boxAnimation} key={item?.name} className={` bg-[#37137F] ${index === isShown ? " w-[40px] " : " w-[10px] bg-opacity-30"}  h-[10px] rounded-[44px] `} />
                            ))}
                        </div>
                        <div onClick={() => clickHandler(isShown + 1)} role="button" className=" " >
                            <CarouselRightArrow />
                        </div>
                    </div>
                </div>
            </div>
            <img alt="whitestroke" src="/images/whitestroke.png" className=" object-cover inset-0 absolute opacity-5 w-full h-full " />
        </div>
    )
}
