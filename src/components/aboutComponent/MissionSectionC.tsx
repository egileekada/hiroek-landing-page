
import { CustomButton } from '../shared'
import { AppleStore, Forwardarrowcolored, GooglePlay } from '../svg'

export default function SectionC() {
    return (
        <div className=' py-20 text-[#F0F2FF] px-6 lg:px-12 flex w-full gap-3 items-center flex-col ' >
            <p className=' text-2xl lg:text-[38px] lg:eading-[57px] font-axiformamedium text-center max-w-[1115px] ' >Our mission is to empower you via our technology and innovation to seamlessly involve your community in your efforts to raise awareness for your cause and create a positive impact.</p>
            <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-white !text-[#37137F] !font-black !w-fit !shadow-lg " icon={
                <Forwardarrowcolored />
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
    )
}
