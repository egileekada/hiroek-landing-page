import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; 
import { Footer, Navbar } from "./components/shared";
import { AboutUsPage, CharityPage, EventPage, FeePage, HomePage, MissionPage, PolicyPage, TermsPage } from "./pages"; 

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
  return (
    <div className=" !tracking-widest paytone-one-regular relative w-screen bg-[#37137F] flex flex-col " >
      <div className=' w-full fixed top-0 inset-x-0 z-50 ' >
        <Navbar />
      </div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
