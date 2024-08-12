import { Button, ButtonProps } from '@radix-ui/themes'
interface IProps {
    type: "button" | "submit" | "reset";
    text: string;
    icon?: any;
}

export default function CustomButton({
    type,
    text,
    icon,
    ...rest
}: IProps & ButtonProps) {

    return (
        <div role='button' className=' !cursor-pointer relative z-20 ' > 
            <Button {...rest} type={type} >
                <p className=' paytone-one-regular ' >{text}</p>
                {icon}
            </Button>
        </div>
    )
}
