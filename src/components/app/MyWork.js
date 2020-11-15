import React from 'react';
import freeCodeCamp from '../../assets/Karen_freeCodeCamp_Certificate_Responsive_Web_Design_2.13.2019.png';
import ReactWebsite from '../../assets/React_Website_ES6_8.1.2019.png';
import NumberGif from '../../assets/Number_Guesser.gif';
import Bomdigity from '../../assets/Bomdigity.gif';
import flashcard from '../../assets/flashcard-starter.gif';
import check from '../../assets/checkwritting.png';
import GitFitter from '../../assets/GitFitter.gif';
import businessFinancial from '../../assets/businessFinancial.png';
import ColorsRedux from '../../assets/ColorsRedux_10.2019.gif';
import FIRE from '../../assets/FIRE.png';
import AddressBook from '../../assets/AddressBookPic.png';
import MortgageBeGone from '../../assets/MortgageBeGone.jpeg';
import SinkingFund from '../../assets/SinkingFundJpeg.jpeg';
import Recipe from '../../assets/Recipe.jpeg';

const MyWork = () => (
  <div>
    <h1 id="myWork">Work Examples</h1>
    <main id="workContainer">
        <section className="workPortfolio">
            <section className="front">
              <img 
                src={Recipe}
                className="workImg front"
                alt="Recipe Box"
              />
            </section>
            <section className="back">
              <span className="strong">
              Project Name: 
              </span>
              <span className="workDetails">
              sayKaren's Recipe Box
              </span>
              <span className="strong">
                Demonstrates: 
              </span>
              <span className="workDetails">
              React, TypeScript, SCSS and Modal
              </span>
              <a href="https://github.com/saykaren/sayKarenRecipes" target="_blank" rel="noopener noreferrer" className="workDetails">
                Code 
              </a>
              <a href="https://saykaren.github.io/sayKarenRecipes/" target="_blank" rel="noopener noreferrer" className="workDetails">
                Live Site
              </a>
            </section>
          </section>
      <section className="workPortfolio">
        <section className="front">
          <img src={SinkingFund} className="workImg front" alt="SinkingFund" />
        </section>
        <section className="back">
          <span className="strong">Project Name:</span>
          <span className="workDetails">Sinking Fund</span>
          <span className="strong">Demonstrates:</span>
          <span className="workDetails">React, TypeScript, SCSS and Modal</span>
          <a
              href="https://github.com/saykaren/SinkingFund"
              target="_blank"
              rel="noopener noreferrer"
              className="workDetails"
          >
            Code
          </a>
          <a
              href="https://saykaren.github.io/SinkingFund/"
              target="_blank"
              rel="noopener noreferrer"
              className="workDetails"
          >
            Live Site
          </a>
        </section>
      </section>
      <section className="workPortfolio">
        <section className="front">
          <img src={MortgageBeGone} className="workImg front" alt="AddressBook" />
        </section>
        <section className="back">
          <span className="strong">Project Name:</span>
          <span className="workDetails">Mortgage Be Gone</span>
          <span className="strong">Demonstrates:</span>
          <span className="workDetails">React, TypeScript, SCSS and Modal</span>
          <a
            href="https://github.com/saykaren/MortgageBeGone"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Code
          </a>
          <a
            href="https://saykaren.github.io/MortgageBeGone/"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Live Site
          </a>
        </section>
      </section>
      <section className="workPortfolio">
        <section className="front">
          <img src={AddressBook} className="workImg front" alt="AddressBook" />
        </section>
        <section className="back">
          <span className="strong">Project Name:</span>
          <span className="workDetails">AddressBook</span>
          <span className="strong">Demonstrates:</span>
          <span className="workDetails">
            React, TypeScript, Jest, Enzyme, <br></br> SCSS, Fetch API and Modal
          </span>
          <a
            href="https://github.com/saykaren/AddressBook"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Code
          </a>
          <a
            href="https://saykaren.github.io/AddressBook"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Live Site
          </a>
        </section>
      </section>
      <section className="workPortfolio">
        <section className="front">
          <img src={ColorsRedux} className="workImg front" alt="ColorsRedux" />
        </section>
        <section className="back">
          <span className="strong">Project Name:</span>
          <span className="workDetails">ColorsRedux</span>
          <span className="strong">Demonstrates:</span>
          <span className="workDetails">
            Redux (useSelector() and useDispatch()) <br></br> React / Hooks /
            JavaScript / CSS
          </span>
          <a
            href="https://github.com/saykaren/ColorsRedux"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Code
          </a>
          <a
            href="https://saykaren.github.io/ColorsReduxDeploy/"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Live Site
          </a>
        </section>
      </section>
      <section className="workPortfolio">
        <section className="front">
          <img src={GitFitter} className="workImg front" alt="GitFitter" />
        </section>
        <section className="back">
          <span className="strong">Project Name:</span>
          <span className="workDetails">GitFitter</span>
          <span className="strong">Demonstrates:</span>
          <span className="workDetails">SASS / React / Hooks</span>
          <a
            href="https://github.com/saykaren/GetFitter"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Code
          </a>
          <a
            href="https://saykaren.github.io/GitFitter_DeployedSite/"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Live Site
          </a>
        </section>
      </section>
      {/* <section className="workPortfolio">
            <section className="front">
              <img 
                src={ReactWebsite}
                className="workImg front"
                alt="Alanna_website"
              />
            </section>
            <section className="back">   
              <span className="strong">
              Project Name:
              </span>
              <span className="workDetails">
              Psychologist Website
              </span>
              <span className="strong">
                Demonstrates: 
              </span>
              <span className="workDetails">
                React skills and ES6
              </span>
              <a href="https://github.com/saykaren/deployMagic" target="_blank" rel="noopener noreferrer" className="workDetails">
                Code 
              </a>
              <a href="https://saykaren.github.io/deployMagic/" target="_blank" rel="noopener noreferrer" className="workDetails">
                Live Site
              </a>
            </section>
          </section> */}

      <section className="workPortfolio">
        <section className="front">
          <img src={NumberGif} className="workImg front" alt="Number gif" />
        </section>
        <section className="back">
          <span className="strong">Project Name:</span>
          <span className="workDetails">Number Guesser</span>
          <span className="strong">Demonstrates:</span>
          <span className="workDetails">Vanilla JavaScript skills</span>
          <a
            href="https://github.com/saykaren/Number_Guesser"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Code
          </a>
          <a
            href="https://saykaren.github.io/Number_Guesser/"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Live Site
          </a>
        </section>
      </section>

      <section className="workPortfolio">
        <section className="front">
          <img src={Bomdigity} className="workImg front" alt="Bomdigity" />
        </section>

        <section className="back">
          <span className="strong">Project Name:</span>
          <span className="workDetails">Bomdigity Testing</span>
          <span className="strong">Demonstrates:</span>
          <span className="workDetails">
            Testing skills with JavaScript framework Mocha and Chai
          </span>
          <a
            href="https://github.com/saykaren/Bomdigity_Testing"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Code
          </a>
        </section>
      </section>

      <section className="workPortfolio">
        <section className="front">
          <img src={flashcard} className="workImg front" alt="Flashcard gif" />
        </section>
        <section className="back">
          <span className="strong">Project Name:</span>
          <span className="workDetails">Flashcards-Starter</span>
          <span className="strong">Demonstrates:</span>
          <span className="workDetails">
            JavaScript Classes and Object-oriented Programming (OOP)
          </span>
          <a
            href="https://github.com/saykaren/flashcards-starter"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Code
          </a>
          Live: Clone repo and in command line use node index.js to start game
        </section>
      </section>

      <section className="workPortfolio">
        <section className="front">
          <img
            src={businessFinancial}
            className="workImg front"
            alt="Business Financial Analysis"
          />
        </section>
        <section className="back">
          <span className="strong">Project Name:</span>
          <span className="workDetails">Business Financial Analysis</span>
          <span className="strong">Demonstrates:</span>
          <span className="workDetails">React / Hooks / SASS</span>
          <a
            href="https://github.com/saykaren/FinancialAnalysis"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Code
          </a>
          <a
            href="https://saykaren.github.io/BusinessFinancialAnalysis/"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Live Site
          </a>
        </section>
      </section>
      {/*<section className="workPortfolio">*/}
      {/*  <section className="front">*/}
      {/*    <img src={FIRE} className="workImg front" alt="FIRE" />*/}
      {/*  </section>*/}
      {/*  <section className="back">*/}
      {/*    <span className="strong">Project Name:</span>*/}
      {/*    <span className="workDetails">FIRE Movement</span>*/}
      {/*    <span className="strong">Demonstrates:</span>*/}
      {/*    <span className="workDetails">React skills and ES6</span>*/}
      {/*    <a*/}
      {/*      href="https://github.com/saykaren/FIRE"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*      className="workDetails"*/}
      {/*    >*/}
      {/*      Code*/}
      {/*    </a>*/}
      {/*    <a*/}
      {/*      href="https://saykaren.github.io/FIREmovement/"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*      className="workDetails"*/}
      {/*    >*/}
      {/*      Live Site*/}
      {/*    </a>*/}
      {/*  </section>*/}
      {/*</section>*/}

      <section className="workPortfolio">
        <section className="front">
          <img src={check} className="workImg front" alt="Check writting" />
        </section>
        <section className="back">
          <span className="strong">Project Name:</span>
          <span className="workDetails">Check Conversion</span>
          <span className="strong">Demonstrates:</span>
          <span className="workDetails">Vanilla Javascript and ES6 Skills</span>
          <a
            href="https://github.com/saykaren/CheckWriting7.26.2019"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Code
          </a>
          <a
            href="https://saykaren.github.io/CheckWriting7.26.2019/"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails"
          >
            Live Site
          </a>
        </section>
      </section>

      <section className="workPortfolio">
        <section className="front">
          <a
            href="https://www.freecodecamp.org/certification/saykaren/responsive-web-design"
            target="_blank"
            rel="noopener noreferrer"
            className="workDetails front"
            id="freeCodeCamp"
          >
            <img
              src={freeCodeCamp}
              className="workImg front"
              alt="freeCodeCamp Certificate"
            />
          </a>
        </section>
        <section className="back">
          <span className="strong">Certificate</span>
          <span className="workDetails">
            freeCodeCamp Responsive Web Design Certificate
          </span>
        </section>
      </section>

      {/* <section className="workPortfolio">
            <section className="front">
              <img 
                src=""
                className="workImg front"
                alt=""
              />
            </section>
            <section className="back">
              <span className="strong">
              Project Name:
              </span>
              <span className="workDetails">
              ************
              </span>
              <span className="strong">
                Demonstrates: 
              </span>
              <span className="workDetails">
                ****************
              </span>
              <a href="" target="_blank" rel="noopener noreferrer" className="workDetails">
                Code 
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className="workDetails">
                Live Site
              </a>
            </section>
          </section> */}
    </main>
  </div>
);

export default MyWork;
