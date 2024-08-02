
import { CustomButton } from '../shared'
import { AppleStore, Forwardarrowcolored, GooglePlay } from '../svg'

export default function SectionC() {
    return (
        <div className=' py-20 text-[#F0F2FF] px-6 lg:px-12 relative flex w-full gap-6 items-center flex-col ' >
            <p className=' text-2xl lg:text-[38px] lg:eading-[57px] relative z-10 font-axiformamedium text-center max-w-[1115px] ' >Our mission is to empower you via our technology and innovation to seamlessly involve your community in your efforts to raise awareness for your cause and create a positive impact.</p>
            <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-white !text-[#37137F] !relative z-10  !font-black !w-fit !shadow-lg " icon={
                <Forwardarrowcolored />
            } />
            <div className=" flex gap-4 relative z-10 items-center mt-5 " >
                <div role="button" >
                    <GooglePlay />
                </div>
                <div role="button" >
                    <AppleStore />
                </div>
            </div>
            <img alt="hand" src="/images/blackhand.png" className=" absolute bottom-0 left-[9%] h-[295px] object-cover opacity-10 " />
            <img alt="cannon" src="/images/cannon.png" className=" absolute bottom-0 right-[2%] h-[100%] object-cover " />
        </div>
    )
}
