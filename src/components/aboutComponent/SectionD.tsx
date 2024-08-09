
export default function SectionD() {
    return (
        <div className=' w-full flex flex-col py-14 bg-[#F0F2FF] px-6 lg:px-12 items-center text-[#37137F] ' >
            <div className=' lg:max-w-[1080px] w-full flex flex-col gap-20 items-center ' >
                <p className=' text-3xl lg:text-[44px] font-black' >{`How it's going so far`}</p>
                <div className=' w-full flex lg:flex-row flex-col lg:justify-between gap-10 ' >
                    <div className=" text-center flex flex-col items-center " >
                        <p className=" text-6xl lg:text-[72px] lg:leading-[72px] font-black " >1.2k+</p>
                        <p className=" text-[28px] font-axiformaregular " >Campaigns/Events</p>
                    </div>
                    <div className=" text-center flex flex-col items-center " >
                        <p className=" text-6xl lg:text-[72px] lg:leading-[72px] font-black " >£1m+</p>
                        <p className=" text-[28px] font-axiformaregular " >Raised</p>
                    </div>
                    <div className=" text-center flex flex-col items-center " >
                        <p className=" text-6xl lg:text-[72px] lg:leading-[72px] font-black " >100k+</p>
                        <p className=" text-[28px] font-axiformaregular " >Donations made</p>
                    </div>
                </div>
                <p className=" font-semibold text-lg lg:text-2xl font-axiformamedium " >All of this has been made possible by the hiroek community</p>
            </div>
        </div>
    )
}
