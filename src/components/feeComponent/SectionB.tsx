import { NextArrow } from "../svg";

export default function SectionB() {
    return (
        <div className=' w-full py-14 flex items-center flex-col gap-6 px-12 bg-[#F0F2FF] justify-center text-[#37137F] ' >
            <div className=' w-full max-w-[1153px] text-[32px] rounded-t-[44px] px-6 flex justify-center items-center border-[3px] border-[#37137F1A] h-[92px] ' >
                The following illustration is based on a £10.00 donation made.
            </div>
            <div className=" w-full max-w-[1153px] flex items-center justify-between font-axiformablack " >
                <div className=" w-[355px] bg-[#37137F1A] h-[180px] rounded-[16px] flex justify-center items-center " style={{ boxShadow: "0px 4px 4px 0px #00000040" }} >
                    <p className=" text-[32px] text-center leading-[48px] " >
                        Donated<br /> Amount
                    </p>
                </div>
                <NextArrow />
                <div className=" w-[355px] bg-[#37137F1A]  h-[180px] rounded-[16px] flex justify-center items-center " style={{ boxShadow: "0px 4px 4px 0px #00000040" }} >
                    <p className=" text-[48px] leading-[48px] " >
                        £10
                    </p>
                </div>
            </div>
            <div className=" w-full max-w-[1153px] flex items-center justify-between font-axiformablack " >
                <div className=" w-[355px] bg-[#37137F1A] h-[180px] rounded-[16px] flex justify-center items-center " style={{ boxShadow: "0px 4px 4px 0px #00000040" }} >
                    <p className=" text-[32px] text-center leading-[48px] " >
                        Transaction<br /> Fees
                    </p>
                </div>
                <NextArrow />
                <div className=" w-[355px] bg-[#37137F1A]  h-[180px] rounded-[16px] flex justify-center items-center " style={{ boxShadow: "0px 4px 4px 0px #00000040" }} >
                    <p className=" text-[48px] leading-[48px] " >
                        £1.00 <span className=" text-[25px] " >(+50p)</span>
                    </p>
                </div>
            </div>
            <div className=" w-full max-w-[1153px] flex items-center justify-between text-secondary font-axiformablack " >
                <div className=" w-[355px] bg-primary h-[180px] rounded-[16px] flex justify-center items-center " style={{ boxShadow: "0px 4px 4px 0px #00000040" }} >
                    <p className=" text-[32px] text-center leading-[48px] " >
                        Charity<br /> Receives
                    </p>
                </div>
                <NextArrow />
                <div className=" w-[355px] bg-primary  h-[180px] rounded-[16px] flex justify-center items-center " style={{ boxShadow: "0px 4px 4px 0px #00000040" }} >
                    <p className=" text-[48px] leading-[48px] " >
                        £10
                    </p>
                </div>
            </div>
            <div className=" gap-3 mt-4 text-center flex flex-col " >
                <p className=" text-[32px] font-axiformablack " >When Do Charities Receive Donations?</p>
                <p className=" font-axiformamedium text-[30px] leading-[45px] " >Once a charity has provided their details and been verified, donations are released to the charity on a monthly cycle. Keep track of your donations on the app.</p>
            </div>
        </div>
    )
}
