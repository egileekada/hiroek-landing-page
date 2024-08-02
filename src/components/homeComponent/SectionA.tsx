import { CustomButton } from "../shared";
import { AppleStore, Forwardarrow, GooglePlay } from "../svg";


export default function FirstSection() {
    return (
        <div className=' w-full xl:max-h-screen h-full  flex items-center relative text-[#F0F2FF] !font-bold px-6 lg:px-14 ' >
            <div className=" lg:max-w-[800px] relative z-20 pt-36 lg:pt-48 pb-24 flex gap-1 flex-col " >
                <p className=" text-xl tracking-[8px] ">connect, empower, inspire</p>
                <p className=" text-3xl lg:text-[80px] lg:leading-[84px] " >Impactful Events Build Community Champion Causes
                </p>
                <p className=" lg:text-2xl mb-5 axiforma-black " >Create Impactful Events, Cultivate A Supportive Community, & Passionately Champion Causes That Are Closest to Your Heart</p>
                <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !text-white font-bold !w-fit !shadow-lg " icon={
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
            <div className=" w-full absolute inset-0" >
                <img alt="bg1" src="/images/bg1.png" className=" object-cover h-full w-full rounded-b-3xl lg:rounded-b-[120px] " />
            </div>
            <div className=" absolute inset-0 bg-black bg-opacity-15 rounded-b-3xl lg:rounded-b-[120px] " />
        </div>
    )
}
