
import * as Dialog from '@radix-ui/react-dialog';
import { CustomButton } from '.'
import { CloseIcon, Touch } from '../svg'

interface IProps {
    open: boolean,
    setOpen: (by: boolean) => void,
    text?: string,
    span?: boolean
}

export default function GetInTouch({ open, setOpen, text, span }: IProps) {


    return (
        <>
 
            {(text && span) && (
                <span onClick={() => setOpen(true)} role="button" className=' underline '  >{text ? text : "Get In Touch"}</span>
            )}
            <Dialog.Root open={open} >
                <Dialog.Trigger asChild>
                    <div onClick={() => setOpen(true)} role='button' >
                        {!text && (
                            <CustomButton text='Get In Touch' type="button" size={"3"} style={{ background: "linear-gradient(90deg, #8C43FE 0%, #37137F 100%)" }} className=" rounded-[10px] text-base !font-bold text-white " icon={
                                <Touch />
                            } />
                        )}
                        {(text && !span) && (
                            <div className=' items-center gap-2 flex ' >
                                <p className=' font-medium text-lg ' >{text ? text : "Get In Touch"}</p>
                                <Touch />
                            </div>
                        )}
                    </div>
                </Dialog.Trigger>

                <Dialog.Portal  >
                    <Dialog.Overlay onClick={() => setOpen(false)} className="DialogOverlay bg-black bg-opacity-40 " />
                    <Dialog.Content className="DialogContent relative ">
                        <div onClick={() => setOpen(false)} role='button' className=' absolute top-4 right-4 ' >
                            <CloseIcon />
                        </div>
                        <div className=' w-full flex flex-col text-primary ' >
                            <p className=' font-axiformablack text-2xl font-black text-center ' >Get In Touch</p>
                            <p className=' font-axiformamedium text-center ' >Send us a message if you have an inquiry. We will get back to you.</p>
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
                                    <p className=' text-[#37137FBF] font-axiformamedium ' >Name Of Organisation</p>
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
        </>
    )
}
