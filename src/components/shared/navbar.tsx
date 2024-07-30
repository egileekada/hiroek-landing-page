
import { navlink } from '../constant'
import { CustomButton } from '.'
import { Touch } from '../svg'

export default function Navbar() {
    return (
        <div className=' w-full bg-transparent px-10 py-4 ' >
            <div className=' h-[92px] w-full px-8 flex items-center bg-[#F0F2FF] justify-between rounded-[20px] ' >
                <img alt='logo' className=' h-[54px] ' src='/images/logo.svg' />
                <div className=' flex gap-3 items-center ' >
                    {navlink.map((item, index) => {
                        return(
                            <div key={index} role='button' >
                                <p className=' leading-[20px] font-bold ' >{item?.name}</p>
                            </div>
                        )
                    })}
                    <CustomButton text='Get In Touch' type="button" size={"3"} style={{background: "linear-gradient(90deg, #8C43FE 0%, #37137F 100%)"}} className=" rounded-[10px] text-base !font-bold text-white " icon={
                        <Touch />
                    } />
                    <div role='button' className=' h-[40px] bordergradient text-base font-bold px-6 rounded-[10px] flex justify-center items-center text-[#37137F] ' >
                        Login
                    </div> 
                </div>
            </div>
        </div>
    )
}
