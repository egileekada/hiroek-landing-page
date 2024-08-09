import { NinethSection } from "../homeComponent";
import { AppleStore, Chartered, GooglePlay, Instagram, Tiktok, Twitter, Youtube } from "../svg";


export default function Footer() {

    const location = window.location.href; 
    
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
                            <div role="button" className="w-[187.45px] " >
                                <GooglePlay />
                            </div>
                            <div role="button" className=" w-[187.45px]" >
                                <AppleStore />
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-col gap-6 pt-2 " >
                        <p className=" font-extrabold text-xl font-axiformablack " >Product</p>
                        <a className=" font-medium text-lg  " >FAQs</a>
                        <a href="/terms" className=" font-medium text-lg  " >Terms & Conditions</a>
                        <a href="/policy" className=" font-medium text-lg  " >Privacy Policy</a>
                    </div>
                    <div className=" flex flex-col gap-6 pt-2 " >
                        <p className=" font-extrabold text-xl font-axiformablack " >Company</p>
                        <a className=" font-medium text-lg  " >Why Hiroek?</a>
                        <a className=" font-medium text-lg  " >Careers</a>
                        <a className=" font-medium text-lg  " >Accessibility Statement</a>
                    </div>
                    <div className=" flex flex-col gap-3 " >
                        <Chartered />
                        <p className=" font-bold text-xl " >Follow Us On Social Media</p>
                        <div className=" flex gap-3 items-center " >
                            <a className=" w-[58px] h-[58px] rounded-full bg-[#F0F2FF] flex justify-center items-center " >
                                <Instagram />
                            </a>
                            <a className=" w-[58px] h-[58px] rounded-full bg-[#F0F2FF] flex justify-center items-center " >
                                <Tiktok />
                            </a>
                            <a className=" w-[58px] h-[58px] rounded-full bg-[#F0F2FF] flex justify-center items-center " >
                                <Twitter />
                            </a>
                            <a className=" w-[58px] h-[58px] rounded-full bg-[#F0F2FF] flex justify-center items-center " >
                                <Youtube />
                            </a>
                        </div>
                    </div>
                </div>
                <div className=" py-4 w-full flex justify-center items-center border-t border-[#2E4E73] " >
                    <p className=" font-medium " >All Rights Reserved  © {new Date().getFullYear()} Hiroek</p>
                </div>
            </div>
            <div className=" w-full h-full absolute inset-0 " > 
                <img alt="bluestroke" src="/images/bluestroke.png" className=" object-cover opacity-[0.02] w-full h-full " />
            </div>
        </div>
    )
}
