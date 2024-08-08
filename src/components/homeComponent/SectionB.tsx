
export default function SecondSection() {
    return (
        <div className=" w-full relative " > 
            <div className=' w-full px-6 relative z-20 lg:px-14 py-24 flex flex-col gap-4 lg:gap-2 bg-transparent font-bold text-[#F0F2FF] ' >
                <p className=' text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] uppercase lg:leading-[50px] lg:max-w-[800px] ' >Make your charitable fundraising impactful with Hiroek.</p>
                <p className=' xl:text-2xl lg:max-w-[950px] ' >Create and share beautiful campaigns, take contactless donations on your phone, raise money for up to 5 charities at once, and join a community of difference makers on our app.</p>
            </div>
            <img alt="bluestroke" src="/images/bluestroke.png" className=" object-cover inset-0 absolute opacity-5 w-full h-full " />
            <img alt="ellipse2" src="/images/bigleft.png" className=" object-cover lg:w-auto w-[100px]  top-32 z-10 right-0 absolute " />
        </div>
    )
}
