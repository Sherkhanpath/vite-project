import "primereact/resources/themes/lara-light-blue/theme.css";  // theme
import "primereact/resources/primereact.min.css";                // core css
import "primeicons/primeicons.css";                              
import "primeicons/primeicons.css";                              
import "primeicons/primeicons.css";   
import { ProgressSpinner } from 'primereact/progressspinner'; 
import GoogleTranslate from "./assets/Config/GoogleTraslate";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Suspense,lazy} from "react";
// import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
// import { motion } from "framer-motion";

const Home = lazy(() => import("./Pages/Home"));
const Pricing = lazy(() => import("./Pages/Pricing"));

const Visit = lazy(() => import("./Pages/Visit"));
const Adventure = lazy(() => import("./Visitoption/Adventure"));
const Culture = lazy(() => import("./Visitoption/Culture"));
const Relax = lazy(() => import("./Visitoption/Relax"));
const MainLayout = lazy(() => import("./assets/MainLayout"));

const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/Contact"));
const BookingPage =lazy(()=>import("./Pages/BookingPage"))
const BookingNow=lazy(()=>import("./assets/Booking/BookingNow")) 
 import Errorboundary from "./components/Errorboundary/Errorboundary";
 



function App() {
  
  return (
    <>
    <BrowserRouter>
      <Suspense fallback={
        <div className="spinner-wrapper">
    <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
  </div>
       
      }>
          <GoogleTranslate/>
    <Routes>

  {/* ✅ Navbar + Footer wale sab pages */}
  <Route element={<MainLayout />}>

    <Route 
      path="/" 
      element={
        <Errorboundary>
          <Home />
        </Errorboundary>
      } 
    />

    <Route path="/pricing"
      element={
        <Errorboundary key="pricing">
          <Pricing />
        </Errorboundary>
      } 
    />

    <Route path="/visit"
      element={
        <Errorboundary key="visit">
          <Visit />
        </Errorboundary>
      } 
    />

    {/* dropdown */}
    <Route path="/visit/adventure" 
      element={
        <Errorboundary key="/visit/adventure">
          <Adventure />
        </Errorboundary>
      } 
    />

    <Route path="/visit/culture"
      element={
        <Errorboundary key="/visit/culture">
          <Culture/>
        </Errorboundary>
      }
    />

    <Route path="/visit/relax" 
      element={
        <Errorboundary key="/visit/relax">
          <Relax/>
        </Errorboundary>
      }
    />

    <Route path="/about" 
      element={
        <Errorboundary key="/about">
          <About />
        </Errorboundary>
      } 
    />

    <Route path="/contact" 
      element={
        <Errorboundary key="/contact">
          <Contact />
        </Errorboundary>
      } 
    />

    <Route path="/bookingpage" 
      element={
        <Errorboundary key="/bookingpage">
          <BookingPage />
        </Errorboundary>
      } 
    />

  </Route>

  {/* ❌ ONLY is page pe Navbar/Footer nahi chahiye */}
  <Route path="/bookingnow" 
    element={
      <Errorboundary key="/bookingnow">
        <BookingNow />
      </Errorboundary>
    } 
  />

</Routes>     
      <Footer />
     </Suspense>
    </BrowserRouter>

    <h2> sherkhanpathan</h2>
    
    
    </>
  );
}

export default App;