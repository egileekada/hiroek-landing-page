
import { navlink } from '../constant'
import { CustomButton } from '.'
import { CloseIcon, Touch } from '../svg'
import { Popover } from '@radix-ui/themes'
import { IoMenu } from 'react-icons/io5'
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from 'react'

export default function Navbar() {

    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false)

    const clickHandler =() => {
        setShow(false)
        setOpen(true)
    }

    function GetInTouch() {
        return (
            <Dialog.Root open={open} >
                <Dialog.Trigger asChild>
                    <div onClick={() => clickHandler()} role='button' >
                        <CustomButton text='Get In Touch' type="button" size={"3"} style={{ background: "linear-gradient(90deg, #8C43FE 0%, #37137F 100%)" }} className=" rounded-[10px] text-base !font-bold text-white " icon={
                            <Touch />
                        } />
                    </div>
                </Dialog.Trigger>
                <Dialog.Portal  >
                    <Dialog.Overlay onClick={() => setOpen(false)} className="DialogOverlay" />
                    <Dialog.Content className="DialogContent relative ">
                        {/* <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
                        <Dialog.Description className="DialogDescription">
                            Make changes to your profile here. Click save when you're done.
                        </Dialog.Description> */}
                        <div onClick={() => setOpen(false)} role='button' className=' absolute top-4 right-4 ' >
                            <CloseIcon />
                        </div>
                        <div className=' w-full flex flex-col text-primary ' >
                            <p className=' font-axiformablack text-2xl text-center ' >Get In Touch</p>
                            <p className=' font-axiformamedium text-center ' >Send Us A Message If You Have Any Questions</p>
                            <div className=' w-full flex flex-col mt-6 gap-4 ' >
                                <div className=' flex w-full flex-col ' >
                                    <p className=' text-[#37137FBF] font-axiformamedium ' >Full Name</p>
                                    <div className=' border border-[#1E1E1E26] rounded-lg ' >
                                        <input className=' w-full h-[40px] rounded-lg px-4 !border border-[#1E1E1E26] ' />
                                    </div>
                                </div>
                                <div className=' flex w-full flex-col ' >
                                    <p className=' text-[#37137FBF] font-axiformamedium ' >Email</p>
                                    <div className=' border border-[#1E1E1E26] rounded-lg ' >
                                        <input className=' w-full h-[40px] rounded-lg px-4 !border border-[#1E1E1E26] ' />
                                    </div>
                                </div>
                                <div className=' flex w-full flex-col ' >
                                    <p className=' text-[#37137FBF] font-axiformamedium ' >Company Name</p>
                                    <div className=' border border-[#1E1E1E26] rounded-lg ' >
                                        <input className=' w-full h-[40px] rounded-lg px-4 !border border-[#1E1E1E26] ' />
                                    </div>
                                </div>
                                <div className=' flex w-full flex-col ' >
                                    <p className=' text-[#37137FBF] font-axiformamedium ' >Message</p>
                                    <div className=' rounded-lg ' >
                                        <textarea className=' w-full h-[90px] rounded-lg px-4 !border border-[#1E1E1E26] ' />
                                    </div>
                                </div>
                                <button className=' w-full rounded-lg h-[50px] bg-primary text-white text-center ' >Submit</button>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

        )
    }

    return (
        <div className=' w-full bg-transparent px-4 lg:px-10 py-4 ' >
            <div className=' w-full shadow-lg h-[92px] px-6 lg:px-8 flex items-center bg-[#F0F2FF] justify-between rounded-[20px] ' >
                <a href='/' >
                    <img alt='logo' className=' h-[40px] lg:h-[54px] ' src='/images/logo.svg' />
                </a>
                <div className=' hidden lg:flex gap-6 items-center ' >
                    {navlink.map((item, index) => {
                        return (
                            <div key={index} role='button' >
                                <a href={item?.link} className=' text-[#37137F] leading-[20px] font-black ' >{item?.name}</a>
                            </div>
                        )
                    })}
                    <GetInTouch />
                    <div role='button' className=' h-[40px] bordergradient text-base font-bold px-6 rounded-[10px] flex justify-center items-center text-[#37137F] ' >
                        Login
                    </div>
                </div>
                <Popover.Root open={show} >
                    <Popover.Trigger>
                        <button role='button' onClick={()=> setShow(true)} className=' text-primary lg:hidden ' >
                            <IoMenu size={"35px"} />
                        </button>
                    </Popover.Trigger>
                    <Popover.Content maxWidth={"300px"}>
                        <div className=' flex flex-col w-fit gap-4 ' >
                            {navlink.map((item, index) => {
                                return (
                                    <div key={index} role='button' >
                                        <a href={item?.link} onClick={()=> setShow(false)} className=' text-[#37137F] text-lg lg:leading-[20px] font-black ' >{item?.name}</a>
                                    </div>
                                )
                            })} 
                            <GetInTouch />
                            <div role='button' className=' h-[40px] bordergradient text-base font-bold px-6 rounded-[10px] flex justify-center items-center text-[#37137F] ' >
                                Login
                            </div>
                        </div>
                    </Popover.Content>
                </Popover.Root>
            </div>
        </div>
    )
}
