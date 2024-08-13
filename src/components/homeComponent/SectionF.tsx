

export default function SixthSection() { 
    
    return (
        <div className=" text-[#F0F2FF] relative z-10 !font-bold gap-10 w-full  flex flex-col lg:flex-row-reverse justify-center pt-20 pb-0 " >
            <div className=" w-full flex lg:h-auto md:h-[400px] h-[250px] lg:px-0 px-6 relative lg:pr-6 " >
                <div className=" lg:w-full relative w-full " >
                    <div className=" lg:w-full md:w-full w-full relative z-10 lg:block flex justify-center  " >
                        <img alt="one" src="/images/sideimg.png" className=" lg:absolute top-0 z-0  " />
                    </div>
                </div>
            </div>
            <div className=" w-full flex lg:h-auto h-[270px] lg:justify-end lg:px-0 lg:py-24 px-6 pt-4 lg:bg-transparent bg-primary z-10 " >
                <div className=" max-w-[500px] relative z-10 flex flex-col gap-3 " >
                    <p className=" text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] font-black " >SUPPORT <br /> CAUSES <br /> SEAMLESSLY </p>
                    <p className=" xl:text-2xl font-axiformamedium ">Advocate for and support your favourite causes with ease, integrating them into your events without additional steps, making the process as smooth and efficient as possible.</p>
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
