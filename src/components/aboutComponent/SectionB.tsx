

export default function SectionB() {
    return (
        <div className=' w-full py-14 flex lg:flex-row flex-col relative lg:gap-0 gap-6 items-center px-6 lg:px-12 bg-[#F0F2FF] justify-center text-[#37137F] ' >
            {/* <div className=' lg:max-w-[500px] font-black relative z-10 flex flex-col gap-3 text-lg lg:text-[38px] lg:leading-[57px] ' >
                <p className=" text-3xl lg:text-[40px] lg:leading-[50px] " >Why Hiroek?</p>
                <p  >Hiroek is on a mission to unlock the good in everyone, driven by humanity's potential to create positive change.</p>
            </div> */}
            <div className="  font-medium font-axiformamedium lg:text-2xl relative z-10 lg:leading-[39px] flex flex-col gap-4  " >
                {/* <p className="text-3xl lg:text-[40px] lg:leading-[50px] text-center " >Why Hiroek</p> */}
                <p className="  " >
                    {`
                        Hiroek is designed to bring people together around causes they care about. Whether it's friends, work colleagues, or community groups, Hiroek makes it easy to create, manage, and participate in events to support various charitable causes.  \n
                    `}
                </p>
                <ul className=" list-disc px-8 " >
                    <li>A dedicated mobile platform making It easier for you to come together with your peers to support causes you care about.</li>
                    <li>Free Next-Generation app for philanthropists, supporters and action-takers.</li>
                    <li>A tool for grass root based organisation to create and expand their spaces to amplify the crucial role they play in advancing social well-being.</li>
                </ul>
                <p>
                    {`
                        Hiroek is not just a tool for organising events but also a platform for building a community around shared causes. We aim to empower individuals and groups to make a meaningful impact.`
                    }
                </p>
                {/* <p>{`We’re empowering a new generation of philanthropists, supporters and action-takers. with a mobile first platform making It easier for you to come together with your peers to support causes you care about.`}</p>
                <p>{`An app for positive peer to peer support. A tool for grass root based organisation to create and expand their spaces to amplify the crucial role they play in advancing social well-being.`}</p> */}
            </div>
            <img alt="hand" src="/images/hand.png" className=" absolute bottom-0 left-[9%] opacity-5 object-cover " />
        </div>
    )
}
