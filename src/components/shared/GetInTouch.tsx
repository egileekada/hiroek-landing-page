
import * as Dialog from '@radix-ui/react-dialog';
import { CustomButton } from '.'
import { CloseIcon, Forwardarrow, Touch } from '../svg'
import CustomInput from './customInput';
import toast from "react-hot-toast";
import { useMutation } from 'react-query';
import httpService from '../../services/httpService';
import { useEffect, useState } from 'react';

interface IProps {
    open: boolean,
    setOpen: (by: boolean) => void,
    text?: string,
    span?: boolean,
    no_underline?: boolean,
    activatebtn?: boolean
}

export default function GetInTouch({ open, setOpen, text, span, no_underline, activatebtn }: IProps) {

    // const { setEmail, setFullname, setMessage, setOrganizationName, isLoading, mutate, message, email, fullname, organizationName } = useMessage() 


    const [email, setEmail] = useState("")
    const [fullname, setFullname] = useState("")
    const [organizationName, setOrganizationName] = useState("")
    const [error, setError] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(() => {
        setError(false)
    }, [open])


    const { mutate, isLoading } = useMutation({
        mutationFn: () => httpService.post(`/core/get-in-touch`, {
            email: email,
            fullname: fullname,
            organizationName: organizationName,
            message: message
        }),
        onError: (error: any) => {
            console.log(error?.response?.data?.error?.details?.message);

            toast.error(error?.response?.data?.error?.details?.message)
        },
        onSuccess: () => {
            toast.success("Message Sent")
            setEmail("")
            setFullname("")
            setOrganizationName("")
            setMessage("")
            setOpen(false)
        },
    });

    const submit = () => {
        if (!email) {
            // toast.error("Enter Email")
            setError(true)
        } else if (!fullname) {
            // toast.error("Enter Full Name")
            setError(true)
        } else if (!organizationName) {
            // toast.error("Enter Organization Name")
            setError(true)
        } else if (!message) {
            // toast.error("Enter Message")
            setError(true)
        } else {
            setError(false)
            mutate()
        }
    }

    return (
        <div className=' w-fit relative ' >

            {(text && span && !activatebtn) && (
                <span onClick={() => setOpen(true)} role="button" className={no_underline ? ' font-medium text-lg ' : ' underline '}  >{text ? text : "Get In Touch"}</span>
            )}
            {(!text && !activatebtn) && (
                <CustomButton onClick={() => setOpen(true)} text='Get In Touch' type="button" size={"3"} style={{ background: "linear-gradient(90deg, #8C43FE 0%, #37137F 100%)" }} className=" rounded-[10px] text-base !font-bold text-white " icon={
                    <Touch />
                } />
            )}
            {(activatebtn) && (
                <CustomButton onClick={() => setOpen(true)} style={{ boxShadow: "3px 3px 0px 0px #37137F80", background: "linear-gradient(180deg, #8C43FE 0%, #37137F 81%)" }} text="Activate your account" size={"4"} type="button" className="  !cursor-pointer lg:ml-auto !text-white font-bold !w-fit !shadow-lg " icon={
                    <Forwardarrow />
                } />
            )}
            <Dialog.Root open={open} >
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
                                    <p className=' text-[#37137FBF] font-axiformamedium text-sm font-semibold ' >Full Name</p>
                                    <div className={` border ${(error && !fullname) ? " border-red-600 text-red-600 " : " border-[#1E1E1E26] "} rounded-lg `} >
                                        <CustomInput onChange={setFullname} name="fullname" type="text" placeholder="Enter Full Name" />
                                    </div>
                                </div>
                                <div className=' flex w-full flex-col ' >
                                    <p className=' text-[#37137FBF] font-axiformamedium text-sm font-semibold ' >Email</p>
                                    <div className={` border ${(error && !email) ? " border-red-600 text-red-600 " : " border-[#1E1E1E26] "} rounded-lg `} >
                                        <CustomInput onChange={setEmail} name="email" type="email" placeholder="Enter Email" />
                                    </div>
                                </div>
                                <div className=' flex w-full flex-col ' >
                                    <p className=' text-[#37137FBF] font-axiformamedium text-sm font-semibold ' >Name Of Organisation</p>
                                    <div className={` border ${(error && !organizationName) ? " border-red-600 text-red-600 " : " border-[#1E1E1E26] "} rounded-lg `} >
                                        <CustomInput onChange={setOrganizationName} name="organizationName" type="text" placeholder="Enter Name Of Organisation" />
                                    </div>
                                </div>
                                <div className=' flex w-full flex-col ' >
                                    <p className=' text-[#37137FBF] font-axiformamedium text-sm font-semibold ' >Message</p>
                                    <div className={` border ${(error && !message) ? " border-red-600 text-red-600 " : " border-[#1E1E1E26] "} rounded-lg `}>

                                        <CustomInput onChange={setMessage} name="message" type="text" textarea={true} placeholder="Enter Name Of Organisation" />
                                    </div>
                                </div>
                                <button onClick={submit} className=' w-full rounded-lg h-[50px] z-20 relative bg-primary text-white text-center ' >{isLoading ? "Loading..." : "Submit"}</button>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}
