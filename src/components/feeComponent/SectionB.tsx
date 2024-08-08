
import { NextArrow } from "../svg";
import { RiArrowDownFill } from "react-icons/ri";

export default function SectionB() {
    return (
        <div className=' w-full py-14 flex items-center flex-col gap-6 px-6 lg:px-12 bg-[#F0F2FF] justify-center text-[#37137F] ' >
            <div className=' w-full lg:max-w-[1153px] text-3xl lg:text-[32px] rounded-t-[44px] px-6 flex justify-center items-center border-[3px] border-[#37137F1A] lg:py-0 py-2 lg:h-[92px] ' >
                Example of a Donation Preview based off a £10 Donation.
            </div>
            <div className=" w-full max-w-[1153px] flex lg:flex-row flex-col lg:gap-0 gap-2 items-center justify-between font-axiformablack " >
                <div className=" w-[355px] bg-[#37137F1A] h-[180px] rounded-[16px] flex justify-center items-center " style={{ boxShadow: "0px 4px 4px 0px #00000040" }} >
                    <p className=" text-[32px] text-center leading-[48px] " >
                        Donated<br /> Amount
                    </p>
                </div>
                <div className=" lg:block hidden " >
                    <NextArrow />
                </div>
                <div className=" lg:hidden " >
                    <RiArrowDownFill size={"30px"} />
                </div>
                <div className=" w-[355px] bg-[#37137F1A]  h-[180px] rounded-[16px] flex justify-center items-center " style={{ boxShadow: "0px 4px 4px 0px #00000040" }} >
                    <p className=" text-[48px] leading-[48px] " >
                        £10
                    </p>
                </div>
            </div>
            <div className=" w-full max-w-[1153px] flex lg:flex-row flex-col lg:gap-0 gap-2 items-center justify-between font-axiformablack " >
                <div className=" w-[355px] bg-[#37137F1A] h-[180px] rounded-[16px] flex justify-center items-center " style={{ boxShadow: "0px 4px 4px 0px #00000040" }} >
                    <p className=" text-[32px] text-center leading-[48px] " >
                        Transaction<br /> Fees
                    </p>
                </div>
                <div className=" lg:block hidden " >
                    <NextArrow />
                </div>
                <div className=" lg:hidden " >
                    <RiArrowDownFill size={"30px"} />
                </div>
                <div className=" w-[355px] bg-[#37137F1A]  h-[180px] rounded-[16px] flex justify-center items-center " style={{ boxShadow: "0px 4px 4px 0px #00000040" }} >
                    <p className=" text-[48px] leading-[48px] " >
                        £1.00 <span className=" text-[25px] " >(+50p)</span>
                    </p>
                </div>
            </div>
            <div className=" w-full max-w-[1153px] flex lg:flex-row flex-col text-secondary lg:gap-0 gap-2 items-center justify-between font-axiformablack " >
                <div className=" w-[355px] bg-primary h-[180px] rounded-[16px] flex justify-center items-center " style={{ boxShadow: "0px 4px 4px 0px #00000040" }} >
                    <p className=" text-[32px] text-center leading-[48px] " >
                        Charity<br /> Receives
                    </p>
                </div>
                <div className=" lg:block hidden " >
                    <NextArrow />
                </div>
                <div className=" lg:hidden text-primary " >
                    <RiArrowDownFill size={"30px"} />
                </div>
                <div className=" w-[355px] bg-primary  h-[180px] rounded-[16px] flex justify-center items-center " style={{ boxShadow: "0px 4px 4px 0px #00000040" }} >
                    <p className=" text-[48px] leading-[48px] " >
                        £10
                    </p>
                </div>
            </div>
            <div className=" gap-3 mt-4 text-center flex flex-col " >
                <p className=" text-3xl lg:text-[32px] font-axiformablack " >When Do Charities Receive Donations?</p>
                <p className=" font-axiformamedium text-lg lg:text-[30px] lg:leading-[45px] " >Once a charity has provided their details and been verified, donations are released to the charity on a monthly cycle. Keep track of your donations on the app.</p>
            </div>
        </div>
    )
}
