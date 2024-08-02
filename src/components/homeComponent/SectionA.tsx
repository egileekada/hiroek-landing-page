import { CustomButton } from "../shared";
import { AppleStore, Forwardarrow, GooglePlay } from "../svg";


export default function FirstSection() {
    return (
        <div className=" w-full relative " >
            <div className=' w-full xl:min-h-screen h-full  flex items-center relative text-[#F0F2FF] !font-bold px-6 lg:px-14 ' >
                <div className=" lg:max-w-[800px] relative z-20 pt-36 lg:pt-56 pb-24 flex gap-1 flex-col " >
                    <p className=" text-xl tracking-[8px] ">connect, empower, inspire</p>
                    <p className=" text-3xl lg:text-[80px] lg:leading-[84px] " >Impactful Events Build Community Champion Causes
                    </p>
                    <p className=" lg:text-2xl mb-5 axiforma-black " >Create Impactful Events, Cultivate A Supportive Community, & Passionately Champion Causes That Are Closest to Your Heart</p>
                    <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !text-white font-bold !w-fit !shadow-lg " icon={
                        <Forwardarrow />
                    } />
                    <div className=" flex lg:flex-row flex-col gap-4 lg:items-center mt-5 " >
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

                <div className=" absolute inset-0 bg-black bg-opacity-25 rounded-b-3xl lg:rounded-b-[120px] " />
            </div>

            <img alt="bluestroke" src="/images/decore.png" className=" object-cover opacity-5 top-0 right-0 absolute " />
            <img alt="ellipse2" src="/images/ellipse2.png" className=" object-cover top-6 left-0 absolute " />
            <img alt="ellipse3" src="/images/ellipse3.png" className=" object-cover top-24 left-14 absolute " />
            <img alt="ellipse4" src="/images/ellipse4.png" className=" object-cover bottom-0 left-[40%] absolute " />
            <img alt="ellipse5" src="/images/ellipse5.png" className=" object-cover bottom-8 left-[40%] absolute " />
        </div>
    )
}
