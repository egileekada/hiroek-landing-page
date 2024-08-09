
// import { CustomButton } from '../shared'
import { AppleStore, GooglePlay } from '../svg'

export default function SectionC() {
    return (
        <div className=' py-20 text-[#F0F2FF] px-6 lg:px-12 relative flex w-full gap-6 items-center flex-col ' >
            <p className=' text-2xl lg:text-[38px] lg:leading-[47px] relative z-10 font-axiformamedium text-center max-w-[1115px] ' >Our mission is to empower you via our technology and innovation to seamlessly involve your community in your efforts to raise awareness for your cause and create a positive impact.</p>
            {/* <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-white !text-[#37137F] !relative z-10  !font-black !w-fit !shadow-lg " icon={
                <Forwardarrowcolored />
            } /> */}
            <div className=" flex gap-4 relative z-10 items-center mt-5 " >
                <a href="https://play.google.com/store/apps/details?id=com.hiroek.app.hiroek" target="_blank"  className=' w-full lg:w-[187.45px] '  >
                    <GooglePlay />
                </a>
                <a href="https://apps.apple.com/ng/app/hiroek/id6474194083" target="_blank" className=' w-full lg:w-[187.45px] ' >
                    <AppleStore />
                </a>
            </div>
            <img alt="hand" src="/images/blackhand.png" className=" absolute bottom-0 lg:block hidden left-[9%] h-[295px] object-cover opacity-10 " />
            <img alt="cannon" src="/images/cannon.png" className=" absolute bottom-0 lg:block hidden right-[2%] h-[100%] object-cover " />
        </div>
    )
}
