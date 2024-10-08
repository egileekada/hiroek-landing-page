import { AnimatePresence, motion } from "framer-motion";
// import { CustomButton } from "../shared";
import { AppleStore, GooglePlay } from "../svg";
import { useEffect, useState } from "react";


export default function FirstSection() {

    const [isShown, setIsShown] = useState(0)
    const data = [
        "/images/bg1.png",
        "/images/bg2.png",
        "/images/bg3.png",
        "/images/bg4.jpg",
        "/images/bg5.webp",
        "/images/bg6.jpg",
        "/images/bg7.webp"
    ]

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
            if (isShown === data.length - 1) {
                setIsShown(0)
            } else {
                setIsShown(prev => prev + 1)
            }
        }, 5000);
        return () => {
            clearTimeout(t1);
        }
    }, [isShown])

    return (
        <div className=" w-full relative " >
            <div className=' w-full lg:h-screen md:h-[45vh] h-full flex items-center relative text-[#F0F2FF] !font-bold px-6 lg:px-14 ' >
                <div className=" lg:max-w-[800px] relative z-20 pt-36 lg:pt-16 lg:pb-0 pb-24 font-black flex gap-1 lg:gap-3 xl:gap-2 flex-col " >
                    {/* <p className=" text-xl tracking-[8px] ">connect, empower, inspire</p> */}
                    <p className=" text-2xl xl:text-[56px] uppercase lg:text-[45px] xl:leading-[60px] lg:leading-[50px] " >Connect with friends, Create Impactful Events, and Champion Causes Dear To You.</p>
                    {/* <p className=" xl:text-2xl mb-5 axiforma-black " >Create Impactful Events, Cultivate A Supportive Community, & Passionately Champion Causes That Are Closest to Your Heart</p> */}
                    {/* <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !mt-6 !text-white font-bold !w-fit !shadow-lg " icon={
                        <Forwardarrow />
                    } /> */}
                    <div className=" flex gap-4 lg:items-center mt-6 " >
                        <a href="https://play.google.com/store/apps/details?id=com.hiroek.app.hiroek" target="_blank" className=' w-full md:w-[200px] lg:w-[187.45px] ' >
                            <GooglePlay />
                        </a>
                        <a href="https://apps.apple.com/ng/app/hiroek/id6474194083" target="_blank" className=' w-full md:w-[200px] lg:w-[187.45px] ' >
                            <AppleStore />
                        </a>
                    </div>
                </div>

                <div className=" absolute inset-0 bg-black bg-opacity-25 z-10 rounded-b-3xl lg:rounded-b-[120px] " />
            </div>
            {data?.map((item, index: any) => {
                return (
                    <div key={index}  >
                        <AnimatePresence >
                            {index === isShown &&
                                <motion.div {...boxAnimation} style={{ width: "100%", position: "absolute", inset: "0px", objectFit: "cover" }} className=" flex lg:justify-center lg:h-full h-full rounded-b-3xl lg:rounded-b-[120px] " >
                                    <img alt={item} src={item} className=" rounded-b-3xl lg:rounded-b-[120px] object-cover h-full w-full " />
                                </motion.div>
                            }
                        </AnimatePresence>
                    </div>
                )
            })}
            <img alt="bluestroke" src="/images/decore.png" className=" object-cover opacity-5 top-0 right-0 absolute " />
            <img alt="ellipse2" src="/images/ellipse2.png" className=" object-cover top-6 left-0 absolute " />
            <img alt="ellipse3" src="/images/ellipse3.png" className=" object-cover top-24 left-14 absolute " />
            <img alt="ellipse4" src="/images/ellipse4.png" className=" object-cover bottom-0 left-[40%] absolute " />
            <img alt="ellipse5" src="/images/ellipse5.png" className=" object-cover bottom-8 left-[40%] absolute " />
        </div>
    )
}
