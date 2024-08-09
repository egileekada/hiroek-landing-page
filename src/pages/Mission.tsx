
import { FirstMissionSection, SecondMissionSection, ThirdMissionSection } from '../components/aboutComponent'

export default function Mission() {
    return (
        <div className=' w-full h-full bg-[#37137F] overflow-x-hidden ' >
            <FirstMissionSection />
            <SecondMissionSection />
            <ThirdMissionSection />
            {/* <ForthAboutSection /> */}
        </div>
    )
}
