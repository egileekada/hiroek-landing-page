// import { CustomButton } from "../shared";
// import { Forwardarrow } from "../svg";


export default function SectionA() {
    return ( 
        <div className=' pb-24 lg:pb-36 pt-48 w-full text-left px-6 lg:px-14 flex relative gap-4 items-center flex-col text-secondary ' >
            <p className=' text-3xl lg:text-[60px] lg:leading-[64px] max-w-[1187px] relative z-10 text-center ' >Elevate Your Events, Connect with Your Audience, and Make a Lasting Impact</p>
            {/* <p className=' text-lg lg:text-2xl lg:leading-[36px] max-w-[1024px] relative z-10 ' >For driving impact, for building community, for next gen. fundraising tools join our growing list of partners</p>
            <CustomButton style={{ boxShadow: "3px 3px 0px 0px #37137F80" }} text="Get Started" size={"4"} type="button" className=" !bg-orangecolor !relative z-10 !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } /> */}
                <img alt="bluestroke" src="/images/bluestroke.png" className=" object-cover inset-0 absolute opacity-5 w-full h-full " />
        </div>
    )
}
