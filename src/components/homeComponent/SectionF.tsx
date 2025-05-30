// import { useInView } from "framer-motion"; 
// import { useRef } from "react";

export default function SixthSection() { 
    

    // const ref = useRef(null);
    // // const isInView = useInView(ref);

    return (
        <div className=" text-[#F0F2FF] relative z-10 !font-bold gap-10 w-full  flex flex-col lg:flex-row-reverse justify-center pt-20 pb-0 " >
           <div className=" w-full flex lg:h-auto md:h-[400px] h-[250px] lg:px-0 px-6 relative " >
                <div className=" lg:w-full relative w-full " > 
                    <div className=" lg:w-full md:w-[50%] w-[full] absolute lg:-bottom-32 z-10 lg:block flex justify-center  " >
                        <img alt="create" src="/images/create.png"  className="  " />
                    </div>
                </div>
            </div>
            <div className=" w-full flex lg:h-auto h-[270px] lg:justify-end lg:px-0 lg:py-24 px-6 py-8 lg:bg-transparent bg-primary z-10 " >
                <div className=" lg:max-w-[500px] relative z-10 flex flex-col gap-3 " >
                    <p className=" text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black lg:block hidden capitalize " >CREATE & share events</p>
                    <p className=" text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black lg:hidden capitalize " >CREATE & share events</p>
                    <p className=" xl:text-2xl font-axiformamedium ">Bring your ideas to life, whether it's a local gathering, fundraiser, or workshop. Effortlessly create and host events, then share them directly with friends. Encourage community driven participation to make it easier for people to connect, engage, and share in the experience.</p>
                    {/* <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#DF6951] !text-white font-bold !w-fit !shadow-lg " icon={
                        <Forwardarrow />
                    } /> */}
                </div>
            </div>
            <img alt="bluestroke" src="/images/bluestroke.png" className=" object-cover inset-0 z-[2] absolute opacity-[0.03] w-full h-full " />
            <div className=" w-full absolute inset-0" >
                <img alt="bg1" src="/images/bg1.png" className=" object-cover opacity-10 h-full w-full " />
            </div>
            <div className=" absolute inset-0 z-[1] bg-primary " />
        </div>
    )
}
