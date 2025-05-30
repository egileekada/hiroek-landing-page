

export default function SectionB() {
    return (
        <div className=' w-full py-14 flex lg:flex-row relative lg:gap-9 gap-6 items-center px-6 lg:px-12 bg-[#F0F2FF] justify-center text-[#37137F] ' >
            <div className=" w-fit " >
                <div className=' lg:w-[400px] font-black relative z-10 flex flex-col gap-3 text-lg lg:text-[38px] lg:leading-[120%] ' >
                    <p  >Hiroek is so intuitive, you already know how to use it..</p>
                </div>
            </div>
            <div className=" w-full font-medium font-axiformamedium lg:text-2xl relative z-10 lg:leading-[39px] flex flex-col gap-4  " >
                {/* <p className="  " >
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
                </p>  */}
                <p className=" font-semibold lg:text-[32px] leading-[120%] max-w-[728px] " >
                    A Dedicated Mobile Platform That Brings Your Favourite Events Right to Your Fingertips.
                    <br /><br />
                    Looking to Create Your Own Event? We've Got You Covered!
                    Easily create and manage events, whether it's with friends or colleagues.
                    <br /><br />
                    Hiroek is more than an event organisation tool; it's a platform for building vibrant communities around shared interests.
                </p>
            </div>
            <img alt="hand" src="/images/hand.png" className=" absolute bottom-0 w-[300px] left-[9%] opacity-5 object-cover " />
        </div>
    )
}
