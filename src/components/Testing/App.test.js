import App from "./../app/App";
import React from "react";
import { shallow } from "enzyme";

describe("rendering App components", () => {
  it("It renders App component without crashing", () => {
    shallow(<App />);
  });
});
