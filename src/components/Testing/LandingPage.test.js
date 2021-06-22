import LandingPage from "./../app/LandingPage";
import { shallow } from "enzyme";

const wrapper = shallow(<LandingPage activeItem="Home" />);

describe("Render LandingPage", () => {
  it("It finds the class heroSection on LandingPage component", () => {
    expect(wrapper.find("h1").prop("id"));
  });

  it("It switches components depending upon activeItem", () => {
    var activeItemString = "MyWork";
    const wrapperMyWork = shallow(
      <LandingPage activeItem={activeItemString} />
    );
    const wrapperAboutMe = shallow(<LandingPage activeItem="AboutMe" />);
    // console.log(wrapperAboutMe.debug());
    expect(wrapperMyWork.find("MyWork")).toHaveLength(1);
    // Changed activeItem to "AboutMe"
    expect(wrapperAboutMe.find("MyWork")).toHaveLength(0);
    expect(wrapperAboutMe.find("Home")).toHaveLength(0);
    expect(wrapperAboutMe.find("AboutMe")).toHaveLength(1);
  });
});
