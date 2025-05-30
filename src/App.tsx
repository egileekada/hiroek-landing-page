import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; 
import { Footer, Navbar } from "./components/shared";
import { AboutUsPage, CharityPage, EventPage, FeePage, HomePage, MissionPage, PolicyPage, TermsPage } from "./pages"; 
import React, { useState } from "react";
import { useElementScroll } from "framer-motion";

function App() {  

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/">
        {/* <Route index element={<Home />} /> */}
        <Route index element={<HomePage />} />
        <Route path='/about-us' element={<AboutUsPage />} /> 
        <Route path='/mission' element={<MissionPage />} /> 
        <Route path='/charities' element={<CharityPage />} /> 
        <Route path='/fees' element={<FeePage />} /> 
        <Route path='/partners' element={<EventPage />} /> 
        <Route path='/terms' element={<TermsPage />} />
        <Route path='/policy' element={<PolicyPage />} />
      </Route>
    )
  );



  const reftwo: any = React.useRef(null)
  const { scrollY } = useElementScroll(reftwo)

  const [ yaxis, setYaxis ] = useState(0)
  
  React.useEffect(() => {
    const unsubscribeY = scrollY.onChange((latest) => {
      console.log("Scroll Y position:", latest)
      console.log(yaxis);
      
      setYaxis(latest)
    })
    
    return () => unsubscribeY()
  }, [scrollY])

  return (
    <div className=" paytone-one-regular relative w-screen bg-[#37137F] flex flex-col " >
      <div className=' fixed top-0 inset-x-3 lg:inset-x-4 z-50 ' >
        <Navbar yaxis={yaxis} />
      </div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
