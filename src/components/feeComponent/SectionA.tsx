

export default function SectionA() {
    return (
        <div className=' pb-24 lg:pb-32 px-6 pt-40 lg:pt-48 gap-5 flex flex-col w-full text-center items-center text-white relative ' >
            <div className=" flex flex-col gap-2 " >
                <p className=' paytone-one-regular text-2xl lg:text-[40px] lg:leading-[120%] font-black relative z-10 ' >Hiroek is free to use!</p>
                <p className=" text-lg lg:text-[24px] lg:leading-[120%] font-axiformamedium lg:font-axiformaheavy lg:max-w-[1282px] relative z-10 " >Yes you read it right, there is Zero Platform Fees. Create and participate in events without worrying about any hidden costs or fees.</p>
            </div>
            <div className=" flex flex-col gap-2 " >
                <p className=' paytone-one-regular text-2xl lg:text-[40px] lg:leading-[120%] font-black relative z-10 ' >Sell Globally. Get Paid Securely</p>
                <p className=" text-lg lg:text-[24px] lg:leading-[120%] font-axiformamedium lg:font-axiformaheavy lg:max-w-[1282px] relative z-10 " >With Hiroek, you can sell tickets and accept payments from attendees all over the world. No setup headaches, Just plug in and start selling.</p>
            </div>
            <div className=" flex flex-col gap-2 " >
                <p className=' paytone-one-regular text-2xl lg:text-[40px] lg:leading-[120%] font-black relative z-10 ' >What Happens When I Buy a Ticket</p>
                <p className=" text-lg lg:text-[24px] lg:leading-[120%] font-axiformamedium lg:font-axiformaheavy lg:max-w-[1282px] relative z-10 " >Buying tickets on Hiroek is quick and secure. We've partnered with Stripe to handle payments safely and efficiently.</p>
                <p className=" text-lg lg:text-[24px] lg:leading-[120%] font-axiformamedium lg:font-axiformaheavy lg:max-w-[1282px] relative z-10 " >When you purchase a ticket, a small processing fee is applied:</p>
                <p className=" text-lg lg:text-[24px] lg:leading-[120%] font-axiformamedium lg:font-axiformaheavy lg:max-w-[1282px] relative z-10 " >Stripe Fee: 1.5% + £0.20 per transaction</p>
                <p className=" text-lg lg:text-[24px] lg:leading-[120%] font-axiformamedium lg:font-axiformaheavy lg:max-w-[1282px] relative z-10 " >Hiroek Fee: £0.60 per ticket</p>
                <p className=" text-lg lg:text-[24px] lg:leading-[120%] font-axiformamedium lg:font-axiformaheavy lg:max-w-[1282px] relative z-10 " >That's it - no hidden costs, Just a smooth experience from checkout to confirmation</p>
            </div>

            <img alt="aboutbg" src="/images/aboutbg.png" className=" absolute inset-0 w-full h-full object-cover " />
        </div>
    )
}
