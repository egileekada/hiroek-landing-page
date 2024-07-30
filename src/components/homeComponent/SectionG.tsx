
import { CustomButton } from '../shared'
import { Forwardarrow } from '../svg'

export default function SeventhSection() {
    return (
        <div className=" bg-[#F0F2FF] text-[#37137F] relative z-10 !font-bold gap-10 w-full flex justify-center pt-24 pb-28 " >
            <div className=" w-[300px] relative " >
                <img alt="one" src="/images/5.png" className=" absolute top-0 z-0 " />
            </div>
            <div className=" max-w-[500px] flex flex-col gap-3 " >
                <p className=" text-[64px] leading-[64px] font-black " >SMART <br /> PROFILE</p>
                <p className=" text-2xl " >create and support donations for up to 5 charitable causes at once.</p>
                <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-[#37137F] !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
            </div>
        </div>
    )
}
