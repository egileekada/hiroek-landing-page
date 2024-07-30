import { FirstSection, SecondSection, ThirdSection, ForthSection, FifthSection, SixthSection, SeventhSection, EigthSection, NinethSection } from '../components/homeComponent'  
import { Navbar } from '../components/shared'

export default function HomePage() {
    return (
        <div className=' w-full h-full bg-[#37137F] overflow-x-hidden ' >
            <div className=' w-full fixed top-0 inset-x-0 z-20 ' >
                <Navbar />
            </div>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <ForthSection />
            <FifthSection />
            <SixthSection />
            <SeventhSection />
            <EigthSection />
            <NinethSection />
        </div>
    )
}
