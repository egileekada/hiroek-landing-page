
import { CustomButton } from '../shared'
import { AppleStore, Forwardarrowcolored, GooglePlay } from '../svg'

export default function SectionC() {
    return (
        <div className=' py-20 relative text-[#F0F2FF] px-6 lg:px-12 flex w-full gap-3 items-center flex-col ' >
            <p className=' text-xl lg:text-[38px] lg:leading-[57px] font-black text-center lg:max-w-[1115px] font-axiformamedium ' >Giving has long been underrated and underserved, so we're developing technology that makes a difference. Elevate your fundraising efforts and sign up now.</p>
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
            <img alt="hand" src="/images/blackhand.png" className=" absolute bottom-0 left-[9%] h-[295px] object-cover opacity-10 " />
            <img alt="cannon" src="/images/cannon.png" className=" absolute bottom-0 right-[2%] h-[100%] object-cover " />
        </div>
    )
}
