
// import { CustomButton } from '../shared'
import { AppleStore, GooglePlay } from '../svg'

export default function SectionC() {
    return (
        <div className=' py-20 relative text-[#F0F2FF] px-6 lg:px-12 flex w-full gap-3 items-center flex-col ' >
            <p className=' text-xl lg:text-[38px] lg:leading-[57px] font-black text-center lg:max-w-[1115px] font-axiformamedium ' >Be on the forefront of changing what it means to be a hero. Empower your inner hero by helping enforce changes where it really matters.</p>
            {/* <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-white !text-[#37137F] !font-black !w-fit !shadow-lg " icon={
                <Forwardarrowcolored />
            } /> */}
            <div className=" flex gap-4 items-center mt-5 " >
                <a href="https://play.google.com/store/apps/details?id=com.hiroek.app.hiroek" target="_blank" className=' w-full lg:w-[187.45px] '  >
                    <GooglePlay />
                </a>
                <a href="https://apps.apple.com/ng/app/hiroek/id6474194083" target="_blank" className=' w-full lg:w-[187.45px] ' >
                    <AppleStore />
                </a>
            </div>
            <img alt="hand" src="/images/blackhand.png" className=" absolute bottom-0 left-[9%] h-[295px] lg:block hidden object-cover opacity-10 " />
            <img alt="cannon" src="/images/cannon.png" className=" absolute bottom-0 right-[2%] h-[100%] lg:block hidden object-cover " />
        </div>
    )
}
