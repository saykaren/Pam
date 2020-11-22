import React, { useState } from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import FrontPage from "./FrontPage";
import HeroPicture from "./HeroPicture";
import LogoState from "./LogoState";
import MyWork from "./MyWork";

interface LandingPageProps {
    activeItem: string;
}

const LandingPage = ({activeItem}: LandingPageProps) => {

  return (
    <>
      {activeItem === "Home" && (
        <>
         <main className="heroSection" id="heroImage">
            <h1 id="heroText2">
              Pam Dougherty's
              <section id="heroTitle">Quilts</section>
            </h1>
            
          </main>
          
          <FrontPage/>
         
        </>
      )}
      {activeItem === "MyWork" && <MyWork/>}
      {activeItem === "AboutMe" && <AboutMe/>}
      {activeItem === "ContactMe" && <ContactMe/>}
    </>
  );
};

export default LandingPage;
