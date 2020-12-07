import React from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import MyWork from "./MyWork";
import MountainBlanket from "../assets/MtBlanket.jpg";

interface LandingPageProps {
  activeItem: string;
}

const LandingPage = ({ activeItem }: LandingPageProps) => {
  return (
    <>
      {activeItem === "Home" && (
        <>
          <main className="heroSection" id="heroImage">
            <h1 id="heroText2">
              Pam Dougherty's
              <section id="heroTitle">Quilts</section>
              <img
                src={MountainBlanket}
                className=""
                id="FrontPage"
                alt="Mountain Quilt"
              />
            </h1>
          </main>
        </>
      )}
      {activeItem === "MyWork" && <MyWork />}
      {activeItem === "AboutMe" && <AboutMe />}
      {activeItem === "ContactMe" && <ContactMe />}
    </>
  );
};

export default LandingPage;
