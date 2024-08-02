
import { FirstEventSection, SecondEventSection, CarouselEvent } from '../components/eventComponent' 

export default function Event() {
    return (
        <div className=' w-full h-full bg-[#37137F] overflow-x-hidden ' >
            <FirstEventSection /> 
            <CarouselEvent />
            <SecondEventSection />
        </div>
    )
}
