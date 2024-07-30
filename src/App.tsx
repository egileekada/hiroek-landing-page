import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"; 
import { Footer, Navbar } from "./components/shared";
import { AboutUsPage, HomePage, MissionPage } from "./pages"; 

function App() { 

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route path="/">
        {/* <Route index element={<Home />} /> */}
        <Route index element={<HomePage />} />
        <Route path='/about-us' element={<AboutUsPage />} /> 
        <Route path='/mission' element={<MissionPage />} /> 
      </Route>
    )
  );
  return (
    <div className=" relative w-full bg-[#37137F] text-[] flex flex-col " >
      <div className=' w-full fixed top-0 inset-x-0 z-20 ' >
        <Navbar />
      </div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
