
import { navlink } from '../constant'
import { CustomButton } from '.'
import { Touch } from '../svg'
import { Popover } from '@radix-ui/themes'
import { IoMenu } from 'react-icons/io5'
import * as Dialog from '@radix-ui/react-dialog';

export default function Navbar() {

    // const 

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
                    {/* <CustomButton text='Get In Touch' type="button" size={"3"} style={{ background: "linear-gradient(90deg, #8C43FE 0%, #37137F 100%)" }} className=" rounded-[10px] text-base !font-bold text-white " icon={
                        <Touch />
                    } /> */}
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <div role='button' >
                                <CustomButton text='Get In Touch' type="button" size={"3"} style={{ background: "linear-gradient(90deg, #8C43FE 0%, #37137F 100%)" }} className=" rounded-[10px] text-base !font-bold text-white " icon={
                                    <Touch />
                                } />
                            </div>
                        </Dialog.Trigger>
                        <Dialog.Portal>
                            <Dialog.Overlay className="DialogOverlay" />
                            <Dialog.Content className="DialogContent">
                                <Dialog.Title className="DialogTitle">Edit profile</Dialog.Title>
                                <Dialog.Description className="DialogDescription">
                                    Make changes to your profile here. Click save when you're done.
                                </Dialog.Description>
                                <fieldset className="Fieldset">
                                    <label className="Label" htmlFor="name">
                                        Name
                                    </label>
                                    <input className="Input" id="name" defaultValue="Pedro Duarte" />
                                </fieldset>
                                <fieldset className="Fieldset">
                                    <label className="Label" htmlFor="username">
                                        Username
                                    </label>
                                    <input className="Input" id="username" defaultValue="@peduarte" />
                                </fieldset>
                                <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
                                    <Dialog.Close asChild>
                                        <button className="Button green">Save changes</button>
                                    </Dialog.Close>
                                </div>
                                {/* <Dialog.Close asChild>
                                    <button className="IconButton" aria-label="Close">
                                        <Cross2Icon />
                                    </button>
                                </Dialog.Close> */}
                            </Dialog.Content>
                        </Dialog.Portal>
                    </Dialog.Root>
                    <div role='button' className=' h-[40px] bordergradient text-base font-bold px-6 rounded-[10px] flex justify-center items-center text-[#37137F] ' >
                        Login
                    </div>
                </div>
                <Popover.Root>
                    <Popover.Trigger>
                        <button className=' text-primary lg:hidden ' >
                            <IoMenu size={"35px"} />
                        </button>
                    </Popover.Trigger>
                    <Popover.Content maxWidth={"300px"}>
                        <div className=' flex flex-col w-fit gap-4 ' >
                            {navlink.map((item, index) => {
                                return (
                                    <div key={index} role='button' >
                                        <a href={item?.link} className=' text-[#37137F] text-lg lg:leading-[20px] font-black ' >{item?.name}</a>
                                    </div>
                                )
                            })}

                            <CustomButton text='Get In Touch' type="button" size={"3"} style={{ background: "linear-gradient(90deg, #8C43FE 0%, #37137F 100%)" }} className=" rounded-[10px] text-base !font-bold text-white " icon={
                                <Touch />
                            } />
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
