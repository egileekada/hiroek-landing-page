
import { FirstAboutSection, SecondAboutSection, ThirdAboutSection } from "../components/aboutComponent";

export default function AboutUs() {
    return (
        <div className=' w-full h-full bg-[#37137F] overflow-x-hidden ' >
            <FirstAboutSection />
            <SecondAboutSection />
            <ThirdAboutSection />
            {/* <ForthAboutSection /> */}
        </div>
    )
}
