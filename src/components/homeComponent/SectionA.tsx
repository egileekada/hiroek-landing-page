import { CustomButton } from "../shared";
import { AppleStore, Forwardarrow, GooglePlay } from "../svg";


export default function FirstSection() {
    return (
        <div className=' w-full xl:max-h-screen h-full bg-red-600 bg-opacity-25 flex items-center text-[#F0F2FF] !font-bold px-14 ' >
            <div className=" max-w-[800px] pt-56 pb-24 flex gap-1 flex-col " >
                <p className=" text-xl tracking-[8px] ">connect, empower, inspire</p>
                <p className=" text-[80px] leading-[84px] " >Impactful Events Build Community Champion Causes
                </p>
                <p className=" text-2xl mb-5 " >Create Impactful Events, Cultivate A Supportive Community, & Passionately Champion Causes That Are Closest to Your Heart</p>
                <CustomButton style={{boxShadow: "3px 3px 0px 0px #37137F80"}} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
                <div className=" flex gap-4 items-center mt-5 " >
                    <div role="button" >
                        <GooglePlay />
                    </div>
                    <div role="button" >
                        <AppleStore />
                    </div>
                </div>
            </div>
        </div>
    )
}
