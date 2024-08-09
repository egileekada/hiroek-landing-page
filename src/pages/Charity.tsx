
import { CharityCarousel, ForthCharitySection, SecondCharitySection, ThirdCharitySection } from '../components/charityComponent'

export default function Charity() {
    return (
        <div className=' w-full h-full bg-[#37137F] overflow-x-hidden ' >
            {/* <FirstCharitySection /> */}
            <SecondCharitySection />
            <ThirdCharitySection />
            <CharityCarousel />
            <ForthCharitySection />
        </div>
    )
}
