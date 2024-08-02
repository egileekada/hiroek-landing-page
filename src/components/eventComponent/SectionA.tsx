import { CustomButton } from "../shared";
import { Forwardarrow } from "../svg";


export default function SectionA() {
    return ( 
        <div className=' pb-24 lg:pb-28 pt-36 w-full text-left px-6 lg:px-14 flex gap-4 flex-col text-secondary ' >
            <p className=' text-3xl lg:text-[72px] lg:leading-[84px] max-w-[1187px] ' >Elevate Your Events, Connect with Your Audience, and Make a Lasting Impact</p>
            <p className=' text-lg lg:text-2xl lg:leading-[36px] max-w-[1024px] ' >For driving impact, for building community, for next gen. fundraising tools join our growing list of partners</p>
            <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-orangecolor !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
        </div>
    )
}
