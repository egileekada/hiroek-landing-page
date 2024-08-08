

export default function SectionB() {
    return (
        <div className=' w-full bg-[#DF6951] relative text-[#F0F2FF]  ' >
            <div className=' w-full flex flex-col text-center bg-[#37137F] items-center gap-7 pt-14 pb-20 px-6 lg:px-12 rounded-3xl lg:rounded-[149px] ' >
                <p className=' relative z-10 text-3xl xl:text-[56px] lg:text-[45px] xl:leading-[60px] lg:leading-[50px] lg:max-w-[1100px] ' >“Maximise your Time Through Seamless Event Creation and Community Activation”</p>
                {/* <p className=' text-lg relative z-10 lg:text-[26px] lg:leading-[39px] max-w-[1050px] ' >Say goodbye to endless emails, chat messages and google search for events. Carve out a space in real life where your community members feel they belong.</p> */}
                <p className=' text-lg relative z-10 lg:text-[26px] lg:leading-[39px] max-w-[1150px] ' >We know that setting up events, coordinating members, collaborations, communication, and collecting donations takes precious time. We’re here to make your life easier and take the weight off your shoulders, so you can continue to focus on what matters.</p>
            </div>
            <img alt="bluestroke" src="/images/bluestroke.png" className=" object-cover inset-0 absolute opacity-5 w-full h-full " />
        </div>
    )
}
