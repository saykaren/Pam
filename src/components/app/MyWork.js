import React from "react";
import MountainBlanket from "../assets/MtBlanket.jpg";
import WorkContainer from "./WorkContainer";

const MyWork = () => (
  <div>
    <h1 id="myWork">Work Examples</h1>
    <main id="workContainer">
      <WorkContainer
        source={MountainBlanket}
        altString="Mountain Range Quilt"
        workName="Mountain Range Quilt"
        details="10 x 14 Quilt"
      />
      <WorkContainer
        source={MountainBlanket}
        altString="Mountain Range Quilt"
        workName="Mountain Range Quilt"
        details="10x14 Quilt"
      />{" "}
      <WorkContainer
        source={MountainBlanket}
        altString="Mountain Range Quilt"
        workName="Mountain Range Quilt"
        details="10 x 14 Quilt"
      />
      <WorkContainer
        source={MountainBlanket}
        altString="Mountain Range Quilt"
        workName="Mountain Range Quilt"
        details="10x14 Quilt"
      />
      <WorkContainer
        source={MountainBlanket}
        altString="Mountain Range Quilt"
        workName="Mountain Range Quilt"
        details="10 x 14 Quilt"
      />
      <WorkContainer
        source={MountainBlanket}
        altString="Mountain Range Quilt"
        workName="Mountain Range Quilt"
        details="10x14 Quilt"
      />
      {/* <WorkContainer
        source={}
        altString=""
        workName=""
        demonstratesWork={``}
        codeLink=""
        liveLink=""
      /> */}
    </main>
  </div>
);

export default MyWork;
