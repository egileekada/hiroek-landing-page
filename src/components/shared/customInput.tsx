// import { TextField } from "@radix-ui/themes";  


interface IProps {
    name: string;
    type: "number" | "text" | "email" | "date" | "password" | "search" | "time" | "hidden" | "datetime-local" | "month" | "tel" | "url" | "week" | undefined
    placeholder: string,
    disable?: boolean
    value?: any,
    ref?: any,
    hint?: null | string;
    textColor?: string;
    borderRadius?: string,
    textarea?: boolean,
    onChange?: any
}

export default function CustomInput({ name, textarea, type, placeholder, disable, value, borderRadius, onChange }: IProps) {
    return (
        <div>
            {textarea && (
                <textarea onChange={(e)=> onChange(e.target.value)} value={value} name={name} placeholder={placeholder} className=" h-[90px] w-full rounded-lg px-3 py-2 text-sm outline-none  " />
            )}
            {!textarea && 
                <div className=" w-full h-[45px] relative " >
                    <input
                        onChange={(e)=> onChange(e.target.value)}
                        type={type} style={{ borderRadius: borderRadius ?? "5px" }} placeholder={placeholder} disabled={disable} value={value} name={name} className={"  w-full h-[45px] rounded-lg px-3   text-sm "} />
                </div>
            }
        </div>
    )
}

