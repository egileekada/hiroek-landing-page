import { useState } from "react";
import { NinethSection } from "../homeComponent";
import Term from "../../pdf/TAndC.pdf";
import Policy from "../../pdf/PAndP.pdf";
import { AppleStore, Chartered, GooglePlay, Instagram, Tiktok, Twitter, Youtube } from "../svg";
import GetInTouch from "./GetInTouch";


export default function Footer() {

    const location = window.location.href;
    const [open, setOpen] = useState(false)

    return (
        <div className=" w-full flex flex-col relative " >
            {((!location?.includes("policy")) && (!location?.includes("terms"))) && (
                <NinethSection />
            )}
            <div className=" relative z-10 w-full flex flex-col font-axiformamedium lg:px-12 text-[#F0F2FF] " >
                <div className=' w-full px-6 lg:px-12 gap-6 flex lg:flex-row flex-col py-10 justify-between ' >
                    <div className=' lg:max-w-[370px] flex items-start flex-col gap-3 ' >
                        <img alt='whitelogo' className=" h-[54px] mr-auto " src='/images/whitelogo.svg' />
                        <p className=" text-lg font-medium " >Create Impactful Events, Cultivate A Supportive Community, & Passionately Champion Causes That Are Closest to Your Heart</p>

                        <div className=" flex lg:flex-row flex-col gap-3 " >
                            <a href="https://play.google.com/store/apps/details?id=com.hiroek.app.hiroek" target="_blank" className="w-[187.45px] " >
                                <GooglePlay />
                            </a>
                            <a href="https://apps.apple.com/ng/app/hiroek/id6474194083" target="_blank" className=" w-[187.45px]" >
                                <AppleStore />
                            </a>
                        </div>
                    </div>
                    <div className=" text-[#F0F2FF] flex flex-col gap-6 pt-2 " >
                        <p className=" font-extrabold text-xl font-axiformablack " >Product</p>
                        {/* <a className=" font-medium text-lg  " >FAQs</a> */}
                        <a target="_blank" href={Term} className=" font-medium text-lg  " >Terms & Conditions</a>
                        <a target="_blank" href={Policy} className=" font-medium text-lg  " >Privacy Policy</a>
                        <GetInTouch text={"Get In Touch"} span={true} no_underline open={open} setOpen={setOpen} />
                    </div> 
                    <div className=" flex flex-col gap-3 " >
                        <a target="_blank" href="https://ciof.org.uk/" >
                            <Chartered />
                        </a>
                        <p className=" font-bold text-xl " >Follow Us On Social Media</p>
                        <div className=" flex gap-3 items-center " >
                            <a target="_blank" href="https://www.instagram.com/hiroekapp?igshid=NGVhN2U2NjQ0Yg==" className=" w-[58px] h-[58px] rounded-full bg-[#F0F2FF] flex justify-center items-center " >
                                <Instagram />
                            </a>
                            <a target="_blank" href="https://www.tiktok.com/@hiroekapp?_t=8iCpM6t1niD&_r=1" className=" w-[58px] h-[58px] rounded-full bg-[#F0F2FF] flex justify-center items-center " >
                                <Tiktok />
                            </a>
                            <a target="_blank" href="https://x.com/Hiroekapp?t=FuE4Wm5L8L9T3YGu0cN-_g&s=08" className=" w-[58px] h-[58px] rounded-full bg-[#F0F2FF] flex justify-center items-center " >
                                <Twitter />
                            </a>
                            <a target="_blank" href="https://youtube.com/@hiroekapp?si=GRS6CNMPwD5ZtV_g" className=" w-[58px] h-[58px] rounded-full bg-[#F0F2FF] flex justify-center items-center " >
                                <Youtube />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" py-4 w-full flex justify-center items-center border-t border-[#2E4E73] " >
                    <p className=" font-medium " >Copyright MyHero Ltd  ©️{new Date().getFullYear()}. All right reserved</p>
                </div>
            </div>
            <div className=" w-full h-full absolute inset-0 " >
                <img alt="bluestroke" src="/images/bluestroke.png" className=" object-cover opacity-[0.02] w-full h-full " />
            </div>
        </div>
    )
}
