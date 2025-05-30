
import { navlink } from '../constant'
import { Popover } from '@radix-ui/themes'
import { IoMenu } from 'react-icons/io5'
import { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io' 
import { Logo } from '../svg'
// import GetInTouch from './GetInTouch'

export default function Navbar({ yaxis }: {yaxis: any}) {

    // const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)
    const [showLink, setShowLink] = useState(false) 
    console.log(scrollY);


    return (
        <div className=' w-full bg-transparent py-4 ' >
            <div className={` w-full h-[92px] px-3 lg:px-8 flex items-center ${yaxis === 0 ? " bg-transparent " : " bg-[#F0F2FF] shadow-lg "} justify-between rounded-[20px] `} >
                <a href='/' >
                    {/* <img alt='logo' className=' h-[40px] lg:h-[54px] ' src={yaxis === 0 ? '/images/whitelogo.png' : '/images/logo.svg' }/> */}
                    <Logo color={yaxis === 0 ? "white" : ""} />
                </a>
                <div className=' hidden gap-2 h-full w-fit ml-auto items-center ' >
                    {navlink.map((item, index) => {
                        if (item?.name === "About Us") {
                            return (
                                <div key={item?.name} className=' relative h-full ' >
                                    <div onClick={() => setShowLink((prev) => !prev)} key={index} className={` ${showLink ? "bg-gradient-to-b from-[#37137F] to-[#8C43FE] text-white" : ""} h-full text-[#37137F] px-4 bg-gradient-to-b  hover:from-[#37137F] hover:to-[#8C43FE] hover:text-secondary flex justify-center gap-3 items-center `} role='button' >
                                        <a className=' leading-[20px] font-black w-[80px]' >{item?.name}</a>
                                        {!showLink ? (
                                            <IoIosArrowDown />
                                        ) : (
                                            <IoIosArrowUp />
                                        )}
                                    </div>
                                    {showLink && (
                                        <div className=' absolute top-[92px] -left-[25%] rounded-b-lg w-[200px] h-fit bg-secondary z-50 ' >
                                            <a href='/about-us' className='  h-[70px] text-[#37137F] px-4 bg-gradient-to-b  hover:from-[#37137F] hover:to-[#8C43FE] hover:text-secondary flex justify-center items-center ' >
                                                Why Hiroek?
                                            </a>
                                            <a href='/mission' className=' border-t-2 rounded-b-lg  h-[70px] text-[#37137F] px-4 bg-gradient-to-b  hover:from-[#37137F] hover:to-[#8C43FE] hover:text-secondary flex justify-center items-center ' >
                                                Our Mission
                                            </a>
                                        </div>
                                    )}
                                    {showLink && (
                                        <div onClick={() => setShowLink(false)} className=' bg-black bg-opacity-10 fixed inset-0 ' />
                                    )}
                                </div>
                            )
                        } else {
                            return (
                                <a href={item?.link} key={index} className={` px-4 h-full text-[#37137F] bg-gradient-to-b  hover:from-[#37137F] hover:to-[#8C43FE] hover:text-secondary flex justify-center items-center `} role='button' >
                                    {item?.name === "For Charities" ? (
                                        <p className=' leading-[20px] w-[110px] font-black ' >{item?.name}</p>
                                    ) : (
                                        <p className=' leading-[20px] font-black ' >{item?.name}</p>
                                    )}
                                </a>
                            )
                        }
                    })}
                    {/* <GetInTouch setOpen={clickHandler} open={open} /> */}
                    {/* <div role='button' className=' h-[40px] bordergradient text-base font-bold px-6 rounded-[10px] flex justify-center items-center text-[#37137F] ' >
                        Login
                    </div> */}
                </div>
                <Popover.Root open={show} onOpenChange={setShow} >
                    <Popover.Trigger>
                        <button role='button' onClick={() => setShow(true)} className=' text-primary ' >
                            <IoMenu color={yaxis === 0 ? "white" : ""} size={"35px"} />
                        </button>
                    </Popover.Trigger>
                    <Popover.Content >
                        <div className=' flex flex-col w-full gap-6 py-3 text-center max-w-[190px] ' >
                            {navlink.map((item, index) => {
                                if (item?.name === "About Us") {
                                    return (
                                        <div key={index} className=' flex gap-4 flex-col w-full items-center ' role='button' >
                                            <div role='button' onClick={() => setShowLink((prev) => !prev)} className=' flex items-center w-fit gap-2  ' >
                                                <p className=' text-[#37137F] text-lg lg:leading-[20px] font-bold ' >{item?.name}</p>
                                                {!showLink ? (
                                                    <IoIosArrowDown />
                                                ) : (
                                                    <IoIosArrowUp />
                                                )}
                                            </div>
                                            {showLink && (
                                                <div className=' w-full flex flex-col gap-5 ' >
                                                    <a href='/about-us' className='  text-[#37137F] pl-2 font-bold ' >
                                                        Why Hiroek?
                                                    </a>
                                                    <a href='/mission' className=' rounded-b-lg  text-[#37137F] pl-2 font-bold ' >
                                                        Our Mission
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div key={index} className='' role='button' >
                                            <a href={item?.link} onClick={() => setShow(false)} className=' text-[#37137F]  text-lg lg:leading-[20px] font-bold ' >{item?.name}</a>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </Popover.Content>
                </Popover.Root>
            </div>
        </div>
    )
}
