import React from 'react';
import ReactDOM from 'react-dom/client';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

 import Java from './Java';
 import Python from './Python';
import Android from './Android';
import Certificate from './Certificate';
import ApplyCertificate from './ApplyCertificate';
import DownloadCertificate from './DownloadCertificate';
import VerifyCertificate from './VerifyCertificate';
import Home from './Home';
import AboutUs from './AboutUs';
import About from './About';
import ContactUs from './ContactUs';
const router = createBrowserRouter([
 
  {
    path: "Java",
    element: <Java/>,
  },
  
  {
   path: "Python",
    element: <Python/>,
  },
  {
    path: "Android",
    element: <Android/>,
  },
  {
    path: "Certificate",
    element: <Certificate/>,
  },
  {
    path: "ApplyCertificate",
    element: <ApplyCertificate/>,
  },
  {
    path: "DownloadCertificate",
    element: <DownloadCertificate/>,
  },
  {
    path: "VerifyCertificate",
    element: <VerifyCertificate/>,
  },
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "/",
    element: <Home/>,
  },

  {
    path: "AboutUs",
    element: <AboutUs/>,
  },
  
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "ContactUs",
    element: <ContactUs/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
